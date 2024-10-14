from fastapi import FastAPI, Request
from fastapi.responses import JSONResponse
from fastapi.middleware.cors import CORSMiddleware
from collections import defaultdict

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get('/')
def read_root():
    return {'Ping': 'Pong'}


def build_graph(node_ids, edges):
    graph = defaultdict(list)

    for edge in edges:
        source = edge['source']
        target = edge['target']
        graph[source].append(target)

    return graph


def has_cycle_dfs(node, graph, visited, rec_stack):
    visited[node] = True
    rec_stack[node] = True

    for neighbor in graph[node]:
        if not visited[neighbor]:
            if has_cycle_dfs(neighbor, graph, visited, rec_stack):
                return True
        elif rec_stack[neighbor]:
            return True

    rec_stack[node] = False
    return False


def is_dag(node_ids, graph):
    visited = {node: False for node in node_ids}
    rec_stack = {node: False for node in node_ids}

    for node in node_ids:
        if not visited[node]:
            if has_cycle_dfs(node, graph, visited, rec_stack):
                return False

    return True


@app.post('/pipelines/parse')
async def parse_pipeline(request: Request):
    pipeline_data = await request.json()

    nodes = pipeline_data['nodes']
    edges = pipeline_data['edges']

    node_ids = [node['id'] for node in nodes]

    num_nodes = len(node_ids)
    num_edges = len(edges)

    graph = build_graph(node_ids, edges)

    is_dag_flag = is_dag(node_ids, graph)

    return JSONResponse(content={
        'num_nodes': num_nodes,
        'num_edges': num_edges,
        'is_dag': is_dag_flag
    })

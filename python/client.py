import grpc
import px.px_pb2 as px
from px.px_pb2_grpc import BrowserStub

latest_stub = None

debug = False

def launch(stub=None):
    action = px.Action(launchAction=px.LaunchAction(headless=False))
    do_request(stub=stub, actions=[action])


def goto(url, stub=None):
    actions = px.Action(gotoAction=px.GotoAction(url=url))
    do_request(stub=stub, actions=[actions])


def type(selector, text, stub=None):
    actions = px.Action(typeAction=px.TypeAction(selector=selector, text=text))
    do_request(stub=stub, actions=[actions])


def click(selector, stub=None):
    actions = px.Action(clickAction=px.ClickAction(selector=selector))
    do_request(stub=stub, actions=[actions])


def select(selector, values, stub=None):
    actions = px.Action(selectAction=px.SelectAction(selector=selector, values=values))
    do_request(stub=stub, actions=[actions])


def get_text(selector, stub=None):
    actions = px.Action(getInnerTextAction=px.GetInnerTextAction(selector=selector))
    do_request(stub=stub, actions=[actions])

def do_request(actions, stub=None):
    global latest_stub
    if stub is None:
        stub = latest_stub
    request = px.DoRequest(actions=actions)
    stub.Do(request)

def setup(url):
    global latest_stub
    channel = grpc.insecure_channel(url)
    stub = BrowserStub(channel)
    latest_stub = stub
    return stub
    # with grpc.insecure_channel(url) as channel:
    #     latest_stub = BrowserStub(channel)
    #     return latest_stub

import px.px_pb2 as px

def launch(stub):
    action = px.Action(launchAction=px.LaunchAction(headless=False))
    do_request(stub=stub, actions=[action])


def goto(stub, url):
    actions = px.Action(gotoAction=px.GotoAction(url=url))
    do_request(stub=stub, actions=[actions])


def type(stub, selector, text):
    actions = px.Action(typeAction=px.TypeAction(selector=selector, text=text))
    do_request(stub=stub, actions=[actions])


def click(stub, selector):
    actions = px.Action(clickAction=px.ClickAction(selector=selector))
    do_request(stub=stub, actions=[actions])


def select(stub, selector, values):
    actions = px.Action(selectAction=px.SelectAction(selector=selector, values=values))
    do_request(stub=stub, actions=[actions])


def get_text(stub, selector):
    actions = px.Action(getInnerTextAction=px.GetInnerTextAction(selector=selector))
    do_request(stub=stub, actions=[actions])

def do_request(stub, actions):
    request = px.DoRequest(actions=actions)
    stub.Do(request)

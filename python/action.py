import px.px_pb2 as px

def launch():
    return px.Action(launchAction=px.LaunchAction(headless=False))


def goto(url):
    return px.Action(gotoAction=px.GotoAction(url=url))


def type(selector, text):
    return px.Action(typeAction=px.TypeAction(selector=selector, text=text))


def click(selector):
    return px.Action(clickAction=px.ClickAction(selector=selector))


def select(selector, values):
    return px.Action(selectAction=px.SelectAction(selector=selector, values=values))


def get_text(selector):
    return px.Action(getInnerTextAction=px.GetInnerTextAction(selector=selector))

import grpc
import px.px_pb2 as px
from px.px_pb2_grpc import BrowserStub
from timeit import default_timer as timer
import client

def doActions(stub):
    start = timer()
    actions = [
        client.type(selector='#first-name', text='First Name'),
        client.type(selector='#last-name', text='Last Name'),
        client.click(selector='input[type=radio][name=gender]'),
        client.click(selector='#dob'),
        client.click(selector='body > div.datepicker.datepicker-dropdown.dropdown-menu.datepicker-orient-left.datepicker-orient-top > div.datepicker-days > table > tbody > tr:nth-child(1) > td:nth-child(1)'),
        client.type(selector='#address', text='Address'),
        client.type(selector='#email', text='email@email.com'),
        client.type(selector='#password', text='Password'),
        client.type(selector='#company', text='Company'),
        client.select(selector='#role', values=['Manager']),
        client.select(selector='#expectation', values=['High salary']),
        client.click(selector='.development-ways .checkbox:nth-child(1) input'),
        client.click(selector='.development-ways .checkbox:nth-child(2) input'),
        client.click(selector='.development-ways .checkbox:nth-child(3) input'),
        client.click(selector='.development-ways .checkbox:nth-child(4) input'),
        client.click(selector='.development-ways .checkbox:nth-child(5) input'),
        client.click(selector='.development-ways .checkbox:nth-child(6) input'),
        client.type(selector='#comment', text='Comment'),
        client.click(selector='#submit'),
        client.get_text(selector='#submit-msg'),
    ]
    request = px.DoRequest(actions=actions)
    stub.Do(request)
    elapsed = timer() - start
    print('Elapsed: {:.3f}s'.format(elapsed))


def do(stub):
    actions = [
        client.launch(),
        client.goto(url='https://katalon-test.s3.amazonaws.com/aut/html/form.html')
    ]
    request = px.DoRequest(actions=actions)
    stub.Do(request)
    doActions(stub)


def run():
    with grpc.insecure_channel('localhost:50000') as channel:
        stub = BrowserStub(channel)
        do(stub)


if __name__ == "__main__":
    run()

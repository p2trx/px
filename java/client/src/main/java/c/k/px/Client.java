package c.k.px;

import java.util.concurrent.TimeUnit;
import java.util.logging.Logger;

import io.grpc.Channel;
import io.grpc.ManagedChannel;
import io.grpc.ManagedChannelBuilder;

public class Client {

  private static final Logger logger = Logger.getLogger(Client.class.getName());

  private final BrowserGrpc.BrowserBlockingStub blockingStub;
  private final BrowserGrpc.BrowserStub asyncStub;

  public Client(Channel channel) {
    blockingStub = BrowserGrpc.newBlockingStub(channel);
    asyncStub = BrowserGrpc.newStub(channel);
  }

  public void do_() {
    Action action = Action.newBuilder()
        .setLaunchAction(LaunchAction.newBuilder().setHeadless(false).build())
        .setGotoAction(GotoAction.newBuilder().setUrl("https://katalon-test.s3.amazonaws.com/aut/html/form.html").build())
        .build();
    blockingStub.do_(DoRequest.newBuilder().addActions(action).build());

    action = Action.newBuilder()
        .setTypeAction(TypeAction.newBuilder().setSelector("#first-name").setText("First Name"))
        .setTypeAction(TypeAction.newBuilder().setSelector("#last-name").setText("Last Name"))
        .setClickAction(ClickAction.newBuilder().setSelector("input[type=radio][name=gender]"))
        .setClickAction(ClickAction.newBuilder().setSelector("#dob"))
        .setClickAction(ClickAction.newBuilder().setSelector("body > div.datepicker.datepicker-dropdown.dropdown-menu.datepicker-orient-left.datepicker-orient-top > div.datepicker-days > table > tbody > tr:nth-child(1) > td:nth-child(1)"))
        .build();
    DoResponse response = blockingStub.do_(DoRequest.newBuilder().addActions(action).build());
  }

  public static void main(String[] args) throws InterruptedException {
    String target = "localhost:50000";
    if (args.length > 0) {
      if ("--help".equals(args[0])) {
        System.err.println("Usage: [target]");
        System.err.println("");
        System.err.println("  target  The server to connect to. Defaults to " + target);
        System.exit(1);
      }
      target = args[0];
    }

    ManagedChannel channel = ManagedChannelBuilder.forTarget(target).usePlaintext().build();
    try {
      Client client = new Client(channel);
      client.do_();
    } finally {
      channel.shutdownNow().awaitTermination(5, TimeUnit.SECONDS);
    }
  }
}

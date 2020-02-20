package com.katalon.px;

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
    ClickAction clickAction = ClickAction.newBuilder().setSelector("#button").build();
    DoRequest request = DoRequest.newBuilder().addActions(Action.newBuilder().setClickAction(clickAction)).build();
    DoResponse response = blockingStub.do_(request);
  }

  public static void main(String[] args) throws InterruptedException {
    String target = "localhost:8980";
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

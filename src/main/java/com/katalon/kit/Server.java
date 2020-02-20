package com.katalon.kit;

import java.io.IOException;
import java.util.concurrent.TimeUnit;
import java.util.logging.Logger;

import com.katalon.kit.service.BrowserService;

import io.grpc.ServerBuilder;

public class Server {

  private static final Logger logger = Logger.getLogger(Server.class.getName());

  private final int port;
  private final io.grpc.Server server;

  public Server(int port) {
    this(ServerBuilder.forPort(port), port);
  }

  public Server(ServerBuilder<?> serverBuilder, int port) {
    this.port = port;
    server = serverBuilder
        .addService(new BrowserService())
        .build();
  }

  public void start() throws IOException {
    server.start();
    logger.info("Server started, listening on " + port);
    Runtime.getRuntime().addShutdownHook(new Thread() {
      @Override
      public void run() {
        // Use stderr here since the logger may have been reset by its JVM shutdown hook.
        System.err.println("*** shutting down gRPC server since JVM is shutting down");
        try {
          Server.this.stop();
        } catch (InterruptedException e) {
          e.printStackTrace(System.err);
        }
        System.err.println("*** server shut down");
      }
    });
  }

  public void stop() throws InterruptedException {
    if (server != null) {
      server.shutdown().awaitTermination(30, TimeUnit.SECONDS);
    }
  }

  private void blockUntilShutdown() throws InterruptedException {
    if (server != null) {
      server.awaitTermination();
    }
  }

  public static void main(String[] args) throws Exception {
    Server server = new Server(8980);
    server.start();
    server.blockUntilShutdown();
  }
}

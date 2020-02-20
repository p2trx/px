package com.katalon.kit.px;

import static io.grpc.MethodDescriptor.generateFullMethodName;
import static io.grpc.stub.ClientCalls.asyncBidiStreamingCall;
import static io.grpc.stub.ClientCalls.asyncClientStreamingCall;
import static io.grpc.stub.ClientCalls.asyncServerStreamingCall;
import static io.grpc.stub.ClientCalls.asyncUnaryCall;
import static io.grpc.stub.ClientCalls.blockingServerStreamingCall;
import static io.grpc.stub.ClientCalls.blockingUnaryCall;
import static io.grpc.stub.ClientCalls.futureUnaryCall;
import static io.grpc.stub.ServerCalls.asyncBidiStreamingCall;
import static io.grpc.stub.ServerCalls.asyncClientStreamingCall;
import static io.grpc.stub.ServerCalls.asyncServerStreamingCall;
import static io.grpc.stub.ServerCalls.asyncUnaryCall;
import static io.grpc.stub.ServerCalls.asyncUnimplementedStreamingCall;
import static io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall;

/**
 */
@javax.annotation.Generated(
    value = "by gRPC proto compiler (version 1.27.1)",
    comments = "Source: proto/px.proto")
public final class BrowserGrpc {

  private BrowserGrpc() {}

  public static final String SERVICE_NAME = "px.Browser";

  // Static method descriptors that strictly reflect the proto.
  private static volatile io.grpc.MethodDescriptor<com.katalon.kit.px.DoRequest,
      com.katalon.kit.px.DoResponse> getDoMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "Do",
      requestType = com.katalon.kit.px.DoRequest.class,
      responseType = com.katalon.kit.px.DoResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<com.katalon.kit.px.DoRequest,
      com.katalon.kit.px.DoResponse> getDoMethod() {
    io.grpc.MethodDescriptor<com.katalon.kit.px.DoRequest, com.katalon.kit.px.DoResponse> getDoMethod;
    if ((getDoMethod = BrowserGrpc.getDoMethod) == null) {
      synchronized (BrowserGrpc.class) {
        if ((getDoMethod = BrowserGrpc.getDoMethod) == null) {
          BrowserGrpc.getDoMethod = getDoMethod =
              io.grpc.MethodDescriptor.<com.katalon.kit.px.DoRequest, com.katalon.kit.px.DoResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "Do"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.katalon.kit.px.DoRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.katalon.kit.px.DoResponse.getDefaultInstance()))
              .setSchemaDescriptor(new BrowserMethodDescriptorSupplier("Do"))
              .build();
        }
      }
    }
    return getDoMethod;
  }

  /**
   * Creates a new async stub that supports all call types for the service
   */
  public static BrowserStub newStub(io.grpc.Channel channel) {
    io.grpc.stub.AbstractStub.StubFactory<BrowserStub> factory =
      new io.grpc.stub.AbstractStub.StubFactory<BrowserStub>() {
        @java.lang.Override
        public BrowserStub newStub(io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
          return new BrowserStub(channel, callOptions);
        }
      };
    return BrowserStub.newStub(factory, channel);
  }

  /**
   * Creates a new blocking-style stub that supports unary and streaming output calls on the service
   */
  public static BrowserBlockingStub newBlockingStub(
      io.grpc.Channel channel) {
    io.grpc.stub.AbstractStub.StubFactory<BrowserBlockingStub> factory =
      new io.grpc.stub.AbstractStub.StubFactory<BrowserBlockingStub>() {
        @java.lang.Override
        public BrowserBlockingStub newStub(io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
          return new BrowserBlockingStub(channel, callOptions);
        }
      };
    return BrowserBlockingStub.newStub(factory, channel);
  }

  /**
   * Creates a new ListenableFuture-style stub that supports unary calls on the service
   */
  public static BrowserFutureStub newFutureStub(
      io.grpc.Channel channel) {
    io.grpc.stub.AbstractStub.StubFactory<BrowserFutureStub> factory =
      new io.grpc.stub.AbstractStub.StubFactory<BrowserFutureStub>() {
        @java.lang.Override
        public BrowserFutureStub newStub(io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
          return new BrowserFutureStub(channel, callOptions);
        }
      };
    return BrowserFutureStub.newStub(factory, channel);
  }

  /**
   */
  public static abstract class BrowserImplBase implements io.grpc.BindableService {

    /**
     */
    public void do_(com.katalon.kit.px.DoRequest request,
        io.grpc.stub.StreamObserver<com.katalon.kit.px.DoResponse> responseObserver) {
      asyncUnimplementedUnaryCall(getDoMethod(), responseObserver);
    }

    @java.lang.Override public final io.grpc.ServerServiceDefinition bindService() {
      return io.grpc.ServerServiceDefinition.builder(getServiceDescriptor())
          .addMethod(
            getDoMethod(),
            asyncUnaryCall(
              new MethodHandlers<
                com.katalon.kit.px.DoRequest,
                com.katalon.kit.px.DoResponse>(
                  this, METHODID_DO)))
          .build();
    }
  }

  /**
   */
  public static final class BrowserStub extends io.grpc.stub.AbstractAsyncStub<BrowserStub> {
    private BrowserStub(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected BrowserStub build(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      return new BrowserStub(channel, callOptions);
    }

    /**
     */
    public void do_(com.katalon.kit.px.DoRequest request,
        io.grpc.stub.StreamObserver<com.katalon.kit.px.DoResponse> responseObserver) {
      asyncUnaryCall(
          getChannel().newCall(getDoMethod(), getCallOptions()), request, responseObserver);
    }
  }

  /**
   */
  public static final class BrowserBlockingStub extends io.grpc.stub.AbstractBlockingStub<BrowserBlockingStub> {
    private BrowserBlockingStub(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected BrowserBlockingStub build(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      return new BrowserBlockingStub(channel, callOptions);
    }

    /**
     */
    public com.katalon.kit.px.DoResponse do_(com.katalon.kit.px.DoRequest request) {
      return blockingUnaryCall(
          getChannel(), getDoMethod(), getCallOptions(), request);
    }
  }

  /**
   */
  public static final class BrowserFutureStub extends io.grpc.stub.AbstractFutureStub<BrowserFutureStub> {
    private BrowserFutureStub(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected BrowserFutureStub build(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      return new BrowserFutureStub(channel, callOptions);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<com.katalon.kit.px.DoResponse> do_(
        com.katalon.kit.px.DoRequest request) {
      return futureUnaryCall(
          getChannel().newCall(getDoMethod(), getCallOptions()), request);
    }
  }

  private static final int METHODID_DO = 0;

  private static final class MethodHandlers<Req, Resp> implements
      io.grpc.stub.ServerCalls.UnaryMethod<Req, Resp>,
      io.grpc.stub.ServerCalls.ServerStreamingMethod<Req, Resp>,
      io.grpc.stub.ServerCalls.ClientStreamingMethod<Req, Resp>,
      io.grpc.stub.ServerCalls.BidiStreamingMethod<Req, Resp> {
    private final BrowserImplBase serviceImpl;
    private final int methodId;

    MethodHandlers(BrowserImplBase serviceImpl, int methodId) {
      this.serviceImpl = serviceImpl;
      this.methodId = methodId;
    }

    @java.lang.Override
    @java.lang.SuppressWarnings("unchecked")
    public void invoke(Req request, io.grpc.stub.StreamObserver<Resp> responseObserver) {
      switch (methodId) {
        case METHODID_DO:
          serviceImpl.do_((com.katalon.kit.px.DoRequest) request,
              (io.grpc.stub.StreamObserver<com.katalon.kit.px.DoResponse>) responseObserver);
          break;
        default:
          throw new AssertionError();
      }
    }

    @java.lang.Override
    @java.lang.SuppressWarnings("unchecked")
    public io.grpc.stub.StreamObserver<Req> invoke(
        io.grpc.stub.StreamObserver<Resp> responseObserver) {
      switch (methodId) {
        default:
          throw new AssertionError();
      }
    }
  }

  private static abstract class BrowserBaseDescriptorSupplier
      implements io.grpc.protobuf.ProtoFileDescriptorSupplier, io.grpc.protobuf.ProtoServiceDescriptorSupplier {
    BrowserBaseDescriptorSupplier() {}

    @java.lang.Override
    public com.google.protobuf.Descriptors.FileDescriptor getFileDescriptor() {
      return com.katalon.kit.px.BrowserProto.getDescriptor();
    }

    @java.lang.Override
    public com.google.protobuf.Descriptors.ServiceDescriptor getServiceDescriptor() {
      return getFileDescriptor().findServiceByName("Browser");
    }
  }

  private static final class BrowserFileDescriptorSupplier
      extends BrowserBaseDescriptorSupplier {
    BrowserFileDescriptorSupplier() {}
  }

  private static final class BrowserMethodDescriptorSupplier
      extends BrowserBaseDescriptorSupplier
      implements io.grpc.protobuf.ProtoMethodDescriptorSupplier {
    private final String methodName;

    BrowserMethodDescriptorSupplier(String methodName) {
      this.methodName = methodName;
    }

    @java.lang.Override
    public com.google.protobuf.Descriptors.MethodDescriptor getMethodDescriptor() {
      return getServiceDescriptor().findMethodByName(methodName);
    }
  }

  private static volatile io.grpc.ServiceDescriptor serviceDescriptor;

  public static io.grpc.ServiceDescriptor getServiceDescriptor() {
    io.grpc.ServiceDescriptor result = serviceDescriptor;
    if (result == null) {
      synchronized (BrowserGrpc.class) {
        result = serviceDescriptor;
        if (result == null) {
          serviceDescriptor = result = io.grpc.ServiceDescriptor.newBuilder(SERVICE_NAME)
              .setSchemaDescriptor(new BrowserFileDescriptorSupplier())
              .addMethod(getDoMethod())
              .build();
        }
      }
    }
    return result;
  }
}

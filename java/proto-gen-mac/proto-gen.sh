OUTPUT_DIR=../src/main/java
PROTO_DIR=../proto/*.proto
mkdir -p ${OUTPUT_DIR}
./protoc --plugin=protoc-gen-grpc-java=protoc-gen-grpc-java.exe -I=../ --java_out=${OUTPUT_DIR} --grpc-java_out=${OUTPUT_DIR} ${PROTO_DIR}
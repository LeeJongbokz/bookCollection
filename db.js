import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

mongoose.Promise = global.Promise;

// mongoose.connect()는 mongoose와 MongoDB를 연결하기 위해 사용하는 메소드임
// 여기서 process.env.MONGO_URL은 MongoDB의 주소를 나타내며, 보안상 목적으로 env파일에 저장해둠
// mongoose.connect()에는 옵션을 추가할 수 있음

// useNewUrlParser는 MongoDB의 connection string parser가 deprecated되면서,
// 새로운 parser를 사용하는데, 만약 새로운 parser에서 bug가 발생되었을 시,
// 이전 parser를 사용하기 위해서 지정하는 옵션임

// useFindAndModify는 Default로 True로 선언됨
// 만약, findOneAndUpdate()와 findOneAndRemove()가 
// findAndModify() 대신에 native findOneAndUpdate()를 사용하기를 원하면
// false로 지정함

// userUnifiedTopology는 Default로 False로 선언됨
// 만약 MongoDB 드라이버의 새로운 connection management 엔진을 사용하고자 하면 true로 지정함

mongoose.connect(
    process.env.MONGO_URL,
    {
        useNewUrlParser: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    }
)

// const db = mongoose.connection은 실제 connection 인스턴스를 만듦
const db = mongoose.connection;

// handleOpen과 handleError는 DB의 연결과 연결 에러를 나타내기 위한 콜백 함수로서의 기능을 함   
const handleOpen = () => console.log("Connected to DB");
const handleError = error => console.log("Error on DB Connection:${error}");

// db가 연결되어서 open되게 되면 handleOpen 함수가 실행된다
// handleOpen 함수가 실행되면 미리 입력한 문장이 출력되어서 DB가 잘 연결되었음을 확인할 수 있다. 
db.once("open", handleOpen);

// db 연결에 에러가 발생하면 handleError 함수가 실행된다
// handleError 함수가 실행되면 미리 입력한 문장이 출력되어서 에러 여부를 확인할 수 있다. 
db.on("error", handleError);

import express from "express"

const app = express();

const PORT = Number(process.env.PORT || 3000);

// ヘルスチェック
app.get("/healthz", (_req, res) => res.send("ok"));

app.get("/", (req, res) => {
	res.send("Hello, World!!");
});

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});

//const main = async () => {
//	console.log("Hello, World!!");
//};
//
//main().catch((error)=>{
//	console.error("Error occurred:", error);
//});

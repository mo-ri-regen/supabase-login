import Head from "next/head";
// import styles from "../styles/Home.module.css";
import Link from "next/link";
import { LoginUser } from "../components/LoginUser";

export default function Home() {
  const Login = () => {
    //jsonファイルの取得
    const json = require("../supabase/connect.json");
    const supabase = createClient(json.SUPABASE_URL, json.SUPABASE_KEY);

    //ログイン
  };
  return (
    <>
      <LoginUser />
      <button onClick={Login}>ログイン</button>
      <Link href="/signup">
        <a>パスワード忘れた方はこちら</a>
      </Link>
    </>
  );
}

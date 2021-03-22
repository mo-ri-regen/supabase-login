import Link from "next/link";

export default function SignUp() {
  const SignUp = () => {
    //jsonファイルの取得
    const json = require("../supabase/connect.json");
    const supabase = createClient(json.SUPABASE_URL, json.SUPABASE_KEY);

    //supabaseに新規ユーザ登録
    const InsertUser = async () => {
      const { data, error } = await supabase
        .from("user")
        .insert([{ username: "2test", password: "2asdasd1", money: 2000 }]);
    };
    InsertUser();
    //ページ遷移をする
    Router.push("./about.js");
  };
  return (
    <>
      <LoginUser />
      <button onClick={SignUp}>新規登録</button>
      <Link href="/">
        <a>サインインはこちら</a>
      </Link>
    </>
  );
}

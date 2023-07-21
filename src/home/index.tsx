import { Button } from "antd";
import { Tweet } from "react-twitter-widgets";

export default function Home() {

  return (
    <div className=" w-screen h-screen">
        <div className=" container m-auto">
            <Button>Detail</Button>

            <Tweet tweetId="1671298633872941056" />
        </div>
    </div>
  )
}

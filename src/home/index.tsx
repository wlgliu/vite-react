import { Button } from "antd";
import { useState } from "react";

export default function Home() {
  const [value, setValue] = useState(true)

  return (
    <div className=" w-screen h-screen">
        <div className=" container m-auto">
            <Button>Detail</Button>

            <input id="myinput" onChange={() => setValue(!value)} checked={value} type="checkbox" />

            <Button onClick={() => {
              const input = document.getElementById('myinput') as HTMLInputElement
              if (!input) return;

              const is = input && input.value
              console.log(is);
              
            }}>isEncode</Button>
        </div>
    </div>
  )
}

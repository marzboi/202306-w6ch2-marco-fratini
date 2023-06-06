import { Actions } from "../../phone/components/actions";
import { Info } from "../../phone/components/info";
import { Keyboard } from "../../phone/components/keyboard";

export function App() {
  return (
    <>
      <Info></Info>
      <main className="phone">
        <Keyboard></Keyboard>
        <Actions></Actions>
      </main>
    </>
  );
}

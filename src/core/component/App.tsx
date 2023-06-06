import { Actions } from "../../feature/phone/components/actions";
import { Info } from "../../feature/phone/components/info";
import { Keyboard } from "../../feature/phone/components/keyboard";

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

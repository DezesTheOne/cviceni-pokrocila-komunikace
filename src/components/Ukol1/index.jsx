import { SwitchButton } from './SwitchButton';
import './style.css';

/*
  Zadání: V tomto úkolu začneme zjednodušnou komunikací mezi komponentami. 

  Krok 1: Založte stav, který bude udávat jestli je žárovka zapnutá nebo vypnutá, například 
  bulbOn a setBulbOn. Podle stavu nastavte třídu `bulb--on` na žárovku.

  Krok 2: Přidejte komponentě SwitchButton novou porp onSwitch, která bude očekávat funkci, 
  která se zavolá při kliknutí na tlačítko a bude měnit stav žárovky. Vyzkoušejte, že jde 
  pomocí vypínače žárovku zapnout a vypnout.

  Krok 3: Vypínač má taky svou ikonku. Přidejte tedy do komponenty SwitchButton prop `on`, 
  která bude udávat jestli je vypínač zapnutý nebo vypnutý. Podle toho nastavte třídu 
  `switch-button--on` na tlačitku. Stav `bulbOn` použijte k nastavení ikonky vypínače a 
  jeho textu, takže když je žárovka zapnutá, tak je vypínač zapnutý a bude hlásit "Vypnout" 
  a naopak.

  Krok 4: Přejďete na pokročilejší komunikaci. V komponentě Ukol1 založte funkci 
  `handleSwitch`, která bude mít jeden parametr `isOn`. Tuto funkci předejte komponentě 
  SwitchButton jako prop `onSwitch`. Ve funkci `handleSwitch` nastavte stav `bulbOn` podle 
  parametru `isOn`. Vyzkoušejte, že jde pomocí vypínače žárovku zapnout a vypnout.

  Krok 5: Pokud bude chtít uživatel žárovku zapnout, tak se ho zeptejte, jestli je si 
  opravdu jistý pomocí window.confirm. Pokud uživatel odpoví ne, tak žárovku nezapínejte. 
  Pokud uživatel chce žárovku vypnout, tak se ho neptejte a žárovku rovnou vypněte.
*/

export const Ukol1 = () => {
  return (
    <>
      <div className="bulb bulb--on" />
      <SwitchButton label="Vypnout" />
    </>
  );
};

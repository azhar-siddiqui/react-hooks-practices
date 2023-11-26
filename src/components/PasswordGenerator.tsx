import { useCallback, useEffect, useRef, useState } from "react";

const PasswordGenerator = () => {
  const passwordRef = useRef(null);

  const [length, setLength] = useState<number>(8);
  const [number, setNumber] = useState<boolean>(false);
  const [character, setCharacter] = useState<boolean>(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (number) str += "0123456789";

    if (character) str += "!@#$%^&*()_+={}[]|`";

    for (let i = 0; i <= length; i++) {
      const char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, number, character, setPassword]);

  useEffect(() => {
    passwordGenerator();
  }, [length, number, character, passwordGenerator]);

  const handleCopyPassword = useCallback(() => {
    if (passwordRef?.current) {
      const inputElement = passwordRef?.current as HTMLInputElement | null;
      inputElement?.select();
      inputElement?.setSelectionRange(0, 99999);
      document.execCommand("copy");
      // window.navigator.clipboard.writeText(password);
      alert("copied password");
    }
  }, [passwordRef]);

  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="p-5 bg-white rounded-lg shadow-lg text-[#333] w-full max-w-[550px] flex flex-col items-center gap-5">
        <h1 className="text-3xl font-bold">Password Generator</h1>
        <div className="w-full flex items-center gap-5">
          <input
            type="text"
            name="text"
            id="text"
            className="w-full bg-[#f2f2f2] text-[#333] focus:outline-[#333]  border border-gray-300 px-5 py-2 rounded-lg"
            placeholder="Password"
            value={password}
            readOnly
            ref={passwordRef}
          />
          <button
            className="bg-[#333] px-5 py-2 text-white rounded-lg"
            onClick={handleCopyPassword}
          >
            Copy
          </button>
        </div>
        <div className="w-full flex items-center gap-x-2">
          <div className="w-full flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer"
              name="passwordRange"
              onChange={(e) => {
                setLength(Number(e.target.value));
              }}
            />{" "}
            <label htmlFor="passwordRange">Length:{length}</label>
          </div>
          <div className="w-full flex items-center gap-2">
            <input
              type="checkbox"
              defaultChecked={number}
              onChange={() => {
                setNumber((prev) => !prev);
              }}
              name="incNumber"
              id="incNumber"
            />
            <label htmlFor="incNumber">Number</label>
          </div>
          <div className="w-full flex items-center gap-2">
            <input
              type="checkbox"
              defaultChecked={character}
              onChange={() => {
                setCharacter((prev) => !prev);
              }}
              name="incChar"
              id="incChar"
            />{" "}
            <label htmlFor="incChar">Characters</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PasswordGenerator;

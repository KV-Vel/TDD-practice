import caesarCipher from "./caesarCipher";

test("should return encrypted string", () => {
    expect(caesarCipher("abc", 3)).toBe("def");
    expect(caesarCipher("abc", 2)).toBe("cde");
    expect(caesarCipher("abc", 1)).toBe("bcd");
});

test("if index of letter is at the end of the alphabet, count shift from the start of alphabet", () => {
    expect(caesarCipher("xyz", 3)).toBe("abc");
    expect(caesarCipher("wax", 3)).toBe("zda");
    expect(caesarCipher("xyz", 1)).toBe("yza");
});

test("function should preserve uppercase letters", () => {
    expect(caesarCipher("XYZ", 3)).toBe("ABC");
    expect(caesarCipher("Hola", 4)).toBe("Lspe");
    expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
});

test("cipher should preserve punctuation", () => {
    expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
});

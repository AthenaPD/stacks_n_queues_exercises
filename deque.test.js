const Deque = require("./deque");

let deque;

beforeEach(function() {
    deque = new Deque();
});

describe("append left", function() {
    it("places the value at the start of the deque and returns undefined", function() {
        expect(deque.appendLeft(10)).toBe(undefined);
        expect(deque.left.val).toBe(10);
        expect(deque.right.val).toBe(10);
        deque.appendLeft(100);
        expect(deque.left.val).toBe(100);
        expect(deque.right.val).toBe(10);
        deque.appendLeft(1000);
        expect(deque.left.val).toBe(1000);
        expect(deque.right.val).toBe(10);
    });
});

describe("append right", function() {
    it("places the value at the end of the deque and returns undefined", function() {
        expect(deque.appendRight(10)).toBe(undefined);
        expect(deque.left.val).toBe(10);
        expect(deque.right.val).toBe(10);
        deque.appendRight(100);
        expect(deque.left.val).toBe(10);
        expect(deque.right.val).toBe(100);
        deque.appendRight(1000);
        expect(deque.left.val).toBe(10);
        expect(deque.right.val).toBe(1000);
    });
});

describe("pop left", function() {
    it("returns the value of the node removed from the start of the deque", function() {
        deque.appendRight(100);
        deque.appendLeft(10);
        deque.appendRight(1000);
        let removed = deque.popLeft();
        expect(removed).toBe(10);
        expect(deque.size).toBe(2);
        deque.popLeft();
        deque.popLeft();
        expect(deque.size).toBe(0);
    });

    it("throws and error if the queue is empty", function() {
        expect(() => deque.popLeft()).toThrow(Error);
    });
});

describe("pop right", function() {
    it("returns the value of the node removed from the end of the deque", function() {
        deque.appendRight(100);
        deque.appendLeft(10);
        deque.appendRight(1000);
        let removed = deque.popRight();
        expect(removed).toBe(1000);
        expect(deque.size).toBe(2);
        deque.popRight();
        deque.popRight();
        expect(deque.size).toBe(0);
    });

    it("throws and error if the queue is empty", function() {
        expect(() => deque.popRight()).toThrow(Error);
    });
});

describe("peek left", function() {
    it("returns the value at the left side of the deque", function() {
        deque.appendLeft(3);
        expect(deque.peekLeft()).toBe(3);
        deque.appendLeft(1);
        expect(deque.peekLeft()).toBe(1);
        deque.appendRight(5);
        expect(deque.peekLeft()).toBe(1);
    });
});

describe("peek right", function() {
    it("returns the value at the right side of the deque", function() {
        deque.appendRight(3);
        expect(deque.peekRight()).toBe(3);
        deque.appendRight(5);
        expect(deque.peekRight()).toBe(5);
        deque.appendLeft(1);
        expect(deque.peekRight()).toBe(5);
    });
});

describe("isEmpty", function() {
    it("returns true for empty deque", function() {
        expect(deque.isEmpty()).toBe(true);
    });

    it("returns false for nonempty deques", function() {
        deque.appendLeft(3);
        expect(deque.isEmpty()).toBe(false);
    });
});

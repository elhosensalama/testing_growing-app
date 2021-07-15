const growing = require("../growing");
const html = `
            <div class="cons">
                <h1 class="main-heading" style="font-size:30px;">
                    Hello World
                </h1>
            </div>
        `;
describe("testing the growing function", () => {
    document.body.insertAdjacentHTML("afterbegin", html);
    let txt = document.querySelector('.main-heading');
    test("check the Start Font Size should be equal 30px", () => {
        expect(getComputedStyle(txt).fontSize).checkInitFontSize();
    });
    test("check the Final Font Size should be equal 100px", () => {
        jest.useFakeTimers();
        growing();
        jest.runAllTimers();
        expect(getComputedStyle(txt).fontSize).checkFinalFontSize();
    });
});
expect.extend({
    checkInitFontSize(received) {
        const pass = received == '30px';
        if (pass) {
            return {
                message: () => `Good the init font size is correct`,
                pass: true,
            };
        } else {
            return {
                message: () => `Error : font size ${received} not equal 30px`,
                pass: false,
            };
        }
    },
    checkFinalFontSize(received) {
        const pass = received == '100px';
        if (pass) {
            return {
                message: () => `Good the final font size is correct`,
                pass: true,
            };
        } else {
            return {
                message: () => `Error : font size ${received} not equal 100px`,
                pass: false,
            };
        }
    },
});
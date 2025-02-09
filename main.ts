let num = 100000000
// let big = Buffer.fromArray([97, 96, 93, 87, 80, 76, 77, 76, 80, 90, 95, 95, 95, 94, 93, 93, 95, 95, 96, 95, 92, 90, 87, 83, 79, 75, 74, 75, 79, 82, 83, 83, 84, 87, 92, 98, 100, 100, 108, 116, 120, 123, 124, 124, 123, 124, 124, 124, 123, 124, 124, 124, 123, 123, 124, 124, 124, 124, 124, 124, 123, 124, 124, 123, 123, 124, 123, 124, 123, 124, 124, 124, 123, 123, 123, 123, 123, 123, 124, 124, 124, 124, 122, 119, 118, 115, 114, 112, 109, 106, 102, 97, 93, 89, 84, 80, 79, 79, 75, 73, 69, 65, 59, 55, 54, 53, 54, 57, 55, 53, 53, 54, 53, 52, 57, 64, 70, 73, 78, 81, 84, 88, 91, 93, 93, 93, 93, 95, 97, 98, 99, 98, 97, 97, 97, 97, 95, 94, 98, 100, 99, 95, 91, 84, 80, 80, 79, 79, 79, 79, 79, 80, 79, 74, 66, 56, 50, 46, 42, 38, 34, 29, 30, 34, 35, 36, 32, 27, 27, 29, 29, 29, 30, 29, 28, 27, 27, 27, 28, 31, 35, 37, 36, 32, 28, 28, 31, 33, 35, 35, 34, 34, 31, 27, 27, 27, 25, 25, 28, 28, 28, 28, 29, 29, 29, 29, 28, 28, 29, 29, 31, 35, 36, 34, 31, 29, 26, 23, 17, 16, 21, 27, 33, 40, 45, 50, 53, 54, 57, 57, 53, 53, 53, 54, 55, 57, 58, 61, 65, 68, 69, 69, 69, 69, 72, 76, 79, 84, 87, 91, 94, 97, 98, 98, 98, 97,])
// console.logValue("big.toHex()", big.toHex())

game.onPaint(() => {
    // Draw to screen here
    console.log("Start: ("+ num +" tests, output in ms)")

    testBuffersCreate()
    testBuffersGet()
    // testCppMethods()

    console.log("End")
})

function pack(x: number, y: number) {
    return (Math.clamp(-30000, 30000, x | 0) & 0xffff) | (Math.clamp(-30000, 30000, y | 0) << 16)
}
//% shim=ImageMethods::_fillRect
function _fillRect(img: Image, xy: number, wh: number, c: color): void { }
function testCppMethods() {
    // _fillRect is 7.5% faster then image.screenImage().fillRect and 6.2% faster then helpers.imageFillRect
    
    console.log("Testing methods of drawing vertical lines with cpp")
    let startTime = control.millis()
    for (let i = 0; i < num; i++) {
        image.screenImage().fillRect(10, 10, 1, 100, 5)
    }
    console.logValue("image.screenImage().fillRect", control.millis() - startTime)

    startTime = control.millis()
    for (let i = 0; i < num; i++) {
        helpers.imageFillRect(image.screenImage(), 20, 10, 1, 100, 5)
    }
    console.logValue("helpers.imageFillRect", control.millis() - startTime)

    startTime = control.millis()
    for (let i = 0; i < num; i++) {
        _fillRect(image.screenImage(), pack(30, 10), pack(1, 100), 5)
    }
    console.logValue("_fillRect", control.millis() - startTime)
}

function testBuffersCreate() {
    console.log("Testing buffer creation against arrays")
    let b0 = 0;
    let b1 = 0;
    let b2 = 0;
    let startTime = control.millis()
    for (let c = 0; c < 5; c++) {
        startTime = control.millis()
        for (let i = 0; i < num/5; i++) {
            let big = [97, 96, 93, 87, 80, 76, 77, 76, 80, 90, 95, 95, 95, 94, 93, 93, 95, 95, 96, 95, 92, 90, 87, 83, 79, 75, 74, 75, 79, 82, 83, 83, 84, 87, 92, 98, 100, 100, 108, 116, 120, 123, 124, 124, 123, 124, 124, 124, 123, 124, 124, 124, 123, 123, 124, 124, 124, 124, 124, 124, 123, 124, 124, 123, 123, 124, 123, 124, 123, 124, 124, 124, 123, 123, 123, 123, 123, 123, 124, 124, 124, 124, 122, 119, 118, 115, 114, 112, 109, 106, 102, 97, 93, 89, 84, 80, 79, 79, 75, 73, 69, 65, 59, 55, 54, 53, 54, 57, 55, 53, 53, 54, 53, 52, 57, 64, 70, 73, 78, 81, 84, 88, 91, 93, 93, 93, 93, 95, 97, 98, 99, 98, 97, 97, 97, 97, 95, 94, 98, 100, 99, 95, 91, 84, 80, 80, 79, 79, 79, 79, 79, 80, 79, 74, 66, 56, 50, 46, 42, 38, 34, 29, 30, 34, 35, 36, 32, 27, 27, 29, 29, 29, 30, 29, 28, 27, 27, 27, 28, 31, 35, 37, 36, 32, 28, 28, 31, 33, 35, 35, 34, 34, 31, 27, 27, 27, 25, 25, 28, 28, 28, 28, 29, 29, 29, 29, 28, 28, 29, 29, 31, 35, 36, 34, 31, 29, 26, 23, 17, 16, 21, 27, 33, 40, 45, 50, 53, 54, 57, 57, 53, 53, 53, 54, 55, 57, 58, 61, 65, 68, 69, 69, 69, 69, 72, 76, 79, 84, 87, 91, 94, 97, 98, 98, 98, 97,]
        }
        b0 += control.millis() - startTime

        startTime = control.millis()
        for (let i = 0; i < num/5; i++) {
            let big = Buffer.fromArray([97, 96, 93, 87, 80, 76, 77, 76, 80, 90, 95, 95, 95, 94, 93, 93, 95, 95, 96, 95, 92, 90, 87, 83, 79, 75, 74, 75, 79, 82, 83, 83, 84, 87, 92, 98, 100, 100, 108, 116, 120, 123, 124, 124, 123, 124, 124, 124, 123, 124, 124, 124, 123, 123, 124, 124, 124, 124, 124, 124, 123, 124, 124, 123, 123, 124, 123, 124, 123, 124, 124, 124, 123, 123, 123, 123, 123, 123, 124, 124, 124, 124, 122, 119, 118, 115, 114, 112, 109, 106, 102, 97, 93, 89, 84, 80, 79, 79, 75, 73, 69, 65, 59, 55, 54, 53, 54, 57, 55, 53, 53, 54, 53, 52, 57, 64, 70, 73, 78, 81, 84, 88, 91, 93, 93, 93, 93, 95, 97, 98, 99, 98, 97, 97, 97, 97, 95, 94, 98, 100, 99, 95, 91, 84, 80, 80, 79, 79, 79, 79, 79, 80, 79, 74, 66, 56, 50, 46, 42, 38, 34, 29, 30, 34, 35, 36, 32, 27, 27, 29, 29, 29, 30, 29, 28, 27, 27, 27, 28, 31, 35, 37, 36, 32, 28, 28, 31, 33, 35, 35, 34, 34, 31, 27, 27, 27, 25, 25, 28, 28, 28, 28, 29, 29, 29, 29, 28, 28, 29, 29, 31, 35, 36, 34, 31, 29, 26, 23, 17, 16, 21, 27, 33, 40, 45, 50, 53, 54, 57, 57, 53, 53, 53, 54, 55, 57, 58, 61, 65, 68, 69, 69, 69, 69, 72, 76, 79, 84, 87, 91, 94, 97, 98, 98, 98, 97,])
        }
        b1 += control.millis() - startTime

        startTime = control.millis()
        for (let i = 0; i < num/5; i++) {
            let big = Buffer.fromHex('61605d57504c4d4c505a5f5f5f5e5d5d5f5f605f5c5a57534f4b4a4b4f52535354575c6264646c74787b7c7c7b7c7c7c7b7c7c7c7b7b7c7c7c7c7c7c7b7c7c7b7b7c7b7c7b7c7c7c7b7b7b7b7b7b7c7c7c7c7a77767372706d6a66615d5954504f4f4b4945413b3736353639373535363534394046494e5154585b5d5d5d5d5f61626362616161615f5e6264635f5b5450504f4f4f4f4f504f4a4238322e2a26221d1e222324201b1b1d1d1d1e1d1c1b1b1b1c1f232524201c1c1f21232322221f1b1b1b19191c1c1c1c1d1d1d1d1c1c1d1d1f2324221f1d1a171110151b21282d32353639393535353637393a3d414445454545484c4f54575b5e6162626261')
        }
        b2 += control.millis() - startTime
    }
    console.logValue("array create", b0)
    console.logValue("array buffer create", b1)
    console.logValue("hex buffer create", b2)

}

function testBuffersGet() {
    console.log("Testing buffer data retrieval against arrays")
    let bigArray = [97, 96, 93, 87, 80, 76, 77, 76, 80, 90, 95, 95, 95, 94, 93, 93, 95, 95, 96, 95, 92, 90, 87, 83, 79, 75, 74, 75, 79, 82, 83, 83, 84, 87, 92, 98, 100, 100, 108, 116, 120, 123, 124, 124, 123, 124, 124, 124, 123, 124, 124, 124, 123, 123, 124, 124, 124, 124, 124, 124, 123, 124, 124, 123, 123, 124, 123, 124, 123, 124, 124, 124, 123, 123, 123, 123, 123, 123, 124, 124, 124, 124, 122, 119, 118, 115, 114, 112, 109, 106, 102, 97, 93, 89, 84, 80, 79, 79, 75, 73, 69, 65, 59, 55, 54, 53, 54, 57, 55, 53, 53, 54, 53, 52, 57, 64, 70, 73, 78, 81, 84, 88, 91, 93, 93, 93, 93, 95, 97, 98, 99, 98, 97, 97, 97, 97, 95, 94, 98, 100, 99, 95, 91, 84, 80, 80, 79, 79, 79, 79, 79, 80, 79, 74, 66, 56, 50, 46, 42, 38, 34, 29, 30, 34, 35, 36, 32, 27, 27, 29, 29, 29, 30, 29, 28, 27, 27, 27, 28, 31, 35, 37, 36, 32, 28, 28, 31, 33, 35, 35, 34, 34, 31, 27, 27, 27, 25, 25, 28, 28, 28, 28, 29, 29, 29, 29, 28, 28, 29, 29, 31, 35, 36, 34, 31, 29, 26, 23, 17, 16, 21, 27, 33, 40, 45, 50, 53, 54, 57, 57, 53, 53, 53, 54, 55, 57, 58, 61, 65, 68, 69, 69, 69, 69, 72, 76, 79, 84, 87, 91, 94, 97, 98, 98, 98, 97,]
    let bigBuffer = Buffer.fromArray([97, 96, 93, 87, 80, 76, 77, 76, 80, 90, 95, 95, 95, 94, 93, 93, 95, 95, 96, 95, 92, 90, 87, 83, 79, 75, 74, 75, 79, 82, 83, 83, 84, 87, 92, 98, 100, 100, 108, 116, 120, 123, 124, 124, 123, 124, 124, 124, 123, 124, 124, 124, 123, 123, 124, 124, 124, 124, 124, 124, 123, 124, 124, 123, 123, 124, 123, 124, 123, 124, 124, 124, 123, 123, 123, 123, 123, 123, 124, 124, 124, 124, 122, 119, 118, 115, 114, 112, 109, 106, 102, 97, 93, 89, 84, 80, 79, 79, 75, 73, 69, 65, 59, 55, 54, 53, 54, 57, 55, 53, 53, 54, 53, 52, 57, 64, 70, 73, 78, 81, 84, 88, 91, 93, 93, 93, 93, 95, 97, 98, 99, 98, 97, 97, 97, 97, 95, 94, 98, 100, 99, 95, 91, 84, 80, 80, 79, 79, 79, 79, 79, 80, 79, 74, 66, 56, 50, 46, 42, 38, 34, 29, 30, 34, 35, 36, 32, 27, 27, 29, 29, 29, 30, 29, 28, 27, 27, 27, 28, 31, 35, 37, 36, 32, 28, 28, 31, 33, 35, 35, 34, 34, 31, 27, 27, 27, 25, 25, 28, 28, 28, 28, 29, 29, 29, 29, 28, 28, 29, 29, 31, 35, 36, 34, 31, 29, 26, 23, 17, 16, 21, 27, 33, 40, 45, 50, 53, 54, 57, 57, 53, 53, 53, 54, 55, 57, 58, 61, 65, 68, 69, 69, 69, 69, 72, 76, 79, 84, 87, 91, 94, 97, 98, 98, 98, 97,])

    let startTime = control.millis()
    for (let i = 0; i < num; i++) {
        bigArray[i % 30]
    }
    console.logValue("array get", control.millis() - startTime)

    startTime = control.millis()
    for (let i = 0; i < num; i++) {
        bigBuffer[i % 30]
    }
    console.logValue("buffer get", control.millis() - startTime)
}

function testVertMethods() {
    // Conclusion, fillRect is 4% faster then drawLine for vertical lines
    console.log("Testing methods of drawing vertical lines")
    let startTime = control.millis()
    for (let i = 0; i < num; i++) {
        image.screenImage().drawLine(10, 10, 10, 110, 5)
    }
    console.logValue("drawLine", control.millis() - startTime)

    startTime = control.millis()
    for (let i = 0; i < num; i++) {
        image.screenImage().drawRect(20, 10, 1, 100, 5)
    }
    console.logValue("drawRect", control.millis() - startTime)

    startTime = control.millis()
    for (let i = 0; i < num; i++) {
        image.screenImage().fillRect(30, 10, 1, 100, 5)
    }
    console.logValue("fillRect", control.millis() - startTime)
}

function testVertHight() {
    // Conclusion 50% shorter is 7% faster
    let startTime = control.millis()
    for (let i = 0; i < num; i++) {
        image.screenImage().fillRect(15, 10, 1, 100, 3)
    }
    console.logValue("Tall", control.millis() - startTime)

    startTime = control.millis()
    for (let i = 0; i < num; i++) {
        image.screenImage().fillRect(30, 10, 1, 50, 3)
    }
    console.logValue("Short", control.millis() - startTime)
}
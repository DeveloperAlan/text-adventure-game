function example1(optional) {
    if (optional != undefined) {
        console.log('awesome');
    } else {
        example2();
    }
}

function example2() {
    console.log("This is example 2");
    example1("not optional");
}

example1();
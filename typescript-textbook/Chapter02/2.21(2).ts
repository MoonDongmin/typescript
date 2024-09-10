enum Money {
    WON,
    DOLLAR,
}

interface Won {
    type: Money.WON,
}

interface Dollar {
    type: Money.DOLLAR;
}

function moneyOrDollar(param: Won | Dollar) {
    if (param.type === Money.WON) {
        param;
    } else {
        param;
    }
}

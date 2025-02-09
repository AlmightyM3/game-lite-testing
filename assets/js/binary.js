// meta={"simUrl":"https://trg-arcade.userpxt.io/v1.12.58/---simulator","cdnUrl":"https://cdn.makecode.com","version":"0.0.0","target":"arcade","targetVersion":"1.12.58"}
// total=217588 new=29.16% cached=67.28% other=3.56%
(function (ectx) {
'use strict';
const runtime = ectx.runtime;
const oops = ectx.oops;
const doNothing = ectx.doNothing;
const pxsim = ectx.pxsim;
const globals = ectx.globals;
const maybeYield = ectx.maybeYield;
const setupDebugger = ectx.setupDebugger;
const isBreakFrame = ectx.isBreakFrame;
const breakpoint = ectx.breakpoint;
const trace = ectx.trace;
const checkStack = ectx.checkStack;
const leave = ectx.leave;
const checkResumeConsumed = ectx.checkResumeConsumed;
const setupResume = ectx.setupResume;
const setupLambda = ectx.setupLambda;
const checkSubtype = ectx.checkSubtype;
const failedCast = ectx.failedCast;
const buildResume = ectx.buildResume;
const mkVTable = ectx.mkVTable;
const bind = ectx.bind;
const leaveAccessor = ectx.leaveAccessor;
const __this = runtime;
const pxtrt = pxsim.pxtrt;
let yieldSteps = 1;
ectx.setupYield(function() { yieldSteps = 100; })
pxsim.setTitle("game-lite");
pxsim.setConfigData({
 "37": 160,
 "38": 120
}, {
 "DISPLAY_WIDTH": 37,
 "DISPLAY_HEIGHT": 38
});
pxtrt.mapKeyNames = [
 "",
 "buttonEventHandlers",
 "charHeight",
 "charWidth",
 "condition",
 "deltaTimeMillis",
 "eid",
 "flags",
 "frameCallbacks",
 "frameWorker",
 "framesInSample",
 "handler",
 "handlers",
 "idleCallbacks",
 "lastPerfDump",
 "once",
 "order",
 "prevTimeMillis",
 "register",
 "registerFrameCallbacks",
 "registerFrameHandler",
 "registerHandler",
 "runCallbacks",
 "runningCallbacks",
 "src",
 "start",
 "timeInSample",
 "timeOut",
 "unregister",
 "value",
 "vid"
];
__this.setupPerfCounters([]);
const pxsim_Array__getAt = pxsim.Array_.getAt;
const pxsim_Array__length = pxsim.Array_.length;
const pxsim_Array__mk = pxsim.Array_.mk;
const pxsim_Array__push = pxsim.Array_.push;
const pxsim_Boolean__bang = pxsim.Boolean_.bang;
const pxsim_String__concat = pxsim.String_.concat;
const pxsim_String__stringConv = pxsim.String_.stringConv;
const pxsim_numops_toBool = pxsim.numops.toBool;
const pxsim_numops_toBoolDecr = pxsim.numops.toBoolDecr;
const pxsim_pxtcore_mkAction = pxsim.pxtcore.mkAction;
const pxsim_pxtcore_mkClassInstance = pxsim.pxtcore.mkClassInstance;
const pxsim_pxtrt_ldlocRef = pxsim.pxtrt.ldlocRef;
const pxsim_pxtrt_mapGetByString = pxsim.pxtrt.mapGetByString;
const pxsim_pxtrt_stclo = pxsim.pxtrt.stclo;
const pxsim_pxtrt_stlocRef = pxsim.pxtrt.stlocRef;
const pxsim_Boolean_ = pxsim.Boolean_;
const pxsim_pxtcore = pxsim.pxtcore;
const pxsim_String_ = pxsim.String_;
const pxsim_ImageMethods = pxsim.ImageMethods;
const pxsim_Array_ = pxsim.Array_;
const pxsim_pxtrt = pxsim.pxtrt;
const pxsim_numops = pxsim.numops;


function _main___P8510(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    globals._intervals___3084 = (undefined);
    globals._pollEventQueue___3093 = (undefined);
    globals.minPriority___375 = (1);
    r0 = pxsim_Array__mk();
    s.tmp_0 = r0;
    r0 = pxsim_Array__push(s.tmp_0, listeners_inline__P3096);
    globals.listeners___3097 = (s.tmp_0);
    r0 = pxsim_pxtrt.mkMap();
    s.tmp_0 = r0;
    r0 = pxsim_pxtrt.mapSetByString(s.tmp_0, "charWidth", 6);
    r0 = pxsim_pxtrt.mapSetByString(s.tmp_0, "charHeight", 5);
    r0 = pxsim_pxtrt.mapSetByString(s.tmp_0, "data", _hex6575);
    globals.font5___1663 = (s.tmp_0);
    globals.__updated___3164 = (false);
    r0 = pxsim.control.runInParallel(control___screen_inline__P3167);
    r0 = pxsim_pxtcore.setPalette(_hex3178);
    r0 = pxsim_pxtcore.getConfig(2102, 160);
    s.tmp_0 = r0;
    r0 = pxsim_pxtcore.getConfig(2103, 120);
    s.tmp_1 = r0;
    r0 = pxsim.image.create(s.tmp_0, s.tmp_1);
    globals.screen___1715 = (r0);
    s.tmp_0 = control___screen_setupUpdate__P1677_mk(s);
    s.tmp_0.arg0 = _screen_internal_inline__P3187;
    s.callLocIdx = 4; s.pc = 1; return s.tmp_0;
  case 1:
    r0 = s.retval;
    globals.control_EventContext_onStats___398 = (_screen_internal_inline__P3192);
    globals.RUN_KEY___3197 = ("#run");
    globals.SCOPE_KEY___3198 = ("#scope");
    s.tmp_0 = settings_initScopes__P3209_mk(s);
    s.callLocIdx = 5; s.pc = 2; return s.tmp_0;
  case 2:
    r0 = s.retval;
    globals.inited___3226 = (false);
    r0 = pxsim_pxtcore_mkClassInstance(Scene__C1779_VT);
    s.tmp_0 = r0;
    s.tmp_1 = Scene_constructor__P1781_mk(s);
    s.tmp_1.arg0 = s.tmp_0;
    s.callLocIdx = 6; s.pc = 3; return s.tmp_1;
  case 3:
    r0 = s.retval;
    globals._scene___3228 = (s.tmp_0);
    globals.consoleFont___3241 = (globals.font5___1663);
    r0 = pxsim_ImageMethods.height(globals.screen___1715);
    s.tmp_2 = r0;
    s.tmp_5 = if_charHeight_1_mk(s);
    s.tmp_5.arg0 = globals.consoleFont___3241;
    if (!s.tmp_5.arg0.vtable.iface) {
      s.retval = pxsim_pxtrt.mapGetByString(s.tmp_5.arg0, "charHeight");
    } else {
      s.tmp_5.fn = s.tmp_5.arg0.vtable.iface["charHeight"];
      if (s.tmp_5.fn == null) { s.retval = s.tmp_5.arg0.fields["charHeight"]; }
      else if (!s.tmp_5.fn.isGetter) { s.retval = bind(s.tmp_5); }
     else { s.callLocIdx = 7; s.pc = 4; return s.tmp_5; }
    }
  case 4:
    r0 = s.retval;
    s.tmp_4 = r0;
    r0 = (s.tmp_4 + 2);
    s.tmp_3 = r0;
    r0 = (s.tmp_2 / s.tmp_3);
    s.tmp_1 = r0;
    r0 = pxsim.Math_.floor(s.tmp_1);
    s.tmp_0 = r0;
    r0 = (s.tmp_0 - 1);
    globals.consoleLines___3246 = (r0);
    r0 = pxsim_ImageMethods.width(globals.screen___1715);
    s.tmp_2 = r0;
    r0 = (s.tmp_2 - 8);
    s.tmp_1 = r0;
    s.tmp_4 = if_charWidth_1_mk(s);
    s.tmp_4.arg0 = globals.consoleFont___3241;
    if (!s.tmp_4.arg0.vtable.iface) {
      s.retval = pxsim_pxtrt.mapGetByString(s.tmp_4.arg0, "charWidth");
    } else {
      s.tmp_4.fn = s.tmp_4.arg0.vtable.iface["charWidth"];
      if (s.tmp_4.fn == null) { s.retval = s.tmp_4.arg0.fields["charWidth"]; }
      else if (!s.tmp_4.fn.isGetter) { s.retval = bind(s.tmp_4); }
     else { s.callLocIdx = 8; s.pc = 5; return s.tmp_4; }
    }
  case 5:
    r0 = s.retval;
    s.tmp_3 = r0;
    r0 = (s.tmp_1 / s.tmp_3);
    s.tmp_0 = r0;
    r0 = pxsim.Math_.floor(s.tmp_0);
    globals.consoleColumns___3256 = (r0);
    s.tmp_0 = console_addListener__P383_mk(s);
    s.tmp_0.arg0 = game_consoleOverlay_listener__P3268;
    s.callLocIdx = 9; s.pc = 6; return s.tmp_0;
  case 6:
    r0 = s.retval;
    s.tmp_0 = game_setWaitAnyButton__P1789_mk(s);
    s.tmp_0.arg0 = controller_pauseUntilAnyButtonIsPressed__P1857;
    s.callLocIdx = 10; s.pc = 7; return s.tmp_0;
  case 7:
    r0 = s.retval;
    s.tmp_0 = game_eventContext__P1788_mk(s);
    s.callLocIdx = 11; s.pc = 8; return s.tmp_0;
  case 8:
    r0 = s.retval;
    globals.num___8136 = (1000000);
    s.tmp_0 = game_onPaint__P1790_mk(s);
    s.tmp_0.arg0 = inline__P8138;
    s.callLocIdx = 16; s.pc = 9; return s.tmp_0;
  case 9:
    r0 = s.retval;
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
_main___P8510.info = {"start":0,"length":0,"line":0,"column":0,"endLine":0,"endColumn":0,"fileName":"main.ts","functionName":"<main>","argumentNames":[]}
_main___P8510.continuations = [  ]

function _main___P8510_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: _main___P8510, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  tmp_4: undefined,
  tmp_5: undefined,
} }

const _hex6575 = pxsim.BufferMethods.createBufferFromHex("20000000000000002100001700000000220000030003000023000a1f0a1f0a0024000a17151d0a00250013090412190026000a15150a100027000003000000002800000e11000000290000110e0000002a00000a040a00002b0000040e0400002c000010080000002d000004040400002e000008000000002f0010080402010030000e11110e0000310000121f100000320019151512000033000911150b000034000c0a091f080035001715151509003600081416150800370011090503010038000a1515150a00390002150d0502003a00000a000000003b0000100a0000003c0000040a1100003d00000a0a0a00003e0000110a0400003f0002011505020040000e1115090e0041001e05051e000042001f15150a000043000e111111000044001f11110e000045001f151511000046001f050501000047000e1111150c0048001f04041f00004900111f110000004a000911110f01004b001f040a1100004c001f10101000004d001f0204021f004e001f0204081f004f000e11110e000050001f0505020000510006091916000052001f05050a10005300121515090000540001011f01010055000f10100f0000560007081008070057001f0804081f0058001b04041b0000590001021c0201005a001915131100005b00001f111100005c000102040810005d000011111f00005e000002010200005f00101010101000600000010200000061000c12121e100062001f141408000063000c121212000064000814141f000065000e15151200006600041e0501000067000215150f000068001f04041800006900001d000000006a000010100d00006b001f040a1000006c00000f101000006d001e0204021e006e001e02021c00006f000c12120c000070001e0a0a0400007100040a0a1e000072001c0202020000730010140a0200007400000f1414100075000e10101e1000760006081008060077001e1008101e007800120c0c12000079001214080402007a00121a161200007b0000041f1100007c00001f000000007d00111f040000007e00000404080800d3000c1213130c00f3000c12130d000004010e05051e100005010609191f080006010c121313120007010c121313000018010f0b1b19000019010e151d1a000041011f14121000004201100f1412000043011f0205081f0044011e03031c00005a0110140b0302005b0110140b0300007901121a171300007a01121a171300007b01121b171200007c01121b17120000")
const _hex3178 = pxsim.BufferMethods.createBufferFromHex("000000ffffffff2121ff93c4ff8135fff609249ca378dc52003fad87f2ff8e2ec4a4839f5c406ce5cdc491463d000000")




function control___screen_inline__P3167(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

  case 1:
    r0 = pxsim_numops_toBoolDecr(true);
    if (!r0) { step = 4; continue; }
    globals.__updated___3164 = (false);
    s.tmp_0 = pause__P413_mk(s);
    s.tmp_0.arg0 = 200;
    s.callLocIdx = 0; s.pc = 5; return s.tmp_0;
  case 5:
    r0 = s.retval;
    r0 = pxsim_numops_toBoolDecr(globals.__updated___3164);
    s.tmp_1 = r0;
    r0 = pxsim_Boolean__bang(s.tmp_1);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 2; continue; }
    s.tmp_2 = control___screen_update__P1676_mk(s);
    s.callLocIdx = 1; s.pc = 6; return s.tmp_2;
  case 6:
    r0 = s.retval;
    globals.__updated___3164 = (true);
  case 2:
  case 3:
    { step = 1; continue; }
  case 4:
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
control___screen_inline__P3167.info = {"start":396,"length":211,"line":17,"column":26,"endLine":26,"endColumn":5,"fileName":"pxt_modules/screen/frame.ts","functionName":"inline","argumentNames":[]}

function control___screen_inline__P3167_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: control___screen_inline__P3167, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
} }





function _screen_internal_inline__P3187(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    r0 = pxsim_pxtcore.updateScreen(globals.screen___1715);
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
_screen_internal_inline__P3187.info = {"start":1122,"length":26,"line":32,"column":33,"endLine":32,"endColumn":59,"fileName":"pxt_modules/screen/targetoverrides.ts","functionName":"inline","argumentNames":[]}

function _screen_internal_inline__P3187_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: _screen_internal_inline__P3187, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
} }





function _screen_internal_inline__P3192(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    r0 = pxsim_pxtcore.updateStats(s.arg0);
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
_screen_internal_inline__P3192.info = {"start":1185,"length":56,"line":33,"column":35,"endLine":35,"endColumn":5,"fileName":"pxt_modules/screen/targetoverrides.ts","functionName":"inline","argumentNames":["msg"]}

function _screen_internal_inline__P3192_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: _screen_internal_inline__P3192, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  arg0: undefined,
} }





function inline__P8138(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.tmp_0 = console_log__P380_mk(s);
    if ((globals.num___8136) && (globals.num___8136).vtable) {
    setupResume(s, 2);
    pxsim_String__stringConv(globals.num___8136);
    checkResumeConsumed();
    return;
    } else { s.retval = (globals.num___8136) + ""; }
  case 2:
    r0 = s.retval;
    s.tmp_3 = r0;
    r0 = pxsim_String__concat("Start: (", s.tmp_3);
    s.tmp_2 = r0;
    if ((s.tmp_2) && (s.tmp_2).vtable) {
    setupResume(s, 3);
    pxsim_String__stringConv(s.tmp_2);
    checkResumeConsumed();
    return;
    } else { s.retval = (s.tmp_2) + ""; }
  case 3:
    r0 = s.retval;
    s.tmp_1 = r0;
    r0 = pxsim_String__concat(s.tmp_1, " tests, output in ms)");
    s.tmp_0.arg0 = r0;
    s.callLocIdx = 12; s.pc = 1; return s.tmp_0;
  case 1:
    r0 = s.retval;
    s.tmp_0 = testBuffersCreate__P8150_mk(s);
    s.callLocIdx = 13; s.pc = 4; return s.tmp_0;
  case 4:
    r0 = s.retval;
    s.tmp_0 = testBuffersGet__P8152_mk(s);
    s.callLocIdx = 14; s.pc = 5; return s.tmp_0;
  case 5:
    r0 = s.retval;
    s.tmp_0 = console_log__P380_mk(s);
    s.tmp_0.arg0 = "End";
    s.callLocIdx = 15; s.pc = 6; return s.tmp_0;
  case 6:
    r0 = s.retval;
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
inline__P8138.info = {"start":1197,"length":172,"line":4,"column":13,"endLine":12,"endColumn":1,"fileName":"main.ts","functionName":"inline","argumentNames":[]}

function inline__P8138_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: inline__P8138, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
} }





function testBuffersGet__P8152(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.bigArray___8235 = undefined;
    s.bigBuffer___8237 = undefined;
    s.startTime___8240 = undefined;
    s.i___8243 = undefined;
    s.i___8261 = undefined;
    s.tmp_0 = console_log__P380_mk(s);
    s.tmp_0.arg0 = "Testing buffer data retrieval against arrays";
    s.callLocIdx = 23; s.pc = 5; return s.tmp_0;
  case 5:
    r0 = s.retval;
    r0 = pxsim_Array__mk();
    s.tmp_0 = r0;
    r0 = pxsim_Array__push(s.tmp_0, 97);
    r0 = pxsim_Array__push(s.tmp_0, 96);
    r0 = pxsim_Array__push(s.tmp_0, 93);
    r0 = pxsim_Array__push(s.tmp_0, 87);
    r0 = pxsim_Array__push(s.tmp_0, 80);
    r0 = pxsim_Array__push(s.tmp_0, 76);
    r0 = pxsim_Array__push(s.tmp_0, 77);
    r0 = pxsim_Array__push(s.tmp_0, 76);
    r0 = pxsim_Array__push(s.tmp_0, 80);
    r0 = pxsim_Array__push(s.tmp_0, 90);
    r0 = pxsim_Array__push(s.tmp_0, 95);
    r0 = pxsim_Array__push(s.tmp_0, 95);
    r0 = pxsim_Array__push(s.tmp_0, 95);
    r0 = pxsim_Array__push(s.tmp_0, 94);
    r0 = pxsim_Array__push(s.tmp_0, 93);
    r0 = pxsim_Array__push(s.tmp_0, 93);
    r0 = pxsim_Array__push(s.tmp_0, 95);
    r0 = pxsim_Array__push(s.tmp_0, 95);
    r0 = pxsim_Array__push(s.tmp_0, 96);
    r0 = pxsim_Array__push(s.tmp_0, 95);
    r0 = pxsim_Array__push(s.tmp_0, 92);
    r0 = pxsim_Array__push(s.tmp_0, 90);
    r0 = pxsim_Array__push(s.tmp_0, 87);
    r0 = pxsim_Array__push(s.tmp_0, 83);
    r0 = pxsim_Array__push(s.tmp_0, 79);
    r0 = pxsim_Array__push(s.tmp_0, 75);
    r0 = pxsim_Array__push(s.tmp_0, 74);
    r0 = pxsim_Array__push(s.tmp_0, 75);
    r0 = pxsim_Array__push(s.tmp_0, 79);
    r0 = pxsim_Array__push(s.tmp_0, 82);
    r0 = pxsim_Array__push(s.tmp_0, 83);
    r0 = pxsim_Array__push(s.tmp_0, 83);
    r0 = pxsim_Array__push(s.tmp_0, 84);
    r0 = pxsim_Array__push(s.tmp_0, 87);
    r0 = pxsim_Array__push(s.tmp_0, 92);
    r0 = pxsim_Array__push(s.tmp_0, 98);
    r0 = pxsim_Array__push(s.tmp_0, 100);
    r0 = pxsim_Array__push(s.tmp_0, 100);
    r0 = pxsim_Array__push(s.tmp_0, 108);
    r0 = pxsim_Array__push(s.tmp_0, 116);
    r0 = pxsim_Array__push(s.tmp_0, 120);
    r0 = pxsim_Array__push(s.tmp_0, 123);
    r0 = pxsim_Array__push(s.tmp_0, 124);
    r0 = pxsim_Array__push(s.tmp_0, 124);
    r0 = pxsim_Array__push(s.tmp_0, 123);
    r0 = pxsim_Array__push(s.tmp_0, 124);
    r0 = pxsim_Array__push(s.tmp_0, 124);
    r0 = pxsim_Array__push(s.tmp_0, 124);
    r0 = pxsim_Array__push(s.tmp_0, 123);
    r0 = pxsim_Array__push(s.tmp_0, 124);
    r0 = pxsim_Array__push(s.tmp_0, 124);
    r0 = pxsim_Array__push(s.tmp_0, 124);
    r0 = pxsim_Array__push(s.tmp_0, 123);
    r0 = pxsim_Array__push(s.tmp_0, 123);
    r0 = pxsim_Array__push(s.tmp_0, 124);
    r0 = pxsim_Array__push(s.tmp_0, 124);
    r0 = pxsim_Array__push(s.tmp_0, 124);
    r0 = pxsim_Array__push(s.tmp_0, 124);
    r0 = pxsim_Array__push(s.tmp_0, 124);
    r0 = pxsim_Array__push(s.tmp_0, 124);
    r0 = pxsim_Array__push(s.tmp_0, 123);
    r0 = pxsim_Array__push(s.tmp_0, 124);
    r0 = pxsim_Array__push(s.tmp_0, 124);
    r0 = pxsim_Array__push(s.tmp_0, 123);
    r0 = pxsim_Array__push(s.tmp_0, 123);
    r0 = pxsim_Array__push(s.tmp_0, 124);
    r0 = pxsim_Array__push(s.tmp_0, 123);
    r0 = pxsim_Array__push(s.tmp_0, 124);
    r0 = pxsim_Array__push(s.tmp_0, 123);
    r0 = pxsim_Array__push(s.tmp_0, 124);
    r0 = pxsim_Array__push(s.tmp_0, 124);
    r0 = pxsim_Array__push(s.tmp_0, 124);
    r0 = pxsim_Array__push(s.tmp_0, 123);
    r0 = pxsim_Array__push(s.tmp_0, 123);
    r0 = pxsim_Array__push(s.tmp_0, 123);
    r0 = pxsim_Array__push(s.tmp_0, 123);
    r0 = pxsim_Array__push(s.tmp_0, 123);
    r0 = pxsim_Array__push(s.tmp_0, 123);
    r0 = pxsim_Array__push(s.tmp_0, 124);
    r0 = pxsim_Array__push(s.tmp_0, 124);
    r0 = pxsim_Array__push(s.tmp_0, 124);
    r0 = pxsim_Array__push(s.tmp_0, 124);
    r0 = pxsim_Array__push(s.tmp_0, 122);
    r0 = pxsim_Array__push(s.tmp_0, 119);
    r0 = pxsim_Array__push(s.tmp_0, 118);
    r0 = pxsim_Array__push(s.tmp_0, 115);
    r0 = pxsim_Array__push(s.tmp_0, 114);
    r0 = pxsim_Array__push(s.tmp_0, 112);
    r0 = pxsim_Array__push(s.tmp_0, 109);
    r0 = pxsim_Array__push(s.tmp_0, 106);
    r0 = pxsim_Array__push(s.tmp_0, 102);
    r0 = pxsim_Array__push(s.tmp_0, 97);
    r0 = pxsim_Array__push(s.tmp_0, 93);
    r0 = pxsim_Array__push(s.tmp_0, 89);
    r0 = pxsim_Array__push(s.tmp_0, 84);
    r0 = pxsim_Array__push(s.tmp_0, 80);
    r0 = pxsim_Array__push(s.tmp_0, 79);
    r0 = pxsim_Array__push(s.tmp_0, 79);
    r0 = pxsim_Array__push(s.tmp_0, 75);
    r0 = pxsim_Array__push(s.tmp_0, 73);
    r0 = pxsim_Array__push(s.tmp_0, 69);
    r0 = pxsim_Array__push(s.tmp_0, 65);
    r0 = pxsim_Array__push(s.tmp_0, 59);
    r0 = pxsim_Array__push(s.tmp_0, 55);
    r0 = pxsim_Array__push(s.tmp_0, 54);
    r0 = pxsim_Array__push(s.tmp_0, 53);
    r0 = pxsim_Array__push(s.tmp_0, 54);
    r0 = pxsim_Array__push(s.tmp_0, 57);
    r0 = pxsim_Array__push(s.tmp_0, 55);
    r0 = pxsim_Array__push(s.tmp_0, 53);
    r0 = pxsim_Array__push(s.tmp_0, 53);
    r0 = pxsim_Array__push(s.tmp_0, 54);
    r0 = pxsim_Array__push(s.tmp_0, 53);
    r0 = pxsim_Array__push(s.tmp_0, 52);
    r0 = pxsim_Array__push(s.tmp_0, 57);
    r0 = pxsim_Array__push(s.tmp_0, 64);
    r0 = pxsim_Array__push(s.tmp_0, 70);
    r0 = pxsim_Array__push(s.tmp_0, 73);
    r0 = pxsim_Array__push(s.tmp_0, 78);
    r0 = pxsim_Array__push(s.tmp_0, 81);
    r0 = pxsim_Array__push(s.tmp_0, 84);
    r0 = pxsim_Array__push(s.tmp_0, 88);
    r0 = pxsim_Array__push(s.tmp_0, 91);
    r0 = pxsim_Array__push(s.tmp_0, 93);
    r0 = pxsim_Array__push(s.tmp_0, 93);
    r0 = pxsim_Array__push(s.tmp_0, 93);
    r0 = pxsim_Array__push(s.tmp_0, 93);
    r0 = pxsim_Array__push(s.tmp_0, 95);
    r0 = pxsim_Array__push(s.tmp_0, 97);
    r0 = pxsim_Array__push(s.tmp_0, 98);
    r0 = pxsim_Array__push(s.tmp_0, 99);
    r0 = pxsim_Array__push(s.tmp_0, 98);
    r0 = pxsim_Array__push(s.tmp_0, 97);
    r0 = pxsim_Array__push(s.tmp_0, 97);
    r0 = pxsim_Array__push(s.tmp_0, 97);
    r0 = pxsim_Array__push(s.tmp_0, 97);
    r0 = pxsim_Array__push(s.tmp_0, 95);
    r0 = pxsim_Array__push(s.tmp_0, 94);
    r0 = pxsim_Array__push(s.tmp_0, 98);
    r0 = pxsim_Array__push(s.tmp_0, 100);
    r0 = pxsim_Array__push(s.tmp_0, 99);
    r0 = pxsim_Array__push(s.tmp_0, 95);
    r0 = pxsim_Array__push(s.tmp_0, 91);
    r0 = pxsim_Array__push(s.tmp_0, 84);
    r0 = pxsim_Array__push(s.tmp_0, 80);
    r0 = pxsim_Array__push(s.tmp_0, 80);
    r0 = pxsim_Array__push(s.tmp_0, 79);
    r0 = pxsim_Array__push(s.tmp_0, 79);
    r0 = pxsim_Array__push(s.tmp_0, 79);
    r0 = pxsim_Array__push(s.tmp_0, 79);
    r0 = pxsim_Array__push(s.tmp_0, 79);
    r0 = pxsim_Array__push(s.tmp_0, 80);
    r0 = pxsim_Array__push(s.tmp_0, 79);
    r0 = pxsim_Array__push(s.tmp_0, 74);
    r0 = pxsim_Array__push(s.tmp_0, 66);
    r0 = pxsim_Array__push(s.tmp_0, 56);
    r0 = pxsim_Array__push(s.tmp_0, 50);
    r0 = pxsim_Array__push(s.tmp_0, 46);
    r0 = pxsim_Array__push(s.tmp_0, 42);
    r0 = pxsim_Array__push(s.tmp_0, 38);
    r0 = pxsim_Array__push(s.tmp_0, 34);
    r0 = pxsim_Array__push(s.tmp_0, 29);
    r0 = pxsim_Array__push(s.tmp_0, 30);
    r0 = pxsim_Array__push(s.tmp_0, 34);
    r0 = pxsim_Array__push(s.tmp_0, 35);
    r0 = pxsim_Array__push(s.tmp_0, 36);
    r0 = pxsim_Array__push(s.tmp_0, 32);
    r0 = pxsim_Array__push(s.tmp_0, 27);
    r0 = pxsim_Array__push(s.tmp_0, 27);
    r0 = pxsim_Array__push(s.tmp_0, 29);
    r0 = pxsim_Array__push(s.tmp_0, 29);
    r0 = pxsim_Array__push(s.tmp_0, 29);
    r0 = pxsim_Array__push(s.tmp_0, 30);
    r0 = pxsim_Array__push(s.tmp_0, 29);
    r0 = pxsim_Array__push(s.tmp_0, 28);
    r0 = pxsim_Array__push(s.tmp_0, 27);
    r0 = pxsim_Array__push(s.tmp_0, 27);
    r0 = pxsim_Array__push(s.tmp_0, 27);
    r0 = pxsim_Array__push(s.tmp_0, 28);
    r0 = pxsim_Array__push(s.tmp_0, 31);
    r0 = pxsim_Array__push(s.tmp_0, 35);
    r0 = pxsim_Array__push(s.tmp_0, 37);
    r0 = pxsim_Array__push(s.tmp_0, 36);
    r0 = pxsim_Array__push(s.tmp_0, 32);
    r0 = pxsim_Array__push(s.tmp_0, 28);
    r0 = pxsim_Array__push(s.tmp_0, 28);
    r0 = pxsim_Array__push(s.tmp_0, 31);
    r0 = pxsim_Array__push(s.tmp_0, 33);
    r0 = pxsim_Array__push(s.tmp_0, 35);
    r0 = pxsim_Array__push(s.tmp_0, 35);
    r0 = pxsim_Array__push(s.tmp_0, 34);
    r0 = pxsim_Array__push(s.tmp_0, 34);
    r0 = pxsim_Array__push(s.tmp_0, 31);
    r0 = pxsim_Array__push(s.tmp_0, 27);
    r0 = pxsim_Array__push(s.tmp_0, 27);
    r0 = pxsim_Array__push(s.tmp_0, 27);
    r0 = pxsim_Array__push(s.tmp_0, 25);
    r0 = pxsim_Array__push(s.tmp_0, 25);
    r0 = pxsim_Array__push(s.tmp_0, 28);
    r0 = pxsim_Array__push(s.tmp_0, 28);
    r0 = pxsim_Array__push(s.tmp_0, 28);
    r0 = pxsim_Array__push(s.tmp_0, 28);
    r0 = pxsim_Array__push(s.tmp_0, 29);
    r0 = pxsim_Array__push(s.tmp_0, 29);
    r0 = pxsim_Array__push(s.tmp_0, 29);
    r0 = pxsim_Array__push(s.tmp_0, 29);
    r0 = pxsim_Array__push(s.tmp_0, 28);
    r0 = pxsim_Array__push(s.tmp_0, 28);
    r0 = pxsim_Array__push(s.tmp_0, 29);
    r0 = pxsim_Array__push(s.tmp_0, 29);
    r0 = pxsim_Array__push(s.tmp_0, 31);
    r0 = pxsim_Array__push(s.tmp_0, 35);
    r0 = pxsim_Array__push(s.tmp_0, 36);
    r0 = pxsim_Array__push(s.tmp_0, 34);
    r0 = pxsim_Array__push(s.tmp_0, 31);
    r0 = pxsim_Array__push(s.tmp_0, 29);
    r0 = pxsim_Array__push(s.tmp_0, 26);
    r0 = pxsim_Array__push(s.tmp_0, 23);
    r0 = pxsim_Array__push(s.tmp_0, 17);
    r0 = pxsim_Array__push(s.tmp_0, 16);
    r0 = pxsim_Array__push(s.tmp_0, 21);
    r0 = pxsim_Array__push(s.tmp_0, 27);
    r0 = pxsim_Array__push(s.tmp_0, 33);
    r0 = pxsim_Array__push(s.tmp_0, 40);
    r0 = pxsim_Array__push(s.tmp_0, 45);
    r0 = pxsim_Array__push(s.tmp_0, 50);
    r0 = pxsim_Array__push(s.tmp_0, 53);
    r0 = pxsim_Array__push(s.tmp_0, 54);
    r0 = pxsim_Array__push(s.tmp_0, 57);
    r0 = pxsim_Array__push(s.tmp_0, 57);
    r0 = pxsim_Array__push(s.tmp_0, 53);
    r0 = pxsim_Array__push(s.tmp_0, 53);
    r0 = pxsim_Array__push(s.tmp_0, 53);
    r0 = pxsim_Array__push(s.tmp_0, 54);
    r0 = pxsim_Array__push(s.tmp_0, 55);
    r0 = pxsim_Array__push(s.tmp_0, 57);
    r0 = pxsim_Array__push(s.tmp_0, 58);
    r0 = pxsim_Array__push(s.tmp_0, 61);
    r0 = pxsim_Array__push(s.tmp_0, 65);
    r0 = pxsim_Array__push(s.tmp_0, 68);
    r0 = pxsim_Array__push(s.tmp_0, 69);
    r0 = pxsim_Array__push(s.tmp_0, 69);
    r0 = pxsim_Array__push(s.tmp_0, 69);
    r0 = pxsim_Array__push(s.tmp_0, 69);
    r0 = pxsim_Array__push(s.tmp_0, 72);
    r0 = pxsim_Array__push(s.tmp_0, 76);
    r0 = pxsim_Array__push(s.tmp_0, 79);
    r0 = pxsim_Array__push(s.tmp_0, 84);
    r0 = pxsim_Array__push(s.tmp_0, 87);
    r0 = pxsim_Array__push(s.tmp_0, 91);
    r0 = pxsim_Array__push(s.tmp_0, 94);
    r0 = pxsim_Array__push(s.tmp_0, 97);
    r0 = pxsim_Array__push(s.tmp_0, 98);
    r0 = pxsim_Array__push(s.tmp_0, 98);
    r0 = pxsim_Array__push(s.tmp_0, 98);
    r0 = pxsim_Array__push(s.tmp_0, 97);
    s.bigArray___8235 = (s.tmp_0);
    r0 = pxsim_Array__mk();
    s.tmp_0 = r0;
    r0 = pxsim_Array__push(s.tmp_0, 97);
    r0 = pxsim_Array__push(s.tmp_0, 96);
    r0 = pxsim_Array__push(s.tmp_0, 93);
    r0 = pxsim_Array__push(s.tmp_0, 87);
    r0 = pxsim_Array__push(s.tmp_0, 80);
    r0 = pxsim_Array__push(s.tmp_0, 76);
    r0 = pxsim_Array__push(s.tmp_0, 77);
    r0 = pxsim_Array__push(s.tmp_0, 76);
    r0 = pxsim_Array__push(s.tmp_0, 80);
    r0 = pxsim_Array__push(s.tmp_0, 90);
    r0 = pxsim_Array__push(s.tmp_0, 95);
    r0 = pxsim_Array__push(s.tmp_0, 95);
    r0 = pxsim_Array__push(s.tmp_0, 95);
    r0 = pxsim_Array__push(s.tmp_0, 94);
    r0 = pxsim_Array__push(s.tmp_0, 93);
    r0 = pxsim_Array__push(s.tmp_0, 93);
    r0 = pxsim_Array__push(s.tmp_0, 95);
    r0 = pxsim_Array__push(s.tmp_0, 95);
    r0 = pxsim_Array__push(s.tmp_0, 96);
    r0 = pxsim_Array__push(s.tmp_0, 95);
    r0 = pxsim_Array__push(s.tmp_0, 92);
    r0 = pxsim_Array__push(s.tmp_0, 90);
    r0 = pxsim_Array__push(s.tmp_0, 87);
    r0 = pxsim_Array__push(s.tmp_0, 83);
    r0 = pxsim_Array__push(s.tmp_0, 79);
    r0 = pxsim_Array__push(s.tmp_0, 75);
    r0 = pxsim_Array__push(s.tmp_0, 74);
    r0 = pxsim_Array__push(s.tmp_0, 75);
    r0 = pxsim_Array__push(s.tmp_0, 79);
    r0 = pxsim_Array__push(s.tmp_0, 82);
    r0 = pxsim_Array__push(s.tmp_0, 83);
    r0 = pxsim_Array__push(s.tmp_0, 83);
    r0 = pxsim_Array__push(s.tmp_0, 84);
    r0 = pxsim_Array__push(s.tmp_0, 87);
    r0 = pxsim_Array__push(s.tmp_0, 92);
    r0 = pxsim_Array__push(s.tmp_0, 98);
    r0 = pxsim_Array__push(s.tmp_0, 100);
    r0 = pxsim_Array__push(s.tmp_0, 100);
    r0 = pxsim_Array__push(s.tmp_0, 108);
    r0 = pxsim_Array__push(s.tmp_0, 116);
    r0 = pxsim_Array__push(s.tmp_0, 120);
    r0 = pxsim_Array__push(s.tmp_0, 123);
    r0 = pxsim_Array__push(s.tmp_0, 124);
    r0 = pxsim_Array__push(s.tmp_0, 124);
    r0 = pxsim_Array__push(s.tmp_0, 123);
    r0 = pxsim_Array__push(s.tmp_0, 124);
    r0 = pxsim_Array__push(s.tmp_0, 124);
    r0 = pxsim_Array__push(s.tmp_0, 124);
    r0 = pxsim_Array__push(s.tmp_0, 123);
    r0 = pxsim_Array__push(s.tmp_0, 124);
    r0 = pxsim_Array__push(s.tmp_0, 124);
    r0 = pxsim_Array__push(s.tmp_0, 124);
    r0 = pxsim_Array__push(s.tmp_0, 123);
    r0 = pxsim_Array__push(s.tmp_0, 123);
    r0 = pxsim_Array__push(s.tmp_0, 124);
    r0 = pxsim_Array__push(s.tmp_0, 124);
    r0 = pxsim_Array__push(s.tmp_0, 124);
    r0 = pxsim_Array__push(s.tmp_0, 124);
    r0 = pxsim_Array__push(s.tmp_0, 124);
    r0 = pxsim_Array__push(s.tmp_0, 124);
    r0 = pxsim_Array__push(s.tmp_0, 123);
    r0 = pxsim_Array__push(s.tmp_0, 124);
    r0 = pxsim_Array__push(s.tmp_0, 124);
    r0 = pxsim_Array__push(s.tmp_0, 123);
    r0 = pxsim_Array__push(s.tmp_0, 123);
    r0 = pxsim_Array__push(s.tmp_0, 124);
    r0 = pxsim_Array__push(s.tmp_0, 123);
    r0 = pxsim_Array__push(s.tmp_0, 124);
    r0 = pxsim_Array__push(s.tmp_0, 123);
    r0 = pxsim_Array__push(s.tmp_0, 124);
    r0 = pxsim_Array__push(s.tmp_0, 124);
    r0 = pxsim_Array__push(s.tmp_0, 124);
    r0 = pxsim_Array__push(s.tmp_0, 123);
    r0 = pxsim_Array__push(s.tmp_0, 123);
    r0 = pxsim_Array__push(s.tmp_0, 123);
    r0 = pxsim_Array__push(s.tmp_0, 123);
    r0 = pxsim_Array__push(s.tmp_0, 123);
    r0 = pxsim_Array__push(s.tmp_0, 123);
    r0 = pxsim_Array__push(s.tmp_0, 124);
    r0 = pxsim_Array__push(s.tmp_0, 124);
    r0 = pxsim_Array__push(s.tmp_0, 124);
    r0 = pxsim_Array__push(s.tmp_0, 124);
    r0 = pxsim_Array__push(s.tmp_0, 122);
    r0 = pxsim_Array__push(s.tmp_0, 119);
    r0 = pxsim_Array__push(s.tmp_0, 118);
    r0 = pxsim_Array__push(s.tmp_0, 115);
    r0 = pxsim_Array__push(s.tmp_0, 114);
    r0 = pxsim_Array__push(s.tmp_0, 112);
    r0 = pxsim_Array__push(s.tmp_0, 109);
    r0 = pxsim_Array__push(s.tmp_0, 106);
    r0 = pxsim_Array__push(s.tmp_0, 102);
    r0 = pxsim_Array__push(s.tmp_0, 97);
    r0 = pxsim_Array__push(s.tmp_0, 93);
    r0 = pxsim_Array__push(s.tmp_0, 89);
    r0 = pxsim_Array__push(s.tmp_0, 84);
    r0 = pxsim_Array__push(s.tmp_0, 80);
    r0 = pxsim_Array__push(s.tmp_0, 79);
    r0 = pxsim_Array__push(s.tmp_0, 79);
    r0 = pxsim_Array__push(s.tmp_0, 75);
    r0 = pxsim_Array__push(s.tmp_0, 73);
    r0 = pxsim_Array__push(s.tmp_0, 69);
    r0 = pxsim_Array__push(s.tmp_0, 65);
    r0 = pxsim_Array__push(s.tmp_0, 59);
    r0 = pxsim_Array__push(s.tmp_0, 55);
    r0 = pxsim_Array__push(s.tmp_0, 54);
    r0 = pxsim_Array__push(s.tmp_0, 53);
    r0 = pxsim_Array__push(s.tmp_0, 54);
    r0 = pxsim_Array__push(s.tmp_0, 57);
    r0 = pxsim_Array__push(s.tmp_0, 55);
    r0 = pxsim_Array__push(s.tmp_0, 53);
    r0 = pxsim_Array__push(s.tmp_0, 53);
    r0 = pxsim_Array__push(s.tmp_0, 54);
    r0 = pxsim_Array__push(s.tmp_0, 53);
    r0 = pxsim_Array__push(s.tmp_0, 52);
    r0 = pxsim_Array__push(s.tmp_0, 57);
    r0 = pxsim_Array__push(s.tmp_0, 64);
    r0 = pxsim_Array__push(s.tmp_0, 70);
    r0 = pxsim_Array__push(s.tmp_0, 73);
    r0 = pxsim_Array__push(s.tmp_0, 78);
    r0 = pxsim_Array__push(s.tmp_0, 81);
    r0 = pxsim_Array__push(s.tmp_0, 84);
    r0 = pxsim_Array__push(s.tmp_0, 88);
    r0 = pxsim_Array__push(s.tmp_0, 91);
    r0 = pxsim_Array__push(s.tmp_0, 93);
    r0 = pxsim_Array__push(s.tmp_0, 93);
    r0 = pxsim_Array__push(s.tmp_0, 93);
    r0 = pxsim_Array__push(s.tmp_0, 93);
    r0 = pxsim_Array__push(s.tmp_0, 95);
    r0 = pxsim_Array__push(s.tmp_0, 97);
    r0 = pxsim_Array__push(s.tmp_0, 98);
    r0 = pxsim_Array__push(s.tmp_0, 99);
    r0 = pxsim_Array__push(s.tmp_0, 98);
    r0 = pxsim_Array__push(s.tmp_0, 97);
    r0 = pxsim_Array__push(s.tmp_0, 97);
    r0 = pxsim_Array__push(s.tmp_0, 97);
    r0 = pxsim_Array__push(s.tmp_0, 97);
    r0 = pxsim_Array__push(s.tmp_0, 95);
    r0 = pxsim_Array__push(s.tmp_0, 94);
    r0 = pxsim_Array__push(s.tmp_0, 98);
    r0 = pxsim_Array__push(s.tmp_0, 100);
    r0 = pxsim_Array__push(s.tmp_0, 99);
    r0 = pxsim_Array__push(s.tmp_0, 95);
    r0 = pxsim_Array__push(s.tmp_0, 91);
    r0 = pxsim_Array__push(s.tmp_0, 84);
    r0 = pxsim_Array__push(s.tmp_0, 80);
    r0 = pxsim_Array__push(s.tmp_0, 80);
    r0 = pxsim_Array__push(s.tmp_0, 79);
    r0 = pxsim_Array__push(s.tmp_0, 79);
    r0 = pxsim_Array__push(s.tmp_0, 79);
    r0 = pxsim_Array__push(s.tmp_0, 79);
    r0 = pxsim_Array__push(s.tmp_0, 79);
    r0 = pxsim_Array__push(s.tmp_0, 80);
    r0 = pxsim_Array__push(s.tmp_0, 79);
    r0 = pxsim_Array__push(s.tmp_0, 74);
    r0 = pxsim_Array__push(s.tmp_0, 66);
    r0 = pxsim_Array__push(s.tmp_0, 56);
    r0 = pxsim_Array__push(s.tmp_0, 50);
    r0 = pxsim_Array__push(s.tmp_0, 46);
    r0 = pxsim_Array__push(s.tmp_0, 42);
    r0 = pxsim_Array__push(s.tmp_0, 38);
    r0 = pxsim_Array__push(s.tmp_0, 34);
    r0 = pxsim_Array__push(s.tmp_0, 29);
    r0 = pxsim_Array__push(s.tmp_0, 30);
    r0 = pxsim_Array__push(s.tmp_0, 34);
    r0 = pxsim_Array__push(s.tmp_0, 35);
    r0 = pxsim_Array__push(s.tmp_0, 36);
    r0 = pxsim_Array__push(s.tmp_0, 32);
    r0 = pxsim_Array__push(s.tmp_0, 27);
    r0 = pxsim_Array__push(s.tmp_0, 27);
    r0 = pxsim_Array__push(s.tmp_0, 29);
    r0 = pxsim_Array__push(s.tmp_0, 29);
    r0 = pxsim_Array__push(s.tmp_0, 29);
    r0 = pxsim_Array__push(s.tmp_0, 30);
    r0 = pxsim_Array__push(s.tmp_0, 29);
    r0 = pxsim_Array__push(s.tmp_0, 28);
    r0 = pxsim_Array__push(s.tmp_0, 27);
    r0 = pxsim_Array__push(s.tmp_0, 27);
    r0 = pxsim_Array__push(s.tmp_0, 27);
    r0 = pxsim_Array__push(s.tmp_0, 28);
    r0 = pxsim_Array__push(s.tmp_0, 31);
    r0 = pxsim_Array__push(s.tmp_0, 35);
    r0 = pxsim_Array__push(s.tmp_0, 37);
    r0 = pxsim_Array__push(s.tmp_0, 36);
    r0 = pxsim_Array__push(s.tmp_0, 32);
    r0 = pxsim_Array__push(s.tmp_0, 28);
    r0 = pxsim_Array__push(s.tmp_0, 28);
    r0 = pxsim_Array__push(s.tmp_0, 31);
    r0 = pxsim_Array__push(s.tmp_0, 33);
    r0 = pxsim_Array__push(s.tmp_0, 35);
    r0 = pxsim_Array__push(s.tmp_0, 35);
    r0 = pxsim_Array__push(s.tmp_0, 34);
    r0 = pxsim_Array__push(s.tmp_0, 34);
    r0 = pxsim_Array__push(s.tmp_0, 31);
    r0 = pxsim_Array__push(s.tmp_0, 27);
    r0 = pxsim_Array__push(s.tmp_0, 27);
    r0 = pxsim_Array__push(s.tmp_0, 27);
    r0 = pxsim_Array__push(s.tmp_0, 25);
    r0 = pxsim_Array__push(s.tmp_0, 25);
    r0 = pxsim_Array__push(s.tmp_0, 28);
    r0 = pxsim_Array__push(s.tmp_0, 28);
    r0 = pxsim_Array__push(s.tmp_0, 28);
    r0 = pxsim_Array__push(s.tmp_0, 28);
    r0 = pxsim_Array__push(s.tmp_0, 29);
    r0 = pxsim_Array__push(s.tmp_0, 29);
    r0 = pxsim_Array__push(s.tmp_0, 29);
    r0 = pxsim_Array__push(s.tmp_0, 29);
    r0 = pxsim_Array__push(s.tmp_0, 28);
    r0 = pxsim_Array__push(s.tmp_0, 28);
    r0 = pxsim_Array__push(s.tmp_0, 29);
    r0 = pxsim_Array__push(s.tmp_0, 29);
    r0 = pxsim_Array__push(s.tmp_0, 31);
    r0 = pxsim_Array__push(s.tmp_0, 35);
    r0 = pxsim_Array__push(s.tmp_0, 36);
    r0 = pxsim_Array__push(s.tmp_0, 34);
    r0 = pxsim_Array__push(s.tmp_0, 31);
    r0 = pxsim_Array__push(s.tmp_0, 29);
    r0 = pxsim_Array__push(s.tmp_0, 26);
    r0 = pxsim_Array__push(s.tmp_0, 23);
    r0 = pxsim_Array__push(s.tmp_0, 17);
    r0 = pxsim_Array__push(s.tmp_0, 16);
    r0 = pxsim_Array__push(s.tmp_0, 21);
    r0 = pxsim_Array__push(s.tmp_0, 27);
    r0 = pxsim_Array__push(s.tmp_0, 33);
    r0 = pxsim_Array__push(s.tmp_0, 40);
    r0 = pxsim_Array__push(s.tmp_0, 45);
    r0 = pxsim_Array__push(s.tmp_0, 50);
    r0 = pxsim_Array__push(s.tmp_0, 53);
    r0 = pxsim_Array__push(s.tmp_0, 54);
    r0 = pxsim_Array__push(s.tmp_0, 57);
    r0 = pxsim_Array__push(s.tmp_0, 57);
    r0 = pxsim_Array__push(s.tmp_0, 53);
    r0 = pxsim_Array__push(s.tmp_0, 53);
    r0 = pxsim_Array__push(s.tmp_0, 53);
    r0 = pxsim_Array__push(s.tmp_0, 54);
    r0 = pxsim_Array__push(s.tmp_0, 55);
    r0 = pxsim_Array__push(s.tmp_0, 57);
    r0 = pxsim_Array__push(s.tmp_0, 58);
    r0 = pxsim_Array__push(s.tmp_0, 61);
    r0 = pxsim_Array__push(s.tmp_0, 65);
    r0 = pxsim_Array__push(s.tmp_0, 68);
    r0 = pxsim_Array__push(s.tmp_0, 69);
    r0 = pxsim_Array__push(s.tmp_0, 69);
    r0 = pxsim_Array__push(s.tmp_0, 69);
    r0 = pxsim_Array__push(s.tmp_0, 69);
    r0 = pxsim_Array__push(s.tmp_0, 72);
    r0 = pxsim_Array__push(s.tmp_0, 76);
    r0 = pxsim_Array__push(s.tmp_0, 79);
    r0 = pxsim_Array__push(s.tmp_0, 84);
    r0 = pxsim_Array__push(s.tmp_0, 87);
    r0 = pxsim_Array__push(s.tmp_0, 91);
    r0 = pxsim_Array__push(s.tmp_0, 94);
    r0 = pxsim_Array__push(s.tmp_0, 97);
    r0 = pxsim_Array__push(s.tmp_0, 98);
    r0 = pxsim_Array__push(s.tmp_0, 98);
    r0 = pxsim_Array__push(s.tmp_0, 98);
    r0 = pxsim_Array__push(s.tmp_0, 97);
    s.tmp_1 = Buffer_fromArray__P210_mk(s);
    s.tmp_1.arg0 = s.tmp_0;
    s.callLocIdx = 24; s.pc = 6; return s.tmp_1;
  case 6:
    r0 = s.retval;
    s.bigBuffer___8237 = (r0);
    r0 = pxsim.control.millis();
    s.startTime___8240 = (r0);
    s.i___8243 = (0);
  case 1:
    r0 = (s.i___8243 < globals.num___8136);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 2; continue; }
    s.tmp_1 = r0 = s.bigArray___8235;
    r0 = (s.i___8243 % 30);
    s.tmp_2 = r0;
    r0 = pxsim_Array__getAt(s.tmp_1, s.tmp_2);
    r0 = (s.i___8243 + 1);
    s.i___8243 = (r0);
    { step = 1; continue; }
  case 2:
    s.tmp_0 = console_logValue__P381_mk(s);
    s.tmp_0.arg0 = "array get";
    r0 = pxsim.control.millis();
    s.tmp_1 = r0;
    r0 = (s.tmp_1 - s.startTime___8240);
    s.tmp_0.arg1 = r0;
    s.callLocIdx = 25; s.pc = 7; return s.tmp_0;
  case 7:
    r0 = s.retval;
    r0 = pxsim.control.millis();
    s.startTime___8240 = (r0);
    s.i___8261 = (0);
  case 3:
    r0 = (s.i___8261 < globals.num___8136);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 4; continue; }
    s.tmp_1 = r0 = s.bigBuffer___8237;
    r0 = (s.i___8261 % 30);
    s.tmp_2 = r0;
    r0 = pxsim.BufferMethods.getByte(s.tmp_1, s.tmp_2);
    r0 = (s.i___8261 + 1);
    s.i___8261 = (r0);
    { step = 3; continue; }
  case 4:
    s.tmp_0 = console_logValue__P381_mk(s);
    s.tmp_0.arg0 = "buffer get";
    r0 = pxsim.control.millis();
    s.tmp_1 = r0;
    r0 = (s.tmp_1 - s.startTime___8240);
    s.tmp_0.arg1 = r0;
    s.callLocIdx = 26; s.pc = 8; return s.tmp_0;
  case 8:
    r0 = s.retval;
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
testBuffersGet__P8152.info = {"start":4935,"length":2666,"line":45,"column":0,"endLine":61,"endColumn":1,"fileName":"main.ts","functionName":"testBuffersGet","argumentNames":[]}

function testBuffersGet__P8152_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: testBuffersGet__P8152, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  bigArray___8235: undefined,
  bigBuffer___8237: undefined,
  startTime___8240: undefined,
  i___8243: undefined,
  i___8261: undefined,
} }





function console_logValue__P381(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.lambdaArgs = null;
    }
    r0 = pxsim_numops_toBoolDecr(s.arg0);
    if (!r0) { step = 1; continue; }
    r0 = pxsim_String_.mkEmpty();
    s.tmp_2 = r0;
    s.tmp_5 = console_inspect__P382_mk(s);
    s.tmp_5.arg0 = s.arg0;
    s.tmp_5.arg1 = 20;
    s.callLocIdx = 31; s.pc = 3; return s.tmp_5;
  case 3:
    r0 = s.retval;
    s.tmp_4 = r0;
    if ((s.tmp_4) && (s.tmp_4).vtable) {
    setupResume(s, 4);
    pxsim_String__stringConv(s.tmp_4);
    checkResumeConsumed();
    return;
    } else { s.retval = (s.tmp_4) + ""; }
  case 4:
    r0 = s.retval;
    s.tmp_3 = r0;
    r0 = pxsim_String__concat(s.tmp_2, s.tmp_3);
    s.tmp_1 = r0;
    r0 = pxsim_String__concat(s.tmp_1, ": ");
    s.tmp_0 = r0;
    s.tmp_8 = console_inspect__P382_mk(s);
    s.tmp_8.arg0 = s.arg1;
    s.tmp_8.arg1 = 20;
    s.callLocIdx = 32; s.pc = 5; return s.tmp_8;
  case 5:
    r0 = s.retval;
    s.tmp_7 = r0;
    if ((s.tmp_7) && (s.tmp_7).vtable) {
    setupResume(s, 6);
    pxsim_String__stringConv(s.tmp_7);
    checkResumeConsumed();
    return;
    } else { s.retval = (s.tmp_7) + ""; }
  case 6:
    r0 = s.retval;
    s.tmp_6 = r0;
    r0 = pxsim_String__concat(s.tmp_0, s.tmp_6);
    { step = 2; continue; }
  case 1:
    r0 = pxsim_String_.mkEmpty();
    s.tmp_9 = r0;
    s.tmp_12 = console_inspect__P382_mk(s);
    s.tmp_12.arg0 = s.arg1;
    s.tmp_12.arg1 = 20;
    s.callLocIdx = 33; s.pc = 7; return s.tmp_12;
  case 7:
    r0 = s.retval;
    s.tmp_11 = r0;
    if ((s.tmp_11) && (s.tmp_11).vtable) {
    setupResume(s, 8);
    pxsim_String__stringConv(s.tmp_11);
    checkResumeConsumed();
    return;
    } else { s.retval = (s.tmp_11) + ""; }
  case 8:
    r0 = s.retval;
    s.tmp_10 = r0;
    r0 = pxsim_String__concat(s.tmp_9, s.tmp_10);
  case 2:
    // jmp value (already in r0)
    s.tmp_13 = r0;
    s.tmp_14 = console_log__P380_mk(s);
    s.tmp_14.arg0 = s.tmp_13;
    s.callLocIdx = 34; s.pc = 9; return s.tmp_14;
  case 9:
    r0 = s.retval;
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
console_logValue__P381.info = {"start":1905,"length":141,"line":72,"column":4,"endLine":74,"endColumn":5,"fileName":"pxt_modules/base/console.ts","functionName":"logValue","argumentNames":["name","value"]}

function console_logValue__P381_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: console_logValue__P381, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  tmp_4: undefined,
  tmp_5: undefined,
  tmp_6: undefined,
  tmp_7: undefined,
  tmp_8: undefined,
  tmp_9: undefined,
  tmp_10: undefined,
  tmp_11: undefined,
  tmp_12: undefined,
  tmp_13: undefined,
  tmp_14: undefined,
  arg0: undefined,
  arg1: undefined,
} }





function console_inspect__P382(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.asArr___5369 = undefined;
    s.asString___5387 = undefined;
    s.keys___5399 = undefined;
    s.snipped___5403 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.lambdaArgs = null;
    }
    r0 = pxsim_pxtcore.typeOf(s.arg0);
    s.tmp_1 = r0;
    r0 = (s.tmp_1 == "string");
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 1; continue; }
    r0 = s.arg0;
    { step = 17; continue; }
    { step = 16; continue; }
  case 1:
    r0 = pxsim_pxtcore.typeOf(s.arg0);
    s.tmp_3 = r0;
    r0 = (s.tmp_3 == "number");
    s.tmp_2 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_2);
    if (!r0) { step = 2; continue; }
    r0 = pxsim_String_.mkEmpty();
    s.tmp_4 = r0;
    if ((s.arg0) && (s.arg0).vtable) {
    setupResume(s, 18);
    pxsim_String__stringConv(s.arg0);
    checkResumeConsumed();
    return;
    } else { s.retval = (s.arg0) + ""; }
  case 18:
    r0 = s.retval;
    s.tmp_5 = r0;
    r0 = pxsim_String__concat(s.tmp_4, s.tmp_5);
    { step = 17; continue; }
    { step = 15; continue; }
  case 2:
    r0 = pxsim_Array_.isArray(s.arg0);
    s.tmp_6 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_6);
    if (!r0) { step = 5; continue; }
    s.asArr___5369 = (s.arg0);
    r0 = pxsim_Array__length(s.asArr___5369);
    s.tmp_1 = r0;
    r0 = (s.tmp_1 <= s.arg1);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 3; continue; }
    s.tmp_2 = helpers_arrayJoin__P103_mk(s);
    s.tmp_2.arg0 = s.asArr___5369;
    s.tmp_2.arg1 = ",";
    s.callLocIdx = 35; s.pc = 19; return s.tmp_2;
  case 19:
    r0 = s.retval;
    { step = 17; continue; }
    { step = 4; continue; }
  case 3:
    r0 = pxsim_String_.mkEmpty();
    s.tmp_4 = r0;
    s.tmp_7 = helpers_arrayJoin__P103_mk(s);
    s.tmp_8 = helpers_arraySlice__P115_mk(s);
    s.tmp_8.arg0 = s.asArr___5369;
    s.tmp_8.arg1 = 0;
    s.tmp_8.arg2 = s.arg1;
    s.callLocIdx = 36; s.pc = 21; return s.tmp_8;
  case 21:
    r0 = s.retval;
    s.tmp_7.arg0 = r0;
    s.tmp_7.arg1 = ",";
    s.callLocIdx = 37; s.pc = 20; return s.tmp_7;
  case 20:
    r0 = s.retval;
    s.tmp_6 = r0;
    if ((s.tmp_6) && (s.tmp_6).vtable) {
    setupResume(s, 22);
    pxsim_String__stringConv(s.tmp_6);
    checkResumeConsumed();
    return;
    } else { s.retval = (s.tmp_6) + ""; }
  case 22:
    r0 = s.retval;
    s.tmp_5 = r0;
    r0 = pxsim_String__concat(s.tmp_4, s.tmp_5);
    s.tmp_3 = r0;
    r0 = pxsim_String__concat(s.tmp_3, "...");
    { step = 17; continue; }
  case 4:
    { step = 14; continue; }
  case 5:
    if ((s.arg0) && (s.arg0).vtable) {
    setupResume(s, 23);
    pxsim_String__stringConv(s.arg0);
    checkResumeConsumed();
    return;
    } else { s.retval = (s.arg0) + ""; }
  case 23:
    r0 = s.retval;
    s.tmp_9 = r0;
    r0 = pxsim_String_.mkEmpty();
    s.tmp_10 = r0;
    r0 = pxsim_String__concat(s.tmp_9, s.tmp_10);
    s.asString___5387 = (r0);
    r0 = (s.asString___5387 != "[object Object]");
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBool(s.tmp_0);
    if (r0) { step = 6; continue; }
    r0 = s.tmp_0;
    { step = 7; continue; }
  case 6:
    r0 = (s.asString___5387 != "[Object]");
  case 7:
    // jmp value (already in r0)
    s.tmp_1 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_1);
    if (!r0) { step = 8; continue; }
    r0 = s.asString___5387;
    { step = 17; continue; }
  case 8:
  case 9:
    r0 = pxsim_pxtrt.keysOf(s.arg0);
    s.keys___5399 = (r0);
    r0 = pxsim_Array__length(s.keys___5399);
    s.tmp_0 = r0;
    r0 = (s.tmp_0 > s.arg1);
    s.snipped___5403 = (r0);
    r0 = pxsim_numops_toBoolDecr(s.snipped___5403);
    if (!r0) { step = 10; continue; }
    s.tmp_0 = helpers_arraySlice__P115_mk(s);
    s.tmp_0.arg0 = s.keys___5399;
    s.tmp_0.arg1 = 0;
    s.tmp_0.arg2 = s.arg1;
    s.callLocIdx = 38; s.pc = 24; return s.tmp_0;
  case 24:
    r0 = s.retval;
    s.keys___5399 = (r0);
  case 10:
  case 11:
    r0 = pxsim_pxtcore_mkAction(1, console_inspect_inline__P5420);
    s.tmp_0 = r0;
    r0 = pxsim_pxtrt_stclo(s.tmp_0, 0, s.arg0);
    r0 = pxsim_numops_toBoolDecr(s.snipped___5403);
    if (!r0) { step = 12; continue; }
    r0 = "\n    ...";
    { step = 13; continue; }
  case 12:
    r0 = pxsim_String_.mkEmpty();
  case 13:
    // jmp value (already in r0)
    s.tmp_1 = r0;
    s.tmp_7 = helpers_arrayReduce__P112_mk(s);
    s.tmp_7.arg0 = s.keys___5399;
    s.tmp_7.arg1 = s.tmp_0;
    r0 = pxsim_String_.mkEmpty();
    s.tmp_7.arg2 = r0;
    s.callLocIdx = 39; s.pc = 25; return s.tmp_7;
  case 25:
    r0 = s.retval;
    s.tmp_6 = r0;
    if ((s.tmp_6) && (s.tmp_6).vtable) {
    setupResume(s, 26);
    pxsim_String__stringConv(s.tmp_6);
    checkResumeConsumed();
    return;
    } else { s.retval = (s.tmp_6) + ""; }
  case 26:
    r0 = s.retval;
    s.tmp_5 = r0;
    if ((s.tmp_1) && (s.tmp_1).vtable) {
    setupResume(s, 27);
    pxsim_String__stringConv(s.tmp_1);
    checkResumeConsumed();
    return;
    } else { s.retval = (s.tmp_1) + ""; }
  case 27:
    r0 = s.retval;
    s.tmp_8 = r0;
    r0 = pxsim_String__concat(s.tmp_5, s.tmp_8);
    s.tmp_4 = r0;
    if ((s.tmp_4) && (s.tmp_4).vtable) {
    setupResume(s, 28);
    pxsim_String__stringConv(s.tmp_4);
    checkResumeConsumed();
    return;
    } else { s.retval = (s.tmp_4) + ""; }
  case 28:
    r0 = s.retval;
    s.tmp_3 = r0;
    r0 = pxsim_String__concat("{", s.tmp_3);
    s.tmp_2 = r0;
    r0 = pxsim_String__concat(s.tmp_2, "\n}");
    { step = 17; continue; }
  case 14:
  case 15:
  case 16:
    r0 = undefined;
  case 17:
    return leave(s, r0)
  default: oops()
} } }
console_inspect__P382.info = {"start":2271,"length":1190,"line":81,"column":4,"endLine":114,"endColumn":5,"fileName":"pxt_modules/base/console.ts","functionName":"inspect","argumentNames":["obj","maxElements"]}

function console_inspect__P382_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: console_inspect__P382, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  tmp_4: undefined,
  tmp_5: undefined,
  tmp_6: undefined,
  tmp_7: undefined,
  tmp_8: undefined,
  tmp_9: undefined,
  tmp_10: undefined,
  asArr___5369: undefined,
  asString___5387: undefined,
  keys___5399: undefined,
  snipped___5403: undefined,
  arg0: undefined,
  arg1: undefined,
} }





function console_inspect_inline__P5420(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.lambdaArgs = null;
    }
    if ((s.arg0) && (s.arg0).vtable) {
    setupResume(s, 1);
    pxsim_String__stringConv(s.arg0);
    checkResumeConsumed();
    return;
    } else { s.retval = (s.arg0) + ""; }
  case 1:
    r0 = s.retval;
    s.tmp_0 = r0;
    if ((s.arg1) && (s.arg1).vtable) {
    setupResume(s, 2);
    pxsim_String__stringConv(s.arg1);
    checkResumeConsumed();
    return;
    } else { s.retval = (s.arg1) + ""; }
  case 2:
    r0 = s.retval;
    s.tmp_5 = r0;
    r0 = pxsim_String__concat("\n    ", s.tmp_5);
    s.tmp_4 = r0;
    r0 = pxsim_String__concat(s.tmp_4, ": ");
    s.tmp_3 = r0;
    r0 = pxsim_pxtrt.mapGetGeneric(s.caps[0], s.arg1);
    s.tmp_7 = r0;
    if ((s.tmp_7) && (s.tmp_7).vtable) {
    setupResume(s, 3);
    pxsim_String__stringConv(s.tmp_7);
    checkResumeConsumed();
    return;
    } else { s.retval = (s.tmp_7) + ""; }
  case 3:
    r0 = s.retval;
    s.tmp_6 = r0;
    r0 = pxsim_String__concat(s.tmp_3, s.tmp_6);
    s.tmp_2 = r0;
    if ((s.tmp_2) && (s.tmp_2).vtable) {
    setupResume(s, 4);
    pxsim_String__stringConv(s.tmp_2);
    checkResumeConsumed();
    return;
    } else { s.retval = (s.tmp_2) + ""; }
  case 4:
    r0 = s.retval;
    s.tmp_1 = r0;
    r0 = pxsim_String__concat(s.tmp_0, s.tmp_1);
    return leave(s, r0)
  default: oops()
} } }
console_inspect_inline__P5420.info = {"start":3293,"length":61,"line":108,"column":20,"endLine":108,"endColumn":81,"fileName":"pxt_modules/base/console.ts","functionName":"inline","argumentNames":["prev","currKey"]}

function console_inspect_inline__P5420_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: console_inspect_inline__P5420, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  tmp_4: undefined,
  tmp_5: undefined,
  tmp_6: undefined,
  tmp_7: undefined,
  arg0: undefined,
  arg1: undefined,
} }





function helpers_arraySlice__P115(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.res___5468 = undefined;
    s.len___5470 = undefined;
    s.i___5504 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.arg2 = (s.lambdaArgs[2]);
      s.lambdaArgs = null;
    }
    r0 = pxsim_Array__mk();
    s.res___5468 = (r0);
    r0 = pxsim_Array__length(s.arg0);
    s.len___5470 = (r0);
    r0 = (s.arg1 === undefined);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 1; continue; }
    s.arg1 = (0);
    { step = 4; continue; }
  case 1:
    r0 = (s.arg1 < 0);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 2; continue; }
    s.tmp_1 = Math_max__P130_mk(s);
    r0 = (s.len___5470 + s.arg1);
    s.tmp_1.arg0 = r0;
    s.tmp_1.arg1 = 0;
    s.callLocIdx = 3; s.pc = 16; return s.tmp_1;
  case 16:
    r0 = s.retval;
    s.arg1 = (r0);
  case 2:
  case 3:
  case 4:
    r0 = (s.arg1 > s.len___5470);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 5; continue; }
    r0 = s.res___5468;
    { step = 15; continue; }
  case 5:
  case 6:
    r0 = (s.arg2 === undefined);
    s.tmp_1 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_1);
    if (!r0) { step = 7; continue; }
    s.arg2 = (s.len___5470);
    { step = 10; continue; }
  case 7:
    r0 = (s.arg2 < 0);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 8; continue; }
    r0 = (s.len___5470 + s.arg2);
    s.arg2 = (r0);
  case 8:
  case 9:
  case 10:
    r0 = (s.arg2 > s.len___5470);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 11; continue; }
    s.arg2 = (s.len___5470);
  case 11:
  case 12:
    s.i___5504 = (s.arg1);
  case 13:
    r0 = (s.i___5504 < s.arg2);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 14; continue; }
    s.tmp_1 = r0 = s.res___5468;
    r0 = pxsim_Array__getAt(s.arg0, s.i___5504);
    s.tmp_2 = r0;
    r0 = pxsim_Array__push(s.tmp_1, s.tmp_2);
    r0 = (s.i___5504 + 1);
    s.i___5504 = (r0);
    { step = 13; continue; }
  case 14:
    r0 = s.res___5468;
  case 15:
    return leave(s, r0)
  default: oops()
} } }
helpers_arraySlice__P115.info = {"start":9027,"length":690,"line":303,"column":4,"endLine":328,"endColumn":5,"fileName":"pxt_modules/base/pxt-helpers.ts","functionName":"arraySlice","argumentNames":["arr","start","end"]}

function helpers_arraySlice__P115_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: helpers_arraySlice__P115, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  res___5468: undefined,
  len___5470: undefined,
  i___5504: undefined,
  arg0: undefined,
  arg1: undefined,
  arg2: undefined,
} }





function Math_max__P130(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.lambdaArgs = null;
    }
    r0 = (s.arg0 >= s.arg1);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 1; continue; }
    r0 = s.arg0;
    { step = 3; continue; }
  case 1:
  case 2:
    r0 = s.arg1;
  case 3:
    return leave(s, r0)
  default: oops()
} } }
Math_max__P130.info = {"start":16614,"length":105,"line":558,"column":4,"endLine":561,"endColumn":5,"fileName":"pxt_modules/base/pxt-helpers.ts","functionName":"max","argumentNames":["a","b"]}

function Math_max__P130_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: Math_max__P130, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  arg0: undefined,
  arg1: undefined,
} }





function helpers_arrayReduce__P112(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.len___5447 = undefined;
    s.i___5450 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.arg2 = (s.lambdaArgs[2]);
      s.lambdaArgs = null;
    }
    r0 = pxsim_Array__length(s.arg0);
    s.len___5447 = (r0);
    s.i___5450 = (0);
  case 1:
    r0 = (s.i___5450 < s.len___5447);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 2; continue; }
    s.tmp_1 = lambda_4_mk(s);
    s.tmp_1.argL = s.arg1;
    s.tmp_1.arg0 = s.arg2;
    r0 = pxsim_Array__getAt(s.arg0, s.i___5450);
    s.tmp_1.arg1 = r0;
    s.tmp_1.arg2 = s.i___5450;
    setupLambda(s.tmp_1, s.tmp_1.argL);
    s.callLocIdx = 2; s.pc = 3; return s.tmp_1;
  case 3:
    r0 = s.retval;
    s.arg2 = (r0);
    r0 = (s.i___5450 + 1);
    s.i___5450 = (r0);
    { step = 1; continue; }
  case 2:
    r0 = s.arg2;
    return leave(s, r0)
  default: oops()
} } }
helpers_arrayReduce__P112.info = {"start":8316,"length":317,"line":280,"column":4,"endLine":286,"endColumn":5,"fileName":"pxt_modules/base/pxt-helpers.ts","functionName":"arrayReduce","argumentNames":["arr","callbackfn","initialValue"]}

function helpers_arrayReduce__P112_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: helpers_arrayReduce__P112, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  len___5447: undefined,
  i___5450: undefined,
  arg0: undefined,
  arg1: undefined,
  arg2: undefined,
} }





function helpers_arrayJoin__P103(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.r___5529 = undefined;
    s.len___5530 = undefined;
    s.i___5533 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.lambdaArgs = null;
    }
    r0 = (s.arg1 === undefined);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBool(s.tmp_0);
    if (!r0) { step = 1; continue; }
    r0 = s.tmp_0;
    { step = 2; continue; }
  case 1:
    r0 = (s.arg1 === null);
  case 2:
    // jmp value (already in r0)
    s.tmp_1 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_1);
    if (!r0) { step = 3; continue; }
    s.arg1 = (",");
  case 3:
  case 4:
    r0 = pxsim_String_.mkEmpty();
    s.r___5529 = (r0);
    r0 = pxsim_Array__length(s.arg0);
    s.len___5530 = (r0);
    s.i___5533 = (0);
  case 5:
    r0 = (s.i___5533 < s.len___5530);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 14; continue; }
    r0 = (s.i___5533 > 0);
    s.tmp_1 = r0;
    r0 = pxsim_numops_toBool(s.tmp_1);
    if (r0) { step = 6; continue; }
    r0 = s.tmp_1;
    { step = 7; continue; }
  case 6:
    r0 = s.arg1;
  case 7:
    // jmp value (already in r0)
    s.tmp_2 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_2);
    if (!r0) { step = 8; continue; }
    if ((s.r___5529) && (s.r___5529).vtable) {
    setupResume(s, 15);
    pxsim_String__stringConv(s.r___5529);
    checkResumeConsumed();
    return;
    } else { s.retval = (s.r___5529) + ""; }
  case 15:
    r0 = s.retval;
    s.tmp_3 = r0;
    if ((s.arg1) && (s.arg1).vtable) {
    setupResume(s, 16);
    pxsim_String__stringConv(s.arg1);
    checkResumeConsumed();
    return;
    } else { s.retval = (s.arg1) + ""; }
  case 16:
    r0 = s.retval;
    s.tmp_4 = r0;
    r0 = pxsim_String__concat(s.tmp_3, s.tmp_4);
    s.r___5529 = (r0);
  case 8:
  case 9:
    r0 = pxsim_Array__getAt(s.arg0, s.i___5533);
    s.tmp_1 = r0;
    r0 = (s.tmp_1 === undefined);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBool(s.tmp_0);
    if (!r0) { step = 10; continue; }
    r0 = s.tmp_0;
    { step = 11; continue; }
  case 10:
    r0 = pxsim_Array__getAt(s.arg0, s.i___5533);
    s.tmp_2 = r0;
    r0 = (s.tmp_2 === null);
  case 11:
    // jmp value (already in r0)
    s.tmp_3 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_3);
    if (!r0) { step = 12; continue; }
    r0 = pxsim_String_.mkEmpty();
    { step = 13; continue; }
  case 12:
    r0 = pxsim_Array__getAt(s.arg0, s.i___5533);
  case 13:
    // jmp value (already in r0)
    s.tmp_4 = r0;
    if ((s.r___5529) && (s.r___5529).vtable) {
    setupResume(s, 17);
    pxsim_String__stringConv(s.r___5529);
    checkResumeConsumed();
    return;
    } else { s.retval = (s.r___5529) + ""; }
  case 17:
    r0 = s.retval;
    s.tmp_5 = r0;
    if ((s.tmp_4) && (s.tmp_4).vtable) {
    setupResume(s, 18);
    pxsim_String__stringConv(s.tmp_4);
    checkResumeConsumed();
    return;
    } else { s.retval = (s.tmp_4) + ""; }
  case 18:
    r0 = s.retval;
    s.tmp_6 = r0;
    r0 = pxsim_String__concat(s.tmp_5, s.tmp_6);
    s.r___5529 = (r0);
    r0 = (s.i___5533 + 1);
    s.i___5533 = (r0);
    { step = 5; continue; }
  case 14:
    r0 = s.r___5529;
    return leave(s, r0)
  default: oops()
} } }
helpers_arrayJoin__P103.info = {"start":4133,"length":432,"line":157,"column":4,"endLine":170,"endColumn":5,"fileName":"pxt_modules/base/pxt-helpers.ts","functionName":"arrayJoin","argumentNames":["arr","sep"]}

function helpers_arrayJoin__P103_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: helpers_arrayJoin__P103, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  tmp_4: undefined,
  tmp_5: undefined,
  tmp_6: undefined,
  r___5529: undefined,
  len___5530: undefined,
  i___5533: undefined,
  arg0: undefined,
  arg1: undefined,
} }





function Buffer_fromArray__P210(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.buf___5719 = undefined;
    s.i___5724 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    r0 = pxsim_Array__length(s.arg0);
    s.tmp_0 = r0;
    r0 = pxsim.control.createBuffer(s.tmp_0);
    s.buf___5719 = (r0);
    s.i___5724 = (0);
  case 1:
    s.tmp_1 = r0 = s.i___5724;
    r0 = pxsim_Array__length(s.arg0);
    s.tmp_2 = r0;
    r0 = (s.tmp_1 < s.tmp_2);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 2; continue; }
    s.tmp_3 = r0 = s.buf___5719;
    s.tmp_4 = r0 = s.i___5724;
    r0 = pxsim_Array__getAt(s.arg0, s.i___5724);
    s.tmp_5 = r0;
    r0 = pxsim.BufferMethods.setByte(s.tmp_3, s.tmp_4, s.tmp_5);
    r0 = (s.i___5724 + 1);
    s.i___5724 = (r0);
    { step = 1; continue; }
  case 2:
    r0 = s.buf___5719;
    return leave(s, r0)
  default: oops()
} } }
Buffer_fromArray__P210.info = {"start":11216,"length":192,"line":396,"column":4,"endLine":401,"endColumn":5,"fileName":"pxt_modules/base/buffer.ts","functionName":"fromArray","argumentNames":["bytes"]}

function Buffer_fromArray__P210_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: Buffer_fromArray__P210, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  tmp_4: undefined,
  tmp_5: undefined,
  buf___5719: undefined,
  i___5724: undefined,
  arg0: undefined,
} }





function testBuffersCreate__P8150(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.b0___8155 = undefined;
    s.b1___8156 = undefined;
    s.b2___8157 = undefined;
    s.startTime___8158 = undefined;
    s.c___8161 = undefined;
    s.i___8168 = undefined;
    s.big___8174 = undefined;
    s.i___8188 = undefined;
    s.big___8194 = undefined;
    s.i___8209 = undefined;
    s.big___8215 = undefined;
    s.tmp_0 = console_log__P380_mk(s);
    s.tmp_0.arg0 = "Testing buffer creation against arrays";
    s.callLocIdx = 17; s.pc = 9; return s.tmp_0;
  case 9:
    r0 = s.retval;
    s.b0___8155 = (0);
    s.b1___8156 = (0);
    s.b2___8157 = (0);
    r0 = pxsim.control.millis();
    s.startTime___8158 = (r0);
    s.c___8161 = (0);
  case 1:
    r0 = (s.c___8161 < 5);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 8; continue; }
    r0 = pxsim.control.millis();
    s.startTime___8158 = (r0);
    s.i___8168 = (0);
  case 2:
    s.tmp_1 = r0 = s.i___8168;
    r0 = (globals.num___8136 / 5);
    s.tmp_2 = r0;
    r0 = (s.tmp_1 < s.tmp_2);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 3; continue; }
    r0 = pxsim_Array__mk();
    s.tmp_3 = r0;
    r0 = pxsim_Array__push(s.tmp_3, 97);
    r0 = pxsim_Array__push(s.tmp_3, 96);
    r0 = pxsim_Array__push(s.tmp_3, 93);
    r0 = pxsim_Array__push(s.tmp_3, 87);
    r0 = pxsim_Array__push(s.tmp_3, 80);
    r0 = pxsim_Array__push(s.tmp_3, 76);
    r0 = pxsim_Array__push(s.tmp_3, 77);
    r0 = pxsim_Array__push(s.tmp_3, 76);
    r0 = pxsim_Array__push(s.tmp_3, 80);
    r0 = pxsim_Array__push(s.tmp_3, 90);
    r0 = pxsim_Array__push(s.tmp_3, 95);
    r0 = pxsim_Array__push(s.tmp_3, 95);
    r0 = pxsim_Array__push(s.tmp_3, 95);
    r0 = pxsim_Array__push(s.tmp_3, 94);
    r0 = pxsim_Array__push(s.tmp_3, 93);
    r0 = pxsim_Array__push(s.tmp_3, 93);
    r0 = pxsim_Array__push(s.tmp_3, 95);
    r0 = pxsim_Array__push(s.tmp_3, 95);
    r0 = pxsim_Array__push(s.tmp_3, 96);
    r0 = pxsim_Array__push(s.tmp_3, 95);
    r0 = pxsim_Array__push(s.tmp_3, 92);
    r0 = pxsim_Array__push(s.tmp_3, 90);
    r0 = pxsim_Array__push(s.tmp_3, 87);
    r0 = pxsim_Array__push(s.tmp_3, 83);
    r0 = pxsim_Array__push(s.tmp_3, 79);
    r0 = pxsim_Array__push(s.tmp_3, 75);
    r0 = pxsim_Array__push(s.tmp_3, 74);
    r0 = pxsim_Array__push(s.tmp_3, 75);
    r0 = pxsim_Array__push(s.tmp_3, 79);
    r0 = pxsim_Array__push(s.tmp_3, 82);
    r0 = pxsim_Array__push(s.tmp_3, 83);
    r0 = pxsim_Array__push(s.tmp_3, 83);
    r0 = pxsim_Array__push(s.tmp_3, 84);
    r0 = pxsim_Array__push(s.tmp_3, 87);
    r0 = pxsim_Array__push(s.tmp_3, 92);
    r0 = pxsim_Array__push(s.tmp_3, 98);
    r0 = pxsim_Array__push(s.tmp_3, 100);
    r0 = pxsim_Array__push(s.tmp_3, 100);
    r0 = pxsim_Array__push(s.tmp_3, 108);
    r0 = pxsim_Array__push(s.tmp_3, 116);
    r0 = pxsim_Array__push(s.tmp_3, 120);
    r0 = pxsim_Array__push(s.tmp_3, 123);
    r0 = pxsim_Array__push(s.tmp_3, 124);
    r0 = pxsim_Array__push(s.tmp_3, 124);
    r0 = pxsim_Array__push(s.tmp_3, 123);
    r0 = pxsim_Array__push(s.tmp_3, 124);
    r0 = pxsim_Array__push(s.tmp_3, 124);
    r0 = pxsim_Array__push(s.tmp_3, 124);
    r0 = pxsim_Array__push(s.tmp_3, 123);
    r0 = pxsim_Array__push(s.tmp_3, 124);
    r0 = pxsim_Array__push(s.tmp_3, 124);
    r0 = pxsim_Array__push(s.tmp_3, 124);
    r0 = pxsim_Array__push(s.tmp_3, 123);
    r0 = pxsim_Array__push(s.tmp_3, 123);
    r0 = pxsim_Array__push(s.tmp_3, 124);
    r0 = pxsim_Array__push(s.tmp_3, 124);
    r0 = pxsim_Array__push(s.tmp_3, 124);
    r0 = pxsim_Array__push(s.tmp_3, 124);
    r0 = pxsim_Array__push(s.tmp_3, 124);
    r0 = pxsim_Array__push(s.tmp_3, 124);
    r0 = pxsim_Array__push(s.tmp_3, 123);
    r0 = pxsim_Array__push(s.tmp_3, 124);
    r0 = pxsim_Array__push(s.tmp_3, 124);
    r0 = pxsim_Array__push(s.tmp_3, 123);
    r0 = pxsim_Array__push(s.tmp_3, 123);
    r0 = pxsim_Array__push(s.tmp_3, 124);
    r0 = pxsim_Array__push(s.tmp_3, 123);
    r0 = pxsim_Array__push(s.tmp_3, 124);
    r0 = pxsim_Array__push(s.tmp_3, 123);
    r0 = pxsim_Array__push(s.tmp_3, 124);
    r0 = pxsim_Array__push(s.tmp_3, 124);
    r0 = pxsim_Array__push(s.tmp_3, 124);
    r0 = pxsim_Array__push(s.tmp_3, 123);
    r0 = pxsim_Array__push(s.tmp_3, 123);
    r0 = pxsim_Array__push(s.tmp_3, 123);
    r0 = pxsim_Array__push(s.tmp_3, 123);
    r0 = pxsim_Array__push(s.tmp_3, 123);
    r0 = pxsim_Array__push(s.tmp_3, 123);
    r0 = pxsim_Array__push(s.tmp_3, 124);
    r0 = pxsim_Array__push(s.tmp_3, 124);
    r0 = pxsim_Array__push(s.tmp_3, 124);
    r0 = pxsim_Array__push(s.tmp_3, 124);
    r0 = pxsim_Array__push(s.tmp_3, 122);
    r0 = pxsim_Array__push(s.tmp_3, 119);
    r0 = pxsim_Array__push(s.tmp_3, 118);
    r0 = pxsim_Array__push(s.tmp_3, 115);
    r0 = pxsim_Array__push(s.tmp_3, 114);
    r0 = pxsim_Array__push(s.tmp_3, 112);
    r0 = pxsim_Array__push(s.tmp_3, 109);
    r0 = pxsim_Array__push(s.tmp_3, 106);
    r0 = pxsim_Array__push(s.tmp_3, 102);
    r0 = pxsim_Array__push(s.tmp_3, 97);
    r0 = pxsim_Array__push(s.tmp_3, 93);
    r0 = pxsim_Array__push(s.tmp_3, 89);
    r0 = pxsim_Array__push(s.tmp_3, 84);
    r0 = pxsim_Array__push(s.tmp_3, 80);
    r0 = pxsim_Array__push(s.tmp_3, 79);
    r0 = pxsim_Array__push(s.tmp_3, 79);
    r0 = pxsim_Array__push(s.tmp_3, 75);
    r0 = pxsim_Array__push(s.tmp_3, 73);
    r0 = pxsim_Array__push(s.tmp_3, 69);
    r0 = pxsim_Array__push(s.tmp_3, 65);
    r0 = pxsim_Array__push(s.tmp_3, 59);
    r0 = pxsim_Array__push(s.tmp_3, 55);
    r0 = pxsim_Array__push(s.tmp_3, 54);
    r0 = pxsim_Array__push(s.tmp_3, 53);
    r0 = pxsim_Array__push(s.tmp_3, 54);
    r0 = pxsim_Array__push(s.tmp_3, 57);
    r0 = pxsim_Array__push(s.tmp_3, 55);
    r0 = pxsim_Array__push(s.tmp_3, 53);
    r0 = pxsim_Array__push(s.tmp_3, 53);
    r0 = pxsim_Array__push(s.tmp_3, 54);
    r0 = pxsim_Array__push(s.tmp_3, 53);
    r0 = pxsim_Array__push(s.tmp_3, 52);
    r0 = pxsim_Array__push(s.tmp_3, 57);
    r0 = pxsim_Array__push(s.tmp_3, 64);
    r0 = pxsim_Array__push(s.tmp_3, 70);
    r0 = pxsim_Array__push(s.tmp_3, 73);
    r0 = pxsim_Array__push(s.tmp_3, 78);
    r0 = pxsim_Array__push(s.tmp_3, 81);
    r0 = pxsim_Array__push(s.tmp_3, 84);
    r0 = pxsim_Array__push(s.tmp_3, 88);
    r0 = pxsim_Array__push(s.tmp_3, 91);
    r0 = pxsim_Array__push(s.tmp_3, 93);
    r0 = pxsim_Array__push(s.tmp_3, 93);
    r0 = pxsim_Array__push(s.tmp_3, 93);
    r0 = pxsim_Array__push(s.tmp_3, 93);
    r0 = pxsim_Array__push(s.tmp_3, 95);
    r0 = pxsim_Array__push(s.tmp_3, 97);
    r0 = pxsim_Array__push(s.tmp_3, 98);
    r0 = pxsim_Array__push(s.tmp_3, 99);
    r0 = pxsim_Array__push(s.tmp_3, 98);
    r0 = pxsim_Array__push(s.tmp_3, 97);
    r0 = pxsim_Array__push(s.tmp_3, 97);
    r0 = pxsim_Array__push(s.tmp_3, 97);
    r0 = pxsim_Array__push(s.tmp_3, 97);
    r0 = pxsim_Array__push(s.tmp_3, 95);
    r0 = pxsim_Array__push(s.tmp_3, 94);
    r0 = pxsim_Array__push(s.tmp_3, 98);
    r0 = pxsim_Array__push(s.tmp_3, 100);
    r0 = pxsim_Array__push(s.tmp_3, 99);
    r0 = pxsim_Array__push(s.tmp_3, 95);
    r0 = pxsim_Array__push(s.tmp_3, 91);
    r0 = pxsim_Array__push(s.tmp_3, 84);
    r0 = pxsim_Array__push(s.tmp_3, 80);
    r0 = pxsim_Array__push(s.tmp_3, 80);
    r0 = pxsim_Array__push(s.tmp_3, 79);
    r0 = pxsim_Array__push(s.tmp_3, 79);
    r0 = pxsim_Array__push(s.tmp_3, 79);
    r0 = pxsim_Array__push(s.tmp_3, 79);
    r0 = pxsim_Array__push(s.tmp_3, 79);
    r0 = pxsim_Array__push(s.tmp_3, 80);
    r0 = pxsim_Array__push(s.tmp_3, 79);
    r0 = pxsim_Array__push(s.tmp_3, 74);
    r0 = pxsim_Array__push(s.tmp_3, 66);
    r0 = pxsim_Array__push(s.tmp_3, 56);
    r0 = pxsim_Array__push(s.tmp_3, 50);
    r0 = pxsim_Array__push(s.tmp_3, 46);
    r0 = pxsim_Array__push(s.tmp_3, 42);
    r0 = pxsim_Array__push(s.tmp_3, 38);
    r0 = pxsim_Array__push(s.tmp_3, 34);
    r0 = pxsim_Array__push(s.tmp_3, 29);
    r0 = pxsim_Array__push(s.tmp_3, 30);
    r0 = pxsim_Array__push(s.tmp_3, 34);
    r0 = pxsim_Array__push(s.tmp_3, 35);
    r0 = pxsim_Array__push(s.tmp_3, 36);
    r0 = pxsim_Array__push(s.tmp_3, 32);
    r0 = pxsim_Array__push(s.tmp_3, 27);
    r0 = pxsim_Array__push(s.tmp_3, 27);
    r0 = pxsim_Array__push(s.tmp_3, 29);
    r0 = pxsim_Array__push(s.tmp_3, 29);
    r0 = pxsim_Array__push(s.tmp_3, 29);
    r0 = pxsim_Array__push(s.tmp_3, 30);
    r0 = pxsim_Array__push(s.tmp_3, 29);
    r0 = pxsim_Array__push(s.tmp_3, 28);
    r0 = pxsim_Array__push(s.tmp_3, 27);
    r0 = pxsim_Array__push(s.tmp_3, 27);
    r0 = pxsim_Array__push(s.tmp_3, 27);
    r0 = pxsim_Array__push(s.tmp_3, 28);
    r0 = pxsim_Array__push(s.tmp_3, 31);
    r0 = pxsim_Array__push(s.tmp_3, 35);
    r0 = pxsim_Array__push(s.tmp_3, 37);
    r0 = pxsim_Array__push(s.tmp_3, 36);
    r0 = pxsim_Array__push(s.tmp_3, 32);
    r0 = pxsim_Array__push(s.tmp_3, 28);
    r0 = pxsim_Array__push(s.tmp_3, 28);
    r0 = pxsim_Array__push(s.tmp_3, 31);
    r0 = pxsim_Array__push(s.tmp_3, 33);
    r0 = pxsim_Array__push(s.tmp_3, 35);
    r0 = pxsim_Array__push(s.tmp_3, 35);
    r0 = pxsim_Array__push(s.tmp_3, 34);
    r0 = pxsim_Array__push(s.tmp_3, 34);
    r0 = pxsim_Array__push(s.tmp_3, 31);
    r0 = pxsim_Array__push(s.tmp_3, 27);
    r0 = pxsim_Array__push(s.tmp_3, 27);
    r0 = pxsim_Array__push(s.tmp_3, 27);
    r0 = pxsim_Array__push(s.tmp_3, 25);
    r0 = pxsim_Array__push(s.tmp_3, 25);
    r0 = pxsim_Array__push(s.tmp_3, 28);
    r0 = pxsim_Array__push(s.tmp_3, 28);
    r0 = pxsim_Array__push(s.tmp_3, 28);
    r0 = pxsim_Array__push(s.tmp_3, 28);
    r0 = pxsim_Array__push(s.tmp_3, 29);
    r0 = pxsim_Array__push(s.tmp_3, 29);
    r0 = pxsim_Array__push(s.tmp_3, 29);
    r0 = pxsim_Array__push(s.tmp_3, 29);
    r0 = pxsim_Array__push(s.tmp_3, 28);
    r0 = pxsim_Array__push(s.tmp_3, 28);
    r0 = pxsim_Array__push(s.tmp_3, 29);
    r0 = pxsim_Array__push(s.tmp_3, 29);
    r0 = pxsim_Array__push(s.tmp_3, 31);
    r0 = pxsim_Array__push(s.tmp_3, 35);
    r0 = pxsim_Array__push(s.tmp_3, 36);
    r0 = pxsim_Array__push(s.tmp_3, 34);
    r0 = pxsim_Array__push(s.tmp_3, 31);
    r0 = pxsim_Array__push(s.tmp_3, 29);
    r0 = pxsim_Array__push(s.tmp_3, 26);
    r0 = pxsim_Array__push(s.tmp_3, 23);
    r0 = pxsim_Array__push(s.tmp_3, 17);
    r0 = pxsim_Array__push(s.tmp_3, 16);
    r0 = pxsim_Array__push(s.tmp_3, 21);
    r0 = pxsim_Array__push(s.tmp_3, 27);
    r0 = pxsim_Array__push(s.tmp_3, 33);
    r0 = pxsim_Array__push(s.tmp_3, 40);
    r0 = pxsim_Array__push(s.tmp_3, 45);
    r0 = pxsim_Array__push(s.tmp_3, 50);
    r0 = pxsim_Array__push(s.tmp_3, 53);
    r0 = pxsim_Array__push(s.tmp_3, 54);
    r0 = pxsim_Array__push(s.tmp_3, 57);
    r0 = pxsim_Array__push(s.tmp_3, 57);
    r0 = pxsim_Array__push(s.tmp_3, 53);
    r0 = pxsim_Array__push(s.tmp_3, 53);
    r0 = pxsim_Array__push(s.tmp_3, 53);
    r0 = pxsim_Array__push(s.tmp_3, 54);
    r0 = pxsim_Array__push(s.tmp_3, 55);
    r0 = pxsim_Array__push(s.tmp_3, 57);
    r0 = pxsim_Array__push(s.tmp_3, 58);
    r0 = pxsim_Array__push(s.tmp_3, 61);
    r0 = pxsim_Array__push(s.tmp_3, 65);
    r0 = pxsim_Array__push(s.tmp_3, 68);
    r0 = pxsim_Array__push(s.tmp_3, 69);
    r0 = pxsim_Array__push(s.tmp_3, 69);
    r0 = pxsim_Array__push(s.tmp_3, 69);
    r0 = pxsim_Array__push(s.tmp_3, 69);
    r0 = pxsim_Array__push(s.tmp_3, 72);
    r0 = pxsim_Array__push(s.tmp_3, 76);
    r0 = pxsim_Array__push(s.tmp_3, 79);
    r0 = pxsim_Array__push(s.tmp_3, 84);
    r0 = pxsim_Array__push(s.tmp_3, 87);
    r0 = pxsim_Array__push(s.tmp_3, 91);
    r0 = pxsim_Array__push(s.tmp_3, 94);
    r0 = pxsim_Array__push(s.tmp_3, 97);
    r0 = pxsim_Array__push(s.tmp_3, 98);
    r0 = pxsim_Array__push(s.tmp_3, 98);
    r0 = pxsim_Array__push(s.tmp_3, 98);
    r0 = pxsim_Array__push(s.tmp_3, 97);
    s.big___8174 = (s.tmp_3);
    r0 = (s.i___8168 + 1);
    s.i___8168 = (r0);
    { step = 2; continue; }
  case 3:
    s.tmp_0 = r0 = s.b0___8155;
    r0 = pxsim.control.millis();
    s.tmp_2 = r0;
    r0 = (s.tmp_2 - s.startTime___8158);
    s.tmp_1 = r0;
    r0 = (s.tmp_0 + s.tmp_1);
    s.b0___8155 = (r0);
    r0 = pxsim.control.millis();
    s.startTime___8158 = (r0);
    s.i___8188 = (0);
  case 4:
    s.tmp_1 = r0 = s.i___8188;
    r0 = (globals.num___8136 / 5);
    s.tmp_2 = r0;
    r0 = (s.tmp_1 < s.tmp_2);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 5; continue; }
    r0 = pxsim_Array__mk();
    s.tmp_3 = r0;
    r0 = pxsim_Array__push(s.tmp_3, 97);
    r0 = pxsim_Array__push(s.tmp_3, 96);
    r0 = pxsim_Array__push(s.tmp_3, 93);
    r0 = pxsim_Array__push(s.tmp_3, 87);
    r0 = pxsim_Array__push(s.tmp_3, 80);
    r0 = pxsim_Array__push(s.tmp_3, 76);
    r0 = pxsim_Array__push(s.tmp_3, 77);
    r0 = pxsim_Array__push(s.tmp_3, 76);
    r0 = pxsim_Array__push(s.tmp_3, 80);
    r0 = pxsim_Array__push(s.tmp_3, 90);
    r0 = pxsim_Array__push(s.tmp_3, 95);
    r0 = pxsim_Array__push(s.tmp_3, 95);
    r0 = pxsim_Array__push(s.tmp_3, 95);
    r0 = pxsim_Array__push(s.tmp_3, 94);
    r0 = pxsim_Array__push(s.tmp_3, 93);
    r0 = pxsim_Array__push(s.tmp_3, 93);
    r0 = pxsim_Array__push(s.tmp_3, 95);
    r0 = pxsim_Array__push(s.tmp_3, 95);
    r0 = pxsim_Array__push(s.tmp_3, 96);
    r0 = pxsim_Array__push(s.tmp_3, 95);
    r0 = pxsim_Array__push(s.tmp_3, 92);
    r0 = pxsim_Array__push(s.tmp_3, 90);
    r0 = pxsim_Array__push(s.tmp_3, 87);
    r0 = pxsim_Array__push(s.tmp_3, 83);
    r0 = pxsim_Array__push(s.tmp_3, 79);
    r0 = pxsim_Array__push(s.tmp_3, 75);
    r0 = pxsim_Array__push(s.tmp_3, 74);
    r0 = pxsim_Array__push(s.tmp_3, 75);
    r0 = pxsim_Array__push(s.tmp_3, 79);
    r0 = pxsim_Array__push(s.tmp_3, 82);
    r0 = pxsim_Array__push(s.tmp_3, 83);
    r0 = pxsim_Array__push(s.tmp_3, 83);
    r0 = pxsim_Array__push(s.tmp_3, 84);
    r0 = pxsim_Array__push(s.tmp_3, 87);
    r0 = pxsim_Array__push(s.tmp_3, 92);
    r0 = pxsim_Array__push(s.tmp_3, 98);
    r0 = pxsim_Array__push(s.tmp_3, 100);
    r0 = pxsim_Array__push(s.tmp_3, 100);
    r0 = pxsim_Array__push(s.tmp_3, 108);
    r0 = pxsim_Array__push(s.tmp_3, 116);
    r0 = pxsim_Array__push(s.tmp_3, 120);
    r0 = pxsim_Array__push(s.tmp_3, 123);
    r0 = pxsim_Array__push(s.tmp_3, 124);
    r0 = pxsim_Array__push(s.tmp_3, 124);
    r0 = pxsim_Array__push(s.tmp_3, 123);
    r0 = pxsim_Array__push(s.tmp_3, 124);
    r0 = pxsim_Array__push(s.tmp_3, 124);
    r0 = pxsim_Array__push(s.tmp_3, 124);
    r0 = pxsim_Array__push(s.tmp_3, 123);
    r0 = pxsim_Array__push(s.tmp_3, 124);
    r0 = pxsim_Array__push(s.tmp_3, 124);
    r0 = pxsim_Array__push(s.tmp_3, 124);
    r0 = pxsim_Array__push(s.tmp_3, 123);
    r0 = pxsim_Array__push(s.tmp_3, 123);
    r0 = pxsim_Array__push(s.tmp_3, 124);
    r0 = pxsim_Array__push(s.tmp_3, 124);
    r0 = pxsim_Array__push(s.tmp_3, 124);
    r0 = pxsim_Array__push(s.tmp_3, 124);
    r0 = pxsim_Array__push(s.tmp_3, 124);
    r0 = pxsim_Array__push(s.tmp_3, 124);
    r0 = pxsim_Array__push(s.tmp_3, 123);
    r0 = pxsim_Array__push(s.tmp_3, 124);
    r0 = pxsim_Array__push(s.tmp_3, 124);
    r0 = pxsim_Array__push(s.tmp_3, 123);
    r0 = pxsim_Array__push(s.tmp_3, 123);
    r0 = pxsim_Array__push(s.tmp_3, 124);
    r0 = pxsim_Array__push(s.tmp_3, 123);
    r0 = pxsim_Array__push(s.tmp_3, 124);
    r0 = pxsim_Array__push(s.tmp_3, 123);
    r0 = pxsim_Array__push(s.tmp_3, 124);
    r0 = pxsim_Array__push(s.tmp_3, 124);
    r0 = pxsim_Array__push(s.tmp_3, 124);
    r0 = pxsim_Array__push(s.tmp_3, 123);
    r0 = pxsim_Array__push(s.tmp_3, 123);
    r0 = pxsim_Array__push(s.tmp_3, 123);
    r0 = pxsim_Array__push(s.tmp_3, 123);
    r0 = pxsim_Array__push(s.tmp_3, 123);
    r0 = pxsim_Array__push(s.tmp_3, 123);
    r0 = pxsim_Array__push(s.tmp_3, 124);
    r0 = pxsim_Array__push(s.tmp_3, 124);
    r0 = pxsim_Array__push(s.tmp_3, 124);
    r0 = pxsim_Array__push(s.tmp_3, 124);
    r0 = pxsim_Array__push(s.tmp_3, 122);
    r0 = pxsim_Array__push(s.tmp_3, 119);
    r0 = pxsim_Array__push(s.tmp_3, 118);
    r0 = pxsim_Array__push(s.tmp_3, 115);
    r0 = pxsim_Array__push(s.tmp_3, 114);
    r0 = pxsim_Array__push(s.tmp_3, 112);
    r0 = pxsim_Array__push(s.tmp_3, 109);
    r0 = pxsim_Array__push(s.tmp_3, 106);
    r0 = pxsim_Array__push(s.tmp_3, 102);
    r0 = pxsim_Array__push(s.tmp_3, 97);
    r0 = pxsim_Array__push(s.tmp_3, 93);
    r0 = pxsim_Array__push(s.tmp_3, 89);
    r0 = pxsim_Array__push(s.tmp_3, 84);
    r0 = pxsim_Array__push(s.tmp_3, 80);
    r0 = pxsim_Array__push(s.tmp_3, 79);
    r0 = pxsim_Array__push(s.tmp_3, 79);
    r0 = pxsim_Array__push(s.tmp_3, 75);
    r0 = pxsim_Array__push(s.tmp_3, 73);
    r0 = pxsim_Array__push(s.tmp_3, 69);
    r0 = pxsim_Array__push(s.tmp_3, 65);
    r0 = pxsim_Array__push(s.tmp_3, 59);
    r0 = pxsim_Array__push(s.tmp_3, 55);
    r0 = pxsim_Array__push(s.tmp_3, 54);
    r0 = pxsim_Array__push(s.tmp_3, 53);
    r0 = pxsim_Array__push(s.tmp_3, 54);
    r0 = pxsim_Array__push(s.tmp_3, 57);
    r0 = pxsim_Array__push(s.tmp_3, 55);
    r0 = pxsim_Array__push(s.tmp_3, 53);
    r0 = pxsim_Array__push(s.tmp_3, 53);
    r0 = pxsim_Array__push(s.tmp_3, 54);
    r0 = pxsim_Array__push(s.tmp_3, 53);
    r0 = pxsim_Array__push(s.tmp_3, 52);
    r0 = pxsim_Array__push(s.tmp_3, 57);
    r0 = pxsim_Array__push(s.tmp_3, 64);
    r0 = pxsim_Array__push(s.tmp_3, 70);
    r0 = pxsim_Array__push(s.tmp_3, 73);
    r0 = pxsim_Array__push(s.tmp_3, 78);
    r0 = pxsim_Array__push(s.tmp_3, 81);
    r0 = pxsim_Array__push(s.tmp_3, 84);
    r0 = pxsim_Array__push(s.tmp_3, 88);
    r0 = pxsim_Array__push(s.tmp_3, 91);
    r0 = pxsim_Array__push(s.tmp_3, 93);
    r0 = pxsim_Array__push(s.tmp_3, 93);
    r0 = pxsim_Array__push(s.tmp_3, 93);
    r0 = pxsim_Array__push(s.tmp_3, 93);
    r0 = pxsim_Array__push(s.tmp_3, 95);
    r0 = pxsim_Array__push(s.tmp_3, 97);
    r0 = pxsim_Array__push(s.tmp_3, 98);
    r0 = pxsim_Array__push(s.tmp_3, 99);
    r0 = pxsim_Array__push(s.tmp_3, 98);
    r0 = pxsim_Array__push(s.tmp_3, 97);
    r0 = pxsim_Array__push(s.tmp_3, 97);
    r0 = pxsim_Array__push(s.tmp_3, 97);
    r0 = pxsim_Array__push(s.tmp_3, 97);
    r0 = pxsim_Array__push(s.tmp_3, 95);
    r0 = pxsim_Array__push(s.tmp_3, 94);
    r0 = pxsim_Array__push(s.tmp_3, 98);
    r0 = pxsim_Array__push(s.tmp_3, 100);
    r0 = pxsim_Array__push(s.tmp_3, 99);
    r0 = pxsim_Array__push(s.tmp_3, 95);
    r0 = pxsim_Array__push(s.tmp_3, 91);
    r0 = pxsim_Array__push(s.tmp_3, 84);
    r0 = pxsim_Array__push(s.tmp_3, 80);
    r0 = pxsim_Array__push(s.tmp_3, 80);
    r0 = pxsim_Array__push(s.tmp_3, 79);
    r0 = pxsim_Array__push(s.tmp_3, 79);
    r0 = pxsim_Array__push(s.tmp_3, 79);
    r0 = pxsim_Array__push(s.tmp_3, 79);
    r0 = pxsim_Array__push(s.tmp_3, 79);
    r0 = pxsim_Array__push(s.tmp_3, 80);
    r0 = pxsim_Array__push(s.tmp_3, 79);
    r0 = pxsim_Array__push(s.tmp_3, 74);
    r0 = pxsim_Array__push(s.tmp_3, 66);
    r0 = pxsim_Array__push(s.tmp_3, 56);
    r0 = pxsim_Array__push(s.tmp_3, 50);
    r0 = pxsim_Array__push(s.tmp_3, 46);
    r0 = pxsim_Array__push(s.tmp_3, 42);
    r0 = pxsim_Array__push(s.tmp_3, 38);
    r0 = pxsim_Array__push(s.tmp_3, 34);
    r0 = pxsim_Array__push(s.tmp_3, 29);
    r0 = pxsim_Array__push(s.tmp_3, 30);
    r0 = pxsim_Array__push(s.tmp_3, 34);
    r0 = pxsim_Array__push(s.tmp_3, 35);
    r0 = pxsim_Array__push(s.tmp_3, 36);
    r0 = pxsim_Array__push(s.tmp_3, 32);
    r0 = pxsim_Array__push(s.tmp_3, 27);
    r0 = pxsim_Array__push(s.tmp_3, 27);
    r0 = pxsim_Array__push(s.tmp_3, 29);
    r0 = pxsim_Array__push(s.tmp_3, 29);
    r0 = pxsim_Array__push(s.tmp_3, 29);
    r0 = pxsim_Array__push(s.tmp_3, 30);
    r0 = pxsim_Array__push(s.tmp_3, 29);
    r0 = pxsim_Array__push(s.tmp_3, 28);
    r0 = pxsim_Array__push(s.tmp_3, 27);
    r0 = pxsim_Array__push(s.tmp_3, 27);
    r0 = pxsim_Array__push(s.tmp_3, 27);
    r0 = pxsim_Array__push(s.tmp_3, 28);
    r0 = pxsim_Array__push(s.tmp_3, 31);
    r0 = pxsim_Array__push(s.tmp_3, 35);
    r0 = pxsim_Array__push(s.tmp_3, 37);
    r0 = pxsim_Array__push(s.tmp_3, 36);
    r0 = pxsim_Array__push(s.tmp_3, 32);
    r0 = pxsim_Array__push(s.tmp_3, 28);
    r0 = pxsim_Array__push(s.tmp_3, 28);
    r0 = pxsim_Array__push(s.tmp_3, 31);
    r0 = pxsim_Array__push(s.tmp_3, 33);
    r0 = pxsim_Array__push(s.tmp_3, 35);
    r0 = pxsim_Array__push(s.tmp_3, 35);
    r0 = pxsim_Array__push(s.tmp_3, 34);
    r0 = pxsim_Array__push(s.tmp_3, 34);
    r0 = pxsim_Array__push(s.tmp_3, 31);
    r0 = pxsim_Array__push(s.tmp_3, 27);
    r0 = pxsim_Array__push(s.tmp_3, 27);
    r0 = pxsim_Array__push(s.tmp_3, 27);
    r0 = pxsim_Array__push(s.tmp_3, 25);
    r0 = pxsim_Array__push(s.tmp_3, 25);
    r0 = pxsim_Array__push(s.tmp_3, 28);
    r0 = pxsim_Array__push(s.tmp_3, 28);
    r0 = pxsim_Array__push(s.tmp_3, 28);
    r0 = pxsim_Array__push(s.tmp_3, 28);
    r0 = pxsim_Array__push(s.tmp_3, 29);
    r0 = pxsim_Array__push(s.tmp_3, 29);
    r0 = pxsim_Array__push(s.tmp_3, 29);
    r0 = pxsim_Array__push(s.tmp_3, 29);
    r0 = pxsim_Array__push(s.tmp_3, 28);
    r0 = pxsim_Array__push(s.tmp_3, 28);
    r0 = pxsim_Array__push(s.tmp_3, 29);
    r0 = pxsim_Array__push(s.tmp_3, 29);
    r0 = pxsim_Array__push(s.tmp_3, 31);
    r0 = pxsim_Array__push(s.tmp_3, 35);
    r0 = pxsim_Array__push(s.tmp_3, 36);
    r0 = pxsim_Array__push(s.tmp_3, 34);
    r0 = pxsim_Array__push(s.tmp_3, 31);
    r0 = pxsim_Array__push(s.tmp_3, 29);
    r0 = pxsim_Array__push(s.tmp_3, 26);
    r0 = pxsim_Array__push(s.tmp_3, 23);
    r0 = pxsim_Array__push(s.tmp_3, 17);
    r0 = pxsim_Array__push(s.tmp_3, 16);
    r0 = pxsim_Array__push(s.tmp_3, 21);
    r0 = pxsim_Array__push(s.tmp_3, 27);
    r0 = pxsim_Array__push(s.tmp_3, 33);
    r0 = pxsim_Array__push(s.tmp_3, 40);
    r0 = pxsim_Array__push(s.tmp_3, 45);
    r0 = pxsim_Array__push(s.tmp_3, 50);
    r0 = pxsim_Array__push(s.tmp_3, 53);
    r0 = pxsim_Array__push(s.tmp_3, 54);
    r0 = pxsim_Array__push(s.tmp_3, 57);
    r0 = pxsim_Array__push(s.tmp_3, 57);
    r0 = pxsim_Array__push(s.tmp_3, 53);
    r0 = pxsim_Array__push(s.tmp_3, 53);
    r0 = pxsim_Array__push(s.tmp_3, 53);
    r0 = pxsim_Array__push(s.tmp_3, 54);
    r0 = pxsim_Array__push(s.tmp_3, 55);
    r0 = pxsim_Array__push(s.tmp_3, 57);
    r0 = pxsim_Array__push(s.tmp_3, 58);
    r0 = pxsim_Array__push(s.tmp_3, 61);
    r0 = pxsim_Array__push(s.tmp_3, 65);
    r0 = pxsim_Array__push(s.tmp_3, 68);
    r0 = pxsim_Array__push(s.tmp_3, 69);
    r0 = pxsim_Array__push(s.tmp_3, 69);
    r0 = pxsim_Array__push(s.tmp_3, 69);
    r0 = pxsim_Array__push(s.tmp_3, 69);
    r0 = pxsim_Array__push(s.tmp_3, 72);
    r0 = pxsim_Array__push(s.tmp_3, 76);
    r0 = pxsim_Array__push(s.tmp_3, 79);
    r0 = pxsim_Array__push(s.tmp_3, 84);
    r0 = pxsim_Array__push(s.tmp_3, 87);
    r0 = pxsim_Array__push(s.tmp_3, 91);
    r0 = pxsim_Array__push(s.tmp_3, 94);
    r0 = pxsim_Array__push(s.tmp_3, 97);
    r0 = pxsim_Array__push(s.tmp_3, 98);
    r0 = pxsim_Array__push(s.tmp_3, 98);
    r0 = pxsim_Array__push(s.tmp_3, 98);
    r0 = pxsim_Array__push(s.tmp_3, 97);
    s.tmp_4 = Buffer_fromArray__P210_mk(s);
    s.tmp_4.arg0 = s.tmp_3;
    s.callLocIdx = 18; s.pc = 10; return s.tmp_4;
  case 10:
    r0 = s.retval;
    s.big___8194 = (r0);
    r0 = (s.i___8188 + 1);
    s.i___8188 = (r0);
    { step = 4; continue; }
  case 5:
    s.tmp_0 = r0 = s.b1___8156;
    r0 = pxsim.control.millis();
    s.tmp_2 = r0;
    r0 = (s.tmp_2 - s.startTime___8158);
    s.tmp_1 = r0;
    r0 = (s.tmp_0 + s.tmp_1);
    s.b1___8156 = (r0);
    r0 = pxsim.control.millis();
    s.startTime___8158 = (r0);
    s.i___8209 = (0);
  case 6:
    s.tmp_1 = r0 = s.i___8209;
    r0 = (globals.num___8136 / 5);
    s.tmp_2 = r0;
    r0 = (s.tmp_1 < s.tmp_2);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 7; continue; }
    s.tmp_3 = Buffer_fromHex__P206_mk(s);
    s.tmp_3.arg0 = "61605d57504c4d4c505a5f5f5f5e5d5d5f5f605f5c5a57534f4b4a4b4f52535354575c6264646c74787b7c7c7b7c7c7c7b7c7c7c7b7b7c7c7c7c7c7c7b7c7c7b7b7c7b7c7b7c7c7c7b7b7b7b7b7b7c7c7c7c7a77767372706d6a66615d5954504f4f4b4945413b3736353639373535363534394046494e5154585b5d5d5d5d5f61626362616161615f5e6264635f5b5450504f4f4f4f4f504f4a4238322e2a26221d1e222324201b1b1d1d1d1e1d1c1b1b1b1c1f232524201c1c1f21232322221f1b1b1b19191c1c1c1c1d1d1d1d1c1c1d1d1f2324221f1d1a171110151b21282d32353639393535353637393a3d414445454545484c4f54575b5e6162626261";
    s.callLocIdx = 19; s.pc = 11; return s.tmp_3;
  case 11:
    r0 = s.retval;
    s.big___8215 = (r0);
    r0 = (s.i___8209 + 1);
    s.i___8209 = (r0);
    { step = 6; continue; }
  case 7:
    s.tmp_0 = r0 = s.b2___8157;
    r0 = pxsim.control.millis();
    s.tmp_2 = r0;
    r0 = (s.tmp_2 - s.startTime___8158);
    s.tmp_1 = r0;
    r0 = (s.tmp_0 + s.tmp_1);
    s.b2___8157 = (r0);
    r0 = (s.c___8161 + 1);
    s.c___8161 = (r0);
    { step = 1; continue; }
  case 8:
    s.tmp_0 = console_logValue__P381_mk(s);
    s.tmp_0.arg0 = "array create";
    s.tmp_0.arg1 = s.b0___8155;
    s.callLocIdx = 20; s.pc = 12; return s.tmp_0;
  case 12:
    r0 = s.retval;
    s.tmp_0 = console_logValue__P381_mk(s);
    s.tmp_0.arg0 = "array buffer create";
    s.tmp_0.arg1 = s.b1___8156;
    s.callLocIdx = 21; s.pc = 13; return s.tmp_0;
  case 13:
    r0 = s.retval;
    s.tmp_0 = console_logValue__P381_mk(s);
    s.tmp_0.arg0 = "hex buffer create";
    s.tmp_0.arg1 = s.b2___8157;
    s.callLocIdx = 22; s.pc = 14; return s.tmp_0;
  case 14:
    r0 = s.retval;
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
testBuffersCreate__P8150.info = {"start":1374,"length":3557,"line":14,"column":0,"endLine":43,"endColumn":1,"fileName":"main.ts","functionName":"testBuffersCreate","argumentNames":[]}

function testBuffersCreate__P8150_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: testBuffersCreate__P8150, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  tmp_4: undefined,
  b0___8155: undefined,
  b1___8156: undefined,
  b2___8157: undefined,
  startTime___8158: undefined,
  c___8161: undefined,
  i___8168: undefined,
  big___8174: undefined,
  i___8188: undefined,
  big___8194: undefined,
  i___8209: undefined,
  big___8215: undefined,
} }





function Buffer_fromHex__P206(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.hexStr___5572 = undefined;
    s.res___5574 = undefined;
    s.i___5583 = undefined;
    s.p0___5589 = undefined;
    s.p1___5598 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    s.hexStr___5572 = ("0123456789abcdef");
    r0 = pxsim_String_.length(s.arg0);
    s.tmp_1 = r0;
    r0 = (s.tmp_1 >> 1);
    s.tmp_0 = r0;
    r0 = pxsim.control.createBuffer(s.tmp_0);
    s.res___5574 = (r0);
    s.tmp_0 = helpers_stringToLowerCase__P121_mk(s);
    s.tmp_0.arg0 = s.arg0;
    s.callLocIdx = 20; s.pc = 7; return s.tmp_0;
  case 7:
    r0 = s.retval;
    s.arg0 = (r0);
    s.i___5583 = (0);
  case 1:
    s.tmp_1 = r0 = s.i___5583;
    r0 = pxsim_String_.length(s.arg0);
    s.tmp_2 = r0;
    r0 = (s.tmp_1 < s.tmp_2);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 6; continue; }
    s.tmp_3 = r0 = s.hexStr___5572;
    r0 = pxsim_String_.charAt(s.arg0, s.i___5583);
    s.tmp_4 = r0;
    r0 = pxsim_String_.indexOf(s.tmp_3, s.tmp_4, undefined);
    s.p0___5589 = (r0);
    s.tmp_0 = r0 = s.hexStr___5572;
    s.tmp_2 = r0 = s.arg0;
    r0 = (s.i___5583 + 1);
    s.tmp_3 = r0;
    r0 = pxsim_String_.charAt(s.tmp_2, s.tmp_3);
    s.tmp_1 = r0;
    r0 = pxsim_String_.indexOf(s.tmp_0, s.tmp_1, undefined);
    s.p1___5598 = (r0);
    r0 = (s.p0___5589 < 0);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBool(s.tmp_0);
    if (!r0) { step = 2; continue; }
    r0 = s.tmp_0;
    { step = 3; continue; }
  case 2:
    r0 = (s.p1___5598 < 0);
  case 3:
    // jmp value (already in r0)
    s.tmp_1 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_1);
    if (!r0) { step = 4; continue; }
    r0 = pxsim_pxtcore.throwValue("Invalid hex");
  case 4:
  case 5:
    s.tmp_2 = r0 = s.res___5574;
    r0 = (s.i___5583 >> 1);
    s.tmp_3 = r0;
    r0 = (s.p0___5589 << 4);
    s.tmp_5 = r0;
    r0 = (s.tmp_5 | s.p1___5598);
    s.tmp_4 = r0;
    r0 = pxsim.BufferMethods.setByte(s.tmp_2, s.tmp_3, s.tmp_4);
    r0 = (s.i___5583 + 2);
    s.i___5583 = (r0);
    { step = 1; continue; }
  case 6:
    r0 = s.res___5574;
    return leave(s, r0)
  default: oops()
} } }
Buffer_fromHex__P206.info = {"start":8064,"length":469,"line":285,"column":4,"endLine":297,"endColumn":5,"fileName":"pxt_modules/base/buffer.ts","functionName":"fromHex","argumentNames":["hex"]}

function Buffer_fromHex__P206_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: Buffer_fromHex__P206, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  tmp_4: undefined,
  tmp_5: undefined,
  hexStr___5572: undefined,
  res___5574: undefined,
  i___5583: undefined,
  p0___5589: undefined,
  p1___5598: undefined,
  arg0: undefined,
} }





function helpers_stringToLowerCase__P121(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.r___5629 = undefined;
    s.prev___5630 = undefined;
    s.i___5631 = undefined;
    s.c___5637 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    r0 = pxsim_String_.mkEmpty();
    s.r___5629 = (r0);
    s.prev___5630 = (0);
    s.i___5631 = (0);
  case 1:
    s.tmp_1 = r0 = s.i___5631;
    r0 = pxsim_String_.length(s.arg0);
    s.tmp_2 = r0;
    r0 = (s.tmp_1 < s.tmp_2);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 6; continue; }
    r0 = pxsim_String_.charCodeAt(s.arg0, s.i___5631);
    s.c___5637 = (r0);
    r0 = (65 <= s.c___5637);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBool(s.tmp_0);
    if (r0) { step = 2; continue; }
    r0 = s.tmp_0;
    { step = 3; continue; }
  case 2:
    r0 = (s.c___5637 <= 90);
  case 3:
    // jmp value (already in r0)
    s.tmp_1 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_1);
    if (!r0) { step = 4; continue; }
    if ((s.r___5629) && (s.r___5629).vtable) {
    setupResume(s, 7);
    pxsim_String__stringConv(s.r___5629);
    checkResumeConsumed();
    return;
    } else { s.retval = (s.r___5629) + ""; }
  case 7:
    r0 = s.retval;
    s.tmp_2 = r0;
    s.tmp_7 = helpers_stringSlice__P119_mk(s);
    s.tmp_7.arg0 = s.arg0;
    s.tmp_7.arg1 = s.prev___5630;
    s.tmp_7.arg2 = s.i___5631;
    s.callLocIdx = 5; s.pc = 8; return s.tmp_7;
  case 8:
    r0 = s.retval;
    s.tmp_6 = r0;
    if ((s.tmp_6) && (s.tmp_6).vtable) {
    setupResume(s, 9);
    pxsim_String__stringConv(s.tmp_6);
    checkResumeConsumed();
    return;
    } else { s.retval = (s.tmp_6) + ""; }
  case 9:
    r0 = s.retval;
    s.tmp_5 = r0;
    r0 = (s.c___5637 + 32);
    s.tmp_10 = r0;
    r0 = pxsim_String_.fromCharCode(s.tmp_10);
    s.tmp_9 = r0;
    if ((s.tmp_9) && (s.tmp_9).vtable) {
    setupResume(s, 10);
    pxsim_String__stringConv(s.tmp_9);
    checkResumeConsumed();
    return;
    } else { s.retval = (s.tmp_9) + ""; }
  case 10:
    r0 = s.retval;
    s.tmp_8 = r0;
    r0 = pxsim_String__concat(s.tmp_5, s.tmp_8);
    s.tmp_4 = r0;
    if ((s.tmp_4) && (s.tmp_4).vtable) {
    setupResume(s, 11);
    pxsim_String__stringConv(s.tmp_4);
    checkResumeConsumed();
    return;
    } else { s.retval = (s.tmp_4) + ""; }
  case 11:
    r0 = s.retval;
    s.tmp_3 = r0;
    r0 = pxsim_String__concat(s.tmp_2, s.tmp_3);
    s.r___5629 = (r0);
    r0 = (s.i___5631 + 1);
    s.prev___5630 = (r0);
  case 4:
  case 5:
    r0 = (s.i___5631 + 1);
    s.i___5631 = (r0);
    { step = 1; continue; }
  case 6:
    if ((s.r___5629) && (s.r___5629).vtable) {
    setupResume(s, 12);
    pxsim_String__stringConv(s.r___5629);
    checkResumeConsumed();
    return;
    } else { s.retval = (s.r___5629) + ""; }
  case 12:
    r0 = s.retval;
    s.tmp_0 = r0;
    s.tmp_3 = helpers_stringSlice__P119_mk(s);
    s.tmp_3.arg0 = s.arg0;
    s.tmp_3.arg1 = s.prev___5630;
    s.tmp_3.arg2 = undefined;
    s.callLocIdx = 6; s.pc = 13; return s.tmp_3;
  case 13:
    r0 = s.retval;
    s.tmp_2 = r0;
    if ((s.tmp_2) && (s.tmp_2).vtable) {
    setupResume(s, 14);
    pxsim_String__stringConv(s.tmp_2);
    checkResumeConsumed();
    return;
    } else { s.retval = (s.tmp_2) + ""; }
  case 14:
    r0 = s.retval;
    s.tmp_1 = r0;
    r0 = pxsim_String__concat(s.tmp_0, s.tmp_1);
    s.r___5629 = (r0);
    r0 = s.r___5629;
    return leave(s, r0)
  default: oops()
} } }
helpers_stringToLowerCase__P121.info = {"start":12527,"length":386,"line":420,"column":4,"endLine":432,"endColumn":5,"fileName":"pxt_modules/base/pxt-helpers.ts","functionName":"stringToLowerCase","argumentNames":["s"]}

function helpers_stringToLowerCase__P121_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: helpers_stringToLowerCase__P121, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  tmp_4: undefined,
  tmp_5: undefined,
  tmp_6: undefined,
  tmp_7: undefined,
  tmp_8: undefined,
  tmp_9: undefined,
  tmp_10: undefined,
  r___5629: undefined,
  prev___5630: undefined,
  i___5631: undefined,
  c___5637: undefined,
  arg0: undefined,
} }





function helpers_stringSlice__P119(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.len___5686 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.arg2 = (s.lambdaArgs[2]);
      s.lambdaArgs = null;
    }
    r0 = pxsim_String_.length(s.arg0);
    s.len___5686 = (r0);
    r0 = (s.arg1 < 0);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 1; continue; }
    s.tmp_1 = Math_max__P130_mk(s);
    r0 = (s.len___5686 + s.arg1);
    s.tmp_1.arg0 = r0;
    s.tmp_1.arg1 = 0;
    s.callLocIdx = 4; s.pc = 9; return s.tmp_1;
  case 9:
    r0 = s.retval;
    s.arg1 = (r0);
  case 1:
  case 2:
    r0 = (s.arg2 === undefined);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 3; continue; }
    s.arg2 = (s.len___5686);
    { step = 6; continue; }
  case 3:
    r0 = (s.arg2 === null);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 4; continue; }
    s.arg2 = (0);
  case 4:
  case 5:
  case 6:
    r0 = (s.arg2 < 0);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 7; continue; }
    r0 = (s.len___5686 + s.arg2);
    s.arg2 = (r0);
  case 7:
  case 8:
    s.tmp_0 = r0 = s.arg0;
    s.tmp_1 = r0 = s.arg1;
    r0 = (s.arg2 - s.arg1);
    s.tmp_2 = r0;
    r0 = pxsim_String_.substr(s.tmp_0, s.tmp_1, s.tmp_2);
    return leave(s, r0)
  default: oops()
} } }
helpers_stringSlice__P119.info = {"start":11496,"length":440,"line":384,"column":4,"endLine":402,"endColumn":5,"fileName":"pxt_modules/base/pxt-helpers.ts","functionName":"stringSlice","argumentNames":["s","start","end"]}

function helpers_stringSlice__P119_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: helpers_stringSlice__P119, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  len___5686: undefined,
  arg0: undefined,
  arg1: undefined,
  arg2: undefined,
} }





function console_log__P380(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    s.tmp_0 = console_add__P376_mk(s);
    s.tmp_0.arg0 = 1;
    s.tmp_0.arg1 = s.arg0;
    s.callLocIdx = 30; s.pc = 1; return s.tmp_0;
  case 1:
    r0 = s.retval;
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
console_log__P380.info = {"start":1450,"length":86,"line":58,"column":4,"endLine":60,"endColumn":5,"fileName":"pxt_modules/base/console.ts","functionName":"log","argumentNames":["value"]}

function console_log__P380_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: console_log__P380, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  arg0: undefined,
} }





function console_add__P376(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.text___5748 = undefined;
    s.i___5757 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.lambdaArgs = null;
    }
    r0 = (s.arg0 < globals.minPriority___375);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 1; continue; }
    { step = 5; continue; }
  case 1:
  case 2:
    s.tmp_1 = console_inspect__P382_mk(s);
    s.tmp_1.arg0 = s.arg1;
    s.tmp_1.arg1 = 20;
    s.callLocIdx = 28; s.pc = 6; return s.tmp_1;
  case 6:
    r0 = s.retval;
    s.text___5748 = (r0);
    if ((s.text___5748) && (s.text___5748).vtable) {
    setupResume(s, 7);
    pxsim_String__stringConv(s.text___5748);
    checkResumeConsumed();
    return;
    } else { s.retval = (s.text___5748) + ""; }
  case 7:
    r0 = s.retval;
    s.tmp_0 = r0;
    r0 = pxsim_String__concat(s.tmp_0, "\n");
    s.text___5748 = (r0);
    s.i___5757 = (0);
  case 3:
    s.tmp_1 = r0 = s.i___5757;
    r0 = pxsim_Array__length(globals.listeners___3097);
    s.tmp_2 = r0;
    r0 = (s.tmp_1 < s.tmp_2);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 4; continue; }
    s.tmp_3 = lambda_3_mk(s);
    r0 = pxsim_Array__getAt(globals.listeners___3097, s.i___5757);
    s.tmp_3.argL = r0;
    s.tmp_3.arg0 = s.arg0;
    s.tmp_3.arg1 = s.text___5748;
    setupLambda(s.tmp_3, s.tmp_3.argL);
    s.callLocIdx = 29; s.pc = 8; return s.tmp_3;
  case 8:
    r0 = s.retval;
    r0 = (s.i___5757 + 1);
    s.i___5757 = (r0);
    { step = 3; continue; }
  case 4:
  case 5:
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
console_add__P376.info = {"start":632,"length":317,"line":28,"column":4,"endLine":36,"endColumn":5,"fileName":"pxt_modules/base/console.ts","functionName":"add","argumentNames":["priority","message"]}

function console_add__P376_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: console_add__P376, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  text___5748: undefined,
  i___5757: undefined,
  arg0: undefined,
  arg1: undefined,
} }





function listeners_inline__P3096(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.lambdaArgs = null;
    }
    r0 = pxsim.control.__log(s.arg0, s.arg1);
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
listeners_inline__P3096.info = {"start":534,"length":85,"line":25,"column":8,"endLine":25,"endColumn":93,"fileName":"pxt_modules/base/console.ts","functionName":"inline","argumentNames":["priority","text"]}

function listeners_inline__P3096_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: listeners_inline__P3096, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  arg0: undefined,
  arg1: undefined,
} }





function game_onPaint__P1790(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    r0 = pxsim_numops_toBoolDecr(s.arg0);
    s.tmp_1 = r0;
    r0 = pxsim_Boolean__bang(s.tmp_1);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 1; continue; }
    { step = 3; continue; }
  case 1:
  case 2:
    s.tmp_2 = control_EventContext_registerFrameHandler__P403_mk(s);
    s.tmp_3 = control_eventContext__P408_mk(s);
    s.callLocIdx = 91; s.pc = 5; return s.tmp_3;
  case 5:
    r0 = s.retval;
    s.tmp_2.arg0 = r0;
    s.tmp_2.arg1 = 89;
    s.tmp_2.arg2 = s.arg0;
    s.callLocIdx = 92; s.pc = 4; return s.tmp_2;
  case 4:
    r0 = s.retval;
  case 3:
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
game_onPaint__P1790.info = {"start":1753,"length":167,"line":74,"column":4,"endLine":77,"endColumn":5,"fileName":"pxt_modules/game---light/compat.ts","functionName":"onPaint","argumentNames":["a"]}

function game_onPaint__P1790_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: game_onPaint__P1790, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  arg0: undefined,
} }





function control_eventContext__P408(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    r0 = pxsim_numops_toBoolDecr(globals.eventContexts___3119);
    if (!r0) { step = 1; continue; }
    s.tmp_0 = r0 = globals.eventContexts___3119;
    r0 = pxsim_Array__length(globals.eventContexts___3119);
    s.tmp_2 = r0;
    r0 = (s.tmp_2 - 1);
    s.tmp_1 = r0;
    r0 = pxsim_Array__getAt(s.tmp_0, s.tmp_1);
    { step = 2; continue; }
  case 1:
    r0 = undefined;
  case 2:
    // jmp value (already in r0)
    s.tmp_3 = r0;
    r0 = s.tmp_3;
    return leave(s, r0)
  default: oops()
} } }
control_eventContext__P408.info = {"start":7094,"length":136,"line":213,"column":4,"endLine":215,"endColumn":5,"fileName":"pxt_modules/base/eventcontext.ts","functionName":"eventContext","argumentNames":[]}

function control_eventContext__P408_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: control_eventContext__P408, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
} }





function control_EventContext_registerFrameHandler__P403(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.fn___5804 = undefined;
    s.i___5813 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.arg2 = (s.lambdaArgs[2]);
      s.lambdaArgs = null;
    }
    r0 = s.arg0;
    if (!checkSubtype(r0, control_EventContext__C395_VT)) failedCast(r0);
    r0 = s.arg0.fields["frameCallbacks"];
    s.tmp_2 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_2);
    s.tmp_1 = r0;
    r0 = pxsim_Boolean__bang(s.tmp_1);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 1; continue; }
    s.tmp_3 = r0 = s.arg0;
    r0 = pxsim_Array__mk();
    s.tmp_4 = r0;
    r0 = (s.tmp_3).fields["frameCallbacks"] = (s.tmp_4);
    s.tmp_0 = control_EventContext_registerFrameCallbacks__P3117_mk(s);
    s.tmp_0.arg0 = s.arg0;
    s.callLocIdx = 49; s.pc = 8; return s.tmp_0;
  case 8:
    r0 = s.retval;
  case 1:
  case 2:
    r0 = pxsim_pxtcore_mkClassInstance(control_FrameCallback__C392_VT);
    s.fn___5804 = (r0);
    r0 = (s.fn___5804).fields["order"] = (s.arg1);
    r0 = (s.fn___5804).fields["handler"] = (s.arg2);
    s.i___5813 = (0);
  case 3:
    s.tmp_1 = r0 = s.i___5813;
    r0 = s.arg0.fields["frameCallbacks"];
    s.tmp_3 = r0;
    r0 = pxsim_Array__length(s.tmp_3);
    s.tmp_2 = r0;
    r0 = (s.tmp_1 < s.tmp_2);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 6; continue; }
    r0 = s.arg0.fields["frameCallbacks"];
    s.tmp_6 = r0;
    r0 = pxsim_Array__getAt(s.tmp_6, s.i___5813);
    r0 = r0.fields["order"];
    s.tmp_5 = r0;
    r0 = (s.tmp_5 > s.arg1);
    s.tmp_4 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_4);
    if (!r0) { step = 4; continue; }
    r0 = s.arg0.fields["frameCallbacks"];
    s.tmp_7 = r0;
    r0 = pxsim_Array_.insertAt(s.tmp_7, s.i___5813, s.fn___5804);
    r0 = s.fn___5804;
    { step = 7; continue; }
  case 4:
  case 5:
    r0 = (s.i___5813 + 1);
    s.i___5813 = (r0);
    { step = 3; continue; }
  case 6:
    r0 = s.arg0.fields["frameCallbacks"];
    s.tmp_0 = r0;
    r0 = pxsim_Array__push(s.tmp_0, s.fn___5804);
    r0 = s.fn___5804;
  case 7:
    return leave(s, r0)
  default: oops()
} } }
control_EventContext_registerFrameHandler__P403.info = {"start":4862,"length":643,"line":147,"column":8,"endLine":164,"endColumn":9,"fileName":"pxt_modules/base/eventcontext.ts","functionName":"registerFrameHandler","argumentNames":["this","order","handler"]}

function control_EventContext_registerFrameHandler__P403_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: control_EventContext_registerFrameHandler__P403, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  tmp_4: undefined,
  tmp_5: undefined,
  tmp_6: undefined,
  tmp_7: undefined,
  fn___5804: undefined,
  i___5813: undefined,
  arg0: undefined,
  arg1: undefined,
  arg2: undefined,
} }





function control_EventContext_registerFrameCallbacks__P3117(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.worker___5847 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    r0 = s.arg0;
    if (!checkSubtype(r0, control_EventContext__C395_VT)) failedCast(r0);
    r0 = s.arg0.fields["frameCallbacks"];
    s.tmp_2 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_2);
    s.tmp_1 = r0;
    r0 = pxsim_Boolean__bang(s.tmp_1);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 1; continue; }
    { step = 3; continue; }
  case 1:
  case 2:
    r0 = s.arg0.fields["frameWorker"];
    s.worker___5847 = (r0);
    r0 = pxsim_pxtcore_mkAction(2, control_EventContext_registerFrameCallbacks_inline__P5853);
    s.tmp_0 = r0;
    r0 = pxsim_pxtrt_stclo(s.tmp_0, 0, s.arg0);
    r0 = pxsim_pxtrt_stclo(s.tmp_0, 1, s.worker___5847);
    r0 = pxsim.control.runInParallel(s.tmp_0);
  case 3:
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
control_EventContext_registerFrameCallbacks__P3117.info = {"start":3668,"length":895,"line":109,"column":8,"endLine":133,"endColumn":9,"fileName":"pxt_modules/base/eventcontext.ts","functionName":"registerFrameCallbacks","argumentNames":["this"]}

function control_EventContext_registerFrameCallbacks__P3117_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: control_EventContext_registerFrameCallbacks__P3117, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  worker___5847: undefined,
  arg0: undefined,
} }





function control_EventContext_registerFrameCallbacks_inline__P5853(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.delay___5883 = undefined;
    r0 = s.caps[0].fields["runningCallbacks"];
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 1; continue; }
    r0 = pxsim_pxtcore_mkAction(1, control_EventContext_registerFrameCallbacks_inline__P5859);
    s.tmp_1 = r0;
    r0 = pxsim_pxtrt_stclo(s.tmp_1, 0, s.caps[0]);
    s.tmp_2 = pauseUntil__P367_mk(s);
    s.tmp_2.arg0 = s.tmp_1;
    s.tmp_2.arg1 = undefined;
    s.callLocIdx = 45; s.pc = 5; return s.tmp_2;
  case 5:
    r0 = s.retval;
  case 1:
  case 2:
    r0 = (s.caps[0]).fields["runningCallbacks"] = (true);
    r0 = (s.caps[0]).fields["framesInSample"] = (0);
    r0 = (s.caps[0]).fields["timeInSample"] = (0);
    r0 = (s.caps[0]).fields["deltaTimeMillis"] = (0);
    s.tmp_0 = r0 = s.caps[0];
    r0 = pxsim.control.millis();
    s.tmp_1 = r0;
    r0 = (s.tmp_0).fields["prevTimeMillis"] = (s.tmp_1);
  case 3:
    r0 = s.caps[0].fields["frameWorker"];
    s.tmp_1 = r0;
    r0 = (s.caps[1] == s.tmp_1);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 4; continue; }
    s.tmp_2 = control_EventContext_runCallbacks__P3116_mk(s);
    s.tmp_2.arg0 = s.caps[0];
    s.callLocIdx = 46; s.pc = 6; return s.tmp_2;
  case 6:
    r0 = s.retval;
    s.delay___5883 = (r0);
    s.tmp_0 = pause__P413_mk(s);
    s.tmp_0.arg0 = s.delay___5883;
    s.callLocIdx = 47; s.pc = 7; return s.tmp_0;
  case 7:
    r0 = s.retval;
    { step = 3; continue; }
  case 4:
    r0 = (s.caps[0]).fields["runningCallbacks"] = (false);
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
control_EventContext_registerFrameCallbacks_inline__P5853.info = {"start":3829,"length":723,"line":113,"column":34,"endLine":132,"endColumn":13,"fileName":"pxt_modules/base/eventcontext.ts","functionName":"inline","argumentNames":[]}

function control_EventContext_registerFrameCallbacks_inline__P5853_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: control_EventContext_registerFrameCallbacks_inline__P5853, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  delay___5883: undefined,
} }





function control_EventContext_registerFrameCallbacks_inline__P5859(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    r0 = s.caps[0].fields["runningCallbacks"];
    s.tmp_1 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_1);
    s.tmp_0 = r0;
    r0 = pxsim_Boolean__bang(s.tmp_0);
    return leave(s, r0)
  default: oops()
} } }
control_EventContext_registerFrameCallbacks_inline__P5859.info = {"start":4060,"length":28,"line":117,"column":31,"endLine":117,"endColumn":59,"fileName":"pxt_modules/base/eventcontext.ts","functionName":"inline","argumentNames":[]}

function control_EventContext_registerFrameCallbacks_inline__P5859_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: control_EventContext_registerFrameCallbacks_inline__P5859, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
} }





function control_EventContext_runCallbacks__P3116(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.loopStart___5892 = undefined;
    s.f___5905 = undefined;
    s.unnamed14___U2 = undefined;
    s.unnamed15___U3 = undefined;
    s.now___5910 = undefined;
    s.runtime___5913 = undefined;
    s.realTimeInSample___5932 = undefined;
    s.fps___5941 = undefined;
    s.delay___6010 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    r0 = s.arg0;
    if (!checkSubtype(r0, control_EventContext__C395_VT)) failedCast(r0);
    r0 = pxsim.control.millis();
    s.loopStart___5892 = (r0);
    s.tmp_0 = r0 = s.arg0;
    r0 = s.arg0.fields["prevTimeMillis"];
    s.tmp_2 = r0;
    r0 = (s.loopStart___5892 - s.tmp_2);
    s.tmp_1 = r0;
    r0 = (s.tmp_0).fields["deltaTimeMillis"] = (s.tmp_1);
    r0 = (s.arg0).fields["prevTimeMillis"] = (s.loopStart___5892);
    s.f___5905 = (undefined);
    r0 = s.arg0.fields["frameCallbacks"];
    s.unnamed14___U2 = (r0);
    s.unnamed15___U3 = (0);
  case 1:
    s.tmp_0 = r0 = s.unnamed15___U3;
    r0 = pxsim_Array__length(s.unnamed14___U2);
    s.tmp_1 = r0;
    r0 = (s.tmp_0 < s.tmp_1);
    if (!r0) { step = 2; continue; }
    r0 = pxsim_Array__getAt(s.unnamed14___U2, s.unnamed15___U3);
    s.f___5905 = (r0);
    s.tmp_2 = if_handler_1_mk(s);
    s.tmp_2.arg0 = s.f___5905;
    if (!s.tmp_2.arg0.vtable.iface) {
      setupLambda(s.tmp_2, pxsim_pxtrt.mapGetByString(s.tmp_2.arg0, "handler"), 1);
      s.callLocIdx = 43; s.pc = 11; return s.tmp_2;
    } else {
      s.tmp_2.fn = s.tmp_2.arg0.vtable.iface["handler"];
      if (s.tmp_2.fn == null) { setupLambda(s.tmp_2, s.tmp_2.arg0.fields["handler"], 1); s.callLocIdx = 43; s.pc = 11; return s.tmp_2; }
      else if (s.tmp_2.fn.isGetter) { s.tmp_2.stage2Call = true; s.callLocIdx = 43; s.pc = 11; return s.tmp_2;; }
     else { s.callLocIdx = 43; s.pc = 11; return s.tmp_2; }
    }
  case 11:
    r0 = s.retval;
    r0 = (s.unnamed15___U3 + 1);
    s.unnamed15___U3 = (r0);
    { step = 1; continue; }
  case 2:
    s.unnamed14___U2 = (undefined);
    r0 = pxsim.control.millis();
    s.now___5910 = (r0);
    r0 = (s.now___5910 - s.loopStart___5892);
    s.runtime___5913 = (r0);
    s.tmp_0 = r0 = s.arg0;
    r0 = s.tmp_0.fields["timeInSample"];
    s.tmp_2 = r0;
    r0 = (s.tmp_2 + s.runtime___5913);
    s.tmp_1 = r0;
    r0 = (s.tmp_0).fields["timeInSample"] = (s.tmp_1);
    s.tmp_0 = r0 = s.arg0;
    r0 = s.tmp_0.fields["framesInSample"];
    s.tmp_2 = r0;
    r0 = (s.tmp_2 + 1);
    s.tmp_1 = r0;
    r0 = (s.tmp_0).fields["framesInSample"] = (s.tmp_1);
    r0 = s.arg0.fields["timeInSample"];
    s.tmp_1 = r0;
    r0 = (s.tmp_1 > 1000);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBool(s.tmp_0);
    if (!r0) { step = 3; continue; }
    r0 = s.tmp_0;
    { step = 4; continue; }
  case 3:
    r0 = s.arg0.fields["framesInSample"];
    s.tmp_2 = r0;
    r0 = (s.tmp_2 > 30);
  case 4:
    // jmp value (already in r0)
    s.tmp_3 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_3);
    if (!r0) { step = 9; continue; }
    r0 = s.arg0.fields["lastPerfDump"];
    s.tmp_4 = r0;
    r0 = (s.now___5910 - s.tmp_4);
    s.realTimeInSample___5932 = (r0);
    r0 = (s.arg0).fields["lastPerfDump"] = (s.now___5910);
    r0 = s.arg0.fields["framesInSample"];
    s.tmp_0 = r0;
    r0 = s.arg0.fields["timeInSample"];
    s.tmp_2 = r0;
    r0 = (s.tmp_2 / 1000);
    s.tmp_1 = r0;
    r0 = (s.tmp_0 / s.tmp_1);
    s.fps___5941 = (r0);
    r0 = pxsim.Math_.round(s.fps___5941);
    s.tmp_1 = r0;
    if ((s.tmp_1) && (s.tmp_1).vtable) {
    setupResume(s, 12);
    pxsim_String__stringConv(s.tmp_1);
    checkResumeConsumed();
    return;
    } else { s.retval = (s.tmp_1) + ""; }
  case 12:
    r0 = s.retval;
    s.tmp_0 = r0;
    r0 = pxsim_String__concat("fps:", s.tmp_0);
    globals.control_EventContext_lastStats___397 = (r0);
    r0 = (s.fps___5941 < 99);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 5; continue; }
    if ((globals.control_EventContext_lastStats___397) && (globals.control_EventContext_lastStats___397).vtable) {
    setupResume(s, 13);
    pxsim_String__stringConv(globals.control_EventContext_lastStats___397);
    checkResumeConsumed();
    return;
    } else { s.retval = (globals.control_EventContext_lastStats___397) + ""; }
  case 13:
    r0 = s.retval;
    s.tmp_1 = r0;
    r0 = (s.fps___5941 * 10);
    s.tmp_7 = r0;
    r0 = pxsim.Math_.round(s.tmp_7);
    s.tmp_6 = r0;
    r0 = (s.tmp_6 % 10);
    s.tmp_5 = r0;
    if ((s.tmp_5) && (s.tmp_5).vtable) {
    setupResume(s, 14);
    pxsim_String__stringConv(s.tmp_5);
    checkResumeConsumed();
    return;
    } else { s.retval = (s.tmp_5) + ""; }
  case 14:
    r0 = s.retval;
    s.tmp_4 = r0;
    r0 = pxsim_String__concat(".", s.tmp_4);
    s.tmp_3 = r0;
    if ((s.tmp_3) && (s.tmp_3).vtable) {
    setupResume(s, 15);
    pxsim_String__stringConv(s.tmp_3);
    checkResumeConsumed();
    return;
    } else { s.retval = (s.tmp_3) + ""; }
  case 15:
    r0 = s.retval;
    s.tmp_2 = r0;
    r0 = pxsim_String__concat(s.tmp_1, s.tmp_2);
    globals.control_EventContext_lastStats___397 = (r0);
  case 5:
  case 6:
    r0 = pxsim.control.profilingEnabled();
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 7; continue; }
    r0 = pxsim_String_.mkEmpty();
    s.tmp_9 = r0;
    r0 = (s.fps___5941 * 100);
    s.tmp_12 = r0;
    r0 = (s.tmp_12 | 0);
    s.tmp_11 = r0;
    if ((s.tmp_11) && (s.tmp_11).vtable) {
    setupResume(s, 16);
    pxsim_String__stringConv(s.tmp_11);
    checkResumeConsumed();
    return;
    } else { s.retval = (s.tmp_11) + ""; }
  case 16:
    r0 = s.retval;
    s.tmp_10 = r0;
    r0 = pxsim_String__concat(s.tmp_9, s.tmp_10);
    s.tmp_8 = r0;
    r0 = pxsim_String__concat(s.tmp_8, "/100 fps - ");
    s.tmp_7 = r0;
    r0 = s.arg0.fields["framesInSample"];
    s.tmp_14 = r0;
    if ((s.tmp_14) && (s.tmp_14).vtable) {
    setupResume(s, 17);
    pxsim_String__stringConv(s.tmp_14);
    checkResumeConsumed();
    return;
    } else { s.retval = (s.tmp_14) + ""; }
  case 17:
    r0 = s.retval;
    s.tmp_13 = r0;
    r0 = pxsim_String__concat(s.tmp_7, s.tmp_13);
    s.tmp_6 = r0;
    r0 = pxsim_String__concat(s.tmp_6, " frames (");
    s.tmp_5 = r0;
    r0 = s.arg0.fields["timeInSample"];
    s.tmp_16 = r0;
    if ((s.tmp_16) && (s.tmp_16).vtable) {
    setupResume(s, 18);
    pxsim_String__stringConv(s.tmp_16);
    checkResumeConsumed();
    return;
    } else { s.retval = (s.tmp_16) + ""; }
  case 18:
    r0 = s.retval;
    s.tmp_15 = r0;
    r0 = pxsim_String__concat(s.tmp_5, s.tmp_15);
    s.tmp_4 = r0;
    r0 = pxsim_String__concat(s.tmp_4, "ms/");
    s.tmp_3 = r0;
    if ((s.realTimeInSample___5932) && (s.realTimeInSample___5932).vtable) {
    setupResume(s, 19);
    pxsim_String__stringConv(s.realTimeInSample___5932);
    checkResumeConsumed();
    return;
    } else { s.retval = (s.realTimeInSample___5932) + ""; }
  case 19:
    r0 = s.retval;
    s.tmp_17 = r0;
    r0 = pxsim_String__concat(s.tmp_3, s.tmp_17);
    s.tmp_2 = r0;
    r0 = pxsim_String__concat(s.tmp_2, "ms)");
    s.tmp_1 = r0;
    r0 = pxsim.control.dmesg(s.tmp_1);
    r0 = pxsim.control.gc();
    r0 = pxsim_pxtcore.dumpPerfCounters();
  case 7:
  case 8:
    r0 = (s.arg0).fields["timeInSample"] = (0);
    r0 = (s.arg0).fields["framesInSample"] = (0);
  case 9:
  case 10:
    s.tmp_0 = Math_max__P130_mk(s);
    s.tmp_0.arg0 = 1;
    r0 = (20 - s.runtime___5913);
    s.tmp_0.arg1 = r0;
    s.callLocIdx = 44; s.pc = 20; return s.tmp_0;
  case 20:
    r0 = s.retval;
    s.delay___6010 = (r0);
    r0 = s.delay___6010;
    return leave(s, r0)
  default: oops()
} } }
control_EventContext_runCallbacks__P3116.info = {"start":2220,"length":1395,"line":75,"column":8,"endLine":106,"endColumn":9,"fileName":"pxt_modules/base/eventcontext.ts","functionName":"runCallbacks","argumentNames":["this"]}

function control_EventContext_runCallbacks__P3116_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: control_EventContext_runCallbacks__P3116, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  tmp_4: undefined,
  tmp_5: undefined,
  tmp_6: undefined,
  tmp_7: undefined,
  tmp_8: undefined,
  tmp_9: undefined,
  tmp_10: undefined,
  tmp_11: undefined,
  tmp_12: undefined,
  tmp_13: undefined,
  tmp_14: undefined,
  tmp_15: undefined,
  tmp_16: undefined,
  tmp_17: undefined,
  loopStart___5892: undefined,
  f___5905: undefined,
  unnamed14___U2: undefined,
  unnamed15___U3: undefined,
  now___5910: undefined,
  runtime___5913: undefined,
  realTimeInSample___5932: undefined,
  fps___5941: undefined,
  delay___6010: undefined,
  arg0: undefined,
} }





function pauseUntil__P367(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.lambdaArgs = null;
    }
    r0 = pxsim_numops_toBoolDecr(s.arg0);
    s.tmp_1 = r0;
    r0 = pxsim_Boolean__bang(s.tmp_1);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBool(s.tmp_0);
    if (!r0) { step = 1; continue; }
    r0 = s.tmp_0;
    { step = 2; continue; }
  case 1:
    s.tmp_2 = lambda_1_mk(s);
    s.tmp_2.argL = s.arg0;
    setupLambda(s.tmp_2, s.tmp_2.argL);
    s.callLocIdx = 26; s.pc = 8; return s.tmp_2;
  case 8:
    r0 = s.retval;
  case 2:
    // jmp value (already in r0)
    s.tmp_3 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_3);
    if (!r0) { step = 3; continue; }
    { step = 7; continue; }
  case 3:
  case 4:
    r0 = pxsim_numops_toBoolDecr(s.arg1);
    s.tmp_5 = r0;
    r0 = pxsim_Boolean__bang(s.tmp_5);
    s.tmp_4 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_4);
    if (!r0) { step = 5; continue; }
    s.arg1 = (0);
  case 5:
  case 6:
    s.tmp_0 = control___queuePollEvent__P366_mk(s);
    s.tmp_0.arg0 = s.arg1;
    s.tmp_0.arg1 = s.arg0;
    s.tmp_0.arg2 = undefined;
    s.callLocIdx = 27; s.pc = 9; return s.tmp_0;
  case 9:
    r0 = s.retval;
  case 7:
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
pauseUntil__P367.info = {"start":2224,"length":227,"line":73,"column":0,"endLine":77,"endColumn":1,"fileName":"pxt_modules/base/poll.ts","functionName":"pauseUntil","argumentNames":["condition","timeOut"]}

function pauseUntil__P367_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: pauseUntil__P367, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  tmp_4: undefined,
  tmp_5: undefined,
  arg0: undefined,
  arg1: undefined,
} }





function control___queuePollEvent__P366(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.ev___6032 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.arg2 = (s.lambdaArgs[2]);
      s.lambdaArgs = null;
    }
    r0 = pxsim_pxtcore_mkClassInstance(control_PollEvent__C3090_VT);
    s.tmp_0 = r0;
    s.tmp_1 = control_PollEvent_constructor__P3091_mk(s);
    s.tmp_1.arg0 = s.tmp_0;
    s.tmp_1.arg1 = 1023;
    r0 = pxsim.control.allocateNotifyEvent();
    s.tmp_1.arg2 = r0;
    r0 = pxsim.control.millis();
    s.tmp_1.arg3 = r0;
    s.tmp_1.arg4 = s.arg0;
    s.tmp_1.arg5 = s.arg1;
    r0 = pxsim_numops_toBoolDecr(s.arg2);
    s.tmp_2 = r0;
    r0 = pxsim_Boolean__bang(s.tmp_2);
    s.tmp_1.arg6 = r0;
    s.callLocIdx = 24; s.pc = 5; return s.tmp_1;
  case 5:
    r0 = s.retval;
    s.ev___6032 = (s.tmp_0);
    r0 = pxsim_numops_toBoolDecr(globals._pollEventQueue___3093);
    s.tmp_1 = r0;
    r0 = pxsim_Boolean__bang(s.tmp_1);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 1; continue; }
    r0 = pxsim_Array__mk();
    s.tmp_2 = r0;
    r0 = pxsim_Array__push(s.tmp_2, s.ev___6032);
    globals._pollEventQueue___3093 = (s.tmp_2);
    r0 = pxsim.control.runInParallel(control_pollEvents__P3094);
    { step = 2; continue; }
  case 1:
    r0 = pxsim_Array__push(globals._pollEventQueue___3093, s.ev___6032);
  case 2:
    r0 = pxsim_numops_toBoolDecr(s.arg2);
    if (!r0) { step = 3; continue; }
    s.tmp_0 = control_onEvent__P391_mk(s);
    r0 = s.ev___6032.fields["eid"];
    s.tmp_0.arg0 = r0;
    r0 = s.ev___6032.fields["vid"];
    s.tmp_0.arg1 = r0;
    s.tmp_0.arg2 = s.arg2;
    s.tmp_0.arg3 = 16;
    s.callLocIdx = 25; s.pc = 6; return s.tmp_0;
  case 6:
    r0 = s.retval;
    { step = 4; continue; }
  case 3:
    r0 = s.ev___6032.fields["eid"];
    s.tmp_0 = r0;
    r0 = s.ev___6032.fields["vid"];
    s.tmp_1 = r0;
    setupResume(s, 7);
    pxsim.control.waitForEvent(s.tmp_0, s.tmp_1);
    checkResumeConsumed();
    return;
  case 7:
    r0 = s.retval;
  case 4:
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
control___queuePollEvent__P366.info = {"start":1262,"length":758,"line":39,"column":4,"endLine":64,"endColumn":5,"fileName":"pxt_modules/base/poll.ts","functionName":"__queuePollEvent","argumentNames":["timeOut","condition","handler"]}

function control___queuePollEvent__P366_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: control___queuePollEvent__P366, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  ev___6032: undefined,
  arg0: undefined,
  arg1: undefined,
  arg2: undefined,
} }





function control_pollEvents__P3094(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.now___6153 = undefined;
    s.i___6156 = undefined;
    s.ev___6162 = undefined;
  case 1:
    r0 = pxsim_Array__length(globals._pollEventQueue___3093);
    s.tmp_1 = r0;
    r0 = (s.tmp_1 > 0);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 12; continue; }
    r0 = pxsim.control.millis();
    s.now___6153 = (r0);
    s.i___6156 = (0);
  case 2:
    s.tmp_1 = r0 = s.i___6156;
    r0 = pxsim_Array__length(globals._pollEventQueue___3093);
    s.tmp_2 = r0;
    r0 = (s.tmp_1 < s.tmp_2);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 11; continue; }
    r0 = pxsim_Array__getAt(globals._pollEventQueue___3093, s.i___6156);
    s.ev___6162 = (r0);
    s.tmp_1 = if_condition_1_mk(s);
    s.tmp_1.arg0 = s.ev___6162;
    if (!s.tmp_1.arg0.vtable.iface) {
      setupLambda(s.tmp_1, pxsim_pxtrt.mapGetByString(s.tmp_1.arg0, "condition"), 1);
      s.callLocIdx = 21; s.pc = 13; return s.tmp_1;
    } else {
      s.tmp_1.fn = s.tmp_1.arg0.vtable.iface["condition"];
      if (s.tmp_1.fn == null) { setupLambda(s.tmp_1, s.tmp_1.arg0.fields["condition"], 1); s.callLocIdx = 21; s.pc = 13; return s.tmp_1; }
      else if (s.tmp_1.fn.isGetter) { s.tmp_1.stage2Call = true; s.callLocIdx = 21; s.pc = 13; return s.tmp_1;; }
     else { s.callLocIdx = 21; s.pc = 13; return s.tmp_1; }
    }
  case 13:
    r0 = s.retval;
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBool(s.tmp_0);
    if (!r0) { step = 3; continue; }
    r0 = s.tmp_0;
    { step = 6; continue; }
  case 3:
    r0 = s.ev___6162.fields["timeOut"];
    s.tmp_3 = r0;
    r0 = (s.tmp_3 > 0);
    s.tmp_2 = r0;
    r0 = pxsim_numops_toBool(s.tmp_2);
    if (r0) { step = 4; continue; }
    r0 = s.tmp_2;
    { step = 5; continue; }
  case 4:
    r0 = s.ev___6162.fields["start"];
    s.tmp_5 = r0;
    r0 = (s.now___6153 - s.tmp_5);
    s.tmp_4 = r0;
    r0 = s.ev___6162.fields["timeOut"];
    s.tmp_6 = r0;
    r0 = (s.tmp_4 > s.tmp_6);
  case 5:
    // jmp value (already in r0)
    s.tmp_7 = r0;
    r0 = s.tmp_7;
  case 6:
    // jmp value (already in r0)
    s.tmp_8 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_8);
    if (!r0) { step = 9; continue; }
    r0 = s.ev___6162.fields["eid"];
    s.tmp_9 = r0;
    r0 = s.ev___6162.fields["vid"];
    s.tmp_10 = r0;
    r0 = pxsim.control.raiseEvent(s.tmp_9, s.tmp_10);
    r0 = s.ev___6162.fields["once"];
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 7; continue; }
    s.tmp_1 = helpers_arraySplice__P100_mk(s);
    s.tmp_1.arg0 = globals._pollEventQueue___3093;
    s.tmp_1.arg1 = s.i___6156;
    s.tmp_1.arg2 = 1;
    s.callLocIdx = 22; s.pc = 14; return s.tmp_1;
  case 14:
    r0 = s.retval;
    r0 = (s.i___6156 - 1);
    s.i___6156 = (r0);
  case 7:
  case 8:
  case 9:
  case 10:
    r0 = (s.i___6156 + 1);
    s.i___6156 = (r0);
    { step = 2; continue; }
  case 11:
    s.tmp_0 = pause__P413_mk(s);
    s.tmp_0.arg0 = 50;
    s.callLocIdx = 23; s.pc = 15; return s.tmp_0;
  case 15:
    r0 = s.retval;
    { step = 1; continue; }
  case 12:
    globals._pollEventQueue___3093 = (undefined);
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
control_pollEvents__P3094.info = {"start":618,"length":638,"line":20,"column":4,"endLine":37,"endColumn":5,"fileName":"pxt_modules/base/poll.ts","functionName":"pollEvents","argumentNames":[]}

function control_pollEvents__P3094_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: control_pollEvents__P3094, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  tmp_4: undefined,
  tmp_5: undefined,
  tmp_6: undefined,
  tmp_7: undefined,
  tmp_8: undefined,
  tmp_9: undefined,
  tmp_10: undefined,
  now___6153: undefined,
  i___6156: undefined,
  ev___6162: undefined,
} }





function helpers_arraySplice__P100(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.i___6210 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.arg2 = (s.lambdaArgs[2]);
      s.lambdaArgs = null;
    }
    r0 = (s.arg1 < 0);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 1; continue; }
    { step = 5; continue; }
  case 1:
  case 2:
    s.i___6210 = (0);
  case 3:
    r0 = (s.i___6210 < s.arg2);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 4; continue; }
    r0 = pxsim_Array_.removeAt(s.arg0, s.arg1);
    r0 = (s.i___6210 + 1);
    s.i___6210 = (r0);
    { step = 3; continue; }
  case 4:
  case 5:
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
helpers_arraySplice__P100.info = {"start":3642,"length":213,"line":137,"column":4,"endLine":144,"endColumn":5,"fileName":"pxt_modules/base/pxt-helpers.ts","functionName":"arraySplice","argumentNames":["arr","start","len"]}

function helpers_arraySplice__P100_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: helpers_arraySplice__P100, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  i___6210: undefined,
  arg0: undefined,
  arg1: undefined,
  arg2: undefined,
} }





function control_PollEvent_constructor__P3091(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.arg2 = (s.lambdaArgs[2]);
      s.arg3 = (s.lambdaArgs[3]);
      s.arg4 = (s.lambdaArgs[4]);
      s.arg5 = (s.lambdaArgs[5]);
      s.arg6 = (s.lambdaArgs[6]);
      s.lambdaArgs = null;
    }
    r0 = s.arg0;
    if (!checkSubtype(r0, control_PollEvent__C3090_VT)) failedCast(r0);
    r0 = (s.arg0).fields["eid"] = (s.arg1);
    r0 = (s.arg0).fields["vid"] = (s.arg2);
    r0 = (s.arg0).fields["start"] = (s.arg3);
    r0 = (s.arg0).fields["timeOut"] = (s.arg4);
    r0 = (s.arg0).fields["condition"] = (s.arg5);
    r0 = (s.arg0).fields["once"] = (s.arg6);
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
control_PollEvent_constructor__P3091.info = {"start":239,"length":316,"line":8,"column":8,"endLine":15,"endColumn":9,"fileName":"pxt_modules/base/poll.ts","functionName":"inline","argumentNames":["this","eid","vid","start","timeOut","condition","once"]}

function control_PollEvent_constructor__P3091_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: control_PollEvent_constructor__P3091, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  arg0: undefined,
  arg1: undefined,
  arg2: undefined,
  arg3: undefined,
  arg4: undefined,
  arg5: undefined,
  arg6: undefined,
} }





function control_onEvent__P391(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.ctx___6075 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.arg2 = (s.lambdaArgs[2]);
      s.arg3 = (s.lambdaArgs[3]);
      s.lambdaArgs = null;
    }
    s.tmp_0 = control_eventContext__P408_mk(s);
    s.callLocIdx = 40; s.pc = 3; return s.tmp_0;
  case 3:
    r0 = s.retval;
    s.ctx___6075 = (r0);
    r0 = pxsim_numops_toBoolDecr(s.ctx___6075);
    s.tmp_1 = r0;
    r0 = pxsim_Boolean__bang(s.tmp_1);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 1; continue; }
    r0 = pxsim.control.internalOnEvent(s.arg0, s.arg1, s.arg2, s.arg3);
    { step = 2; continue; }
  case 1:
    s.tmp_0 = control_EventContext_registerHandler__P405_mk(s);
    s.tmp_0.arg0 = s.ctx___6075;
    s.tmp_0.arg1 = s.arg0;
    s.tmp_0.arg2 = s.arg1;
    s.tmp_0.arg3 = s.arg2;
    s.tmp_0.arg4 = s.arg3;
    s.callLocIdx = 41; s.pc = 4; return s.tmp_0;
  case 4:
    r0 = s.retval;
  case 2:
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
control_onEvent__P391.info = {"start":336,"length":325,"line":9,"column":4,"endLine":15,"endColumn":5,"fileName":"pxt_modules/base/eventcontext.ts","functionName":"onEvent","argumentNames":["src","value","handler","flags"]}

function control_onEvent__P391_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: control_onEvent__P391, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  ctx___6075: undefined,
  arg0: undefined,
  arg1: undefined,
  arg2: undefined,
  arg3: undefined,
} }





function control_EventContext_registerHandler__P405(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.h___6098 = undefined;
    s.unnamed18___U1 = undefined;
    s.unnamed19___U2 = undefined;
    s.hn___6121 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.arg2 = (s.lambdaArgs[2]);
      s.arg3 = (s.lambdaArgs[3]);
      s.arg4 = (s.lambdaArgs[4]);
      s.lambdaArgs = null;
    }
    r0 = s.arg0;
    if (!checkSubtype(r0, control_EventContext__C395_VT)) failedCast(r0);
    s.h___6098 = (undefined);
    r0 = s.arg0.fields["handlers"];
    s.unnamed18___U1 = (r0);
    s.unnamed19___U2 = (0);
  case 1:
    s.tmp_0 = r0 = s.unnamed19___U2;
    r0 = pxsim_Array__length(s.unnamed18___U1);
    s.tmp_1 = r0;
    r0 = (s.tmp_0 < s.tmp_1);
    if (!r0) { step = 6; continue; }
    r0 = pxsim_Array__getAt(s.unnamed18___U1, s.unnamed19___U2);
    s.h___6098 = (r0);
    r0 = s.h___6098.fields["src"];
    s.tmp_3 = r0;
    r0 = (s.tmp_3 == s.arg1);
    s.tmp_2 = r0;
    r0 = pxsim_numops_toBool(s.tmp_2);
    if (r0) { step = 2; continue; }
    r0 = s.tmp_2;
    { step = 3; continue; }
  case 2:
    r0 = s.h___6098.fields["value"];
    s.tmp_4 = r0;
    r0 = (s.tmp_4 == s.arg2);
  case 3:
    // jmp value (already in r0)
    s.tmp_5 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_5);
    if (!r0) { step = 4; continue; }
    r0 = (s.h___6098).fields["flags"] = (s.arg4);
    r0 = (s.h___6098).fields["handler"] = (s.arg3);
    { step = 7; continue; }
  case 4:
  case 5:
    r0 = (s.unnamed19___U2 + 1);
    s.unnamed19___U2 = (r0);
    { step = 1; continue; }
  case 6:
    s.unnamed18___U1 = (undefined);
    r0 = pxsim_pxtcore_mkClassInstance(control_EventHandler__C3111_VT);
    s.tmp_0 = r0;
    s.tmp_1 = control_EventHandler_constructor__P3114_mk(s);
    s.tmp_1.arg0 = s.tmp_0;
    s.tmp_1.arg1 = s.arg1;
    s.tmp_1.arg2 = s.arg2;
    s.tmp_1.arg3 = s.arg3;
    s.tmp_1.arg4 = s.arg4;
    s.callLocIdx = 50; s.pc = 8; return s.tmp_1;
  case 8:
    r0 = s.retval;
    s.hn___6121 = (s.tmp_0);
    r0 = s.arg0.fields["handlers"];
    s.tmp_0 = r0;
    r0 = pxsim_Array__push(s.tmp_0, s.hn___6121);
    s.tmp_0 = control_EventHandler_register__P3112_mk(s);
    s.tmp_0.arg0 = s.hn___6121;
    s.callLocIdx = 51; s.pc = 9; return s.tmp_0;
  case 9:
    r0 = s.retval;
  case 7:
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
control_EventContext_registerHandler__P405.info = {"start":5760,"length":525,"line":173,"column":8,"endLine":186,"endColumn":9,"fileName":"pxt_modules/base/eventcontext.ts","functionName":"registerHandler","argumentNames":["this","src","value","handler","flags"]}

function control_EventContext_registerHandler__P405_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: control_EventContext_registerHandler__P405, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  tmp_4: undefined,
  tmp_5: undefined,
  h___6098: undefined,
  unnamed18___U1: undefined,
  unnamed19___U2: undefined,
  hn___6121: undefined,
  arg0: undefined,
  arg1: undefined,
  arg2: undefined,
  arg3: undefined,
  arg4: undefined,
} }





function control_EventHandler_constructor__P3114(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.arg2 = (s.lambdaArgs[2]);
      s.arg3 = (s.lambdaArgs[3]);
      s.arg4 = (s.lambdaArgs[4]);
      s.lambdaArgs = null;
    }
    r0 = s.arg0;
    if (!checkSubtype(r0, control_EventHandler__C3111_VT)) failedCast(r0);
    r0 = (s.arg0).fields["src"] = (s.arg1);
    r0 = (s.arg0).fields["value"] = (s.arg2);
    r0 = (s.arg0).fields["handler"] = (s.arg3);
    r0 = (s.arg0).fields["flags"] = (s.arg4);
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
control_EventHandler_constructor__P3114.info = {"start":786,"length":165,"line":23,"column":8,"endLine":28,"endColumn":13,"fileName":"pxt_modules/base/eventcontext.ts","functionName":"inline","argumentNames":["this","src","value","handler","flags"]}

function control_EventHandler_constructor__P3114_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: control_EventHandler_constructor__P3114, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  arg0: undefined,
  arg1: undefined,
  arg2: undefined,
  arg3: undefined,
  arg4: undefined,
} }





function control_EventHandler_register__P3112(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    r0 = s.arg0;
    if (!checkSubtype(r0, control_EventHandler__C3111_VT)) failedCast(r0);
    r0 = pxsim_pxtcore_mkAction(1, control_EventHandler_register_inline__P6142);
    s.tmp_0 = r0;
    r0 = pxsim_pxtrt_stclo(s.tmp_0, 0, s.arg0);
    r0 = s.arg0.fields["src"];
    s.tmp_1 = r0;
    r0 = s.arg0.fields["value"];
    s.tmp_2 = r0;
    r0 = s.arg0.fields["flags"];
    s.tmp_3 = r0;
    r0 = pxsim.control.internalOnEvent(s.tmp_1, s.tmp_2, s.tmp_0, s.tmp_3);
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
control_EventHandler_register__P3112.info = {"start":961,"length":165,"line":30,"column":8,"endLine":34,"endColumn":9,"fileName":"pxt_modules/base/eventcontext.ts","functionName":"register","argumentNames":["this"]}

function control_EventHandler_register__P3112_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: control_EventHandler_register__P3112, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  arg0: undefined,
} }





function control_EventHandler_register_inline__P6142(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    r0 = s.caps[0].fields["handler"];
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 1; continue; }
    s.tmp_1 = if_handler_1_mk(s);
    s.tmp_1.arg0 = s.caps[0];
    if (!s.tmp_1.arg0.vtable.iface) {
      setupLambda(s.tmp_1, pxsim_pxtrt.mapGetByString(s.tmp_1.arg0, "handler"), 1);
      s.callLocIdx = 42; s.pc = 3; return s.tmp_1;
    } else {
      s.tmp_1.fn = s.tmp_1.arg0.vtable.iface["handler"];
      if (s.tmp_1.fn == null) { setupLambda(s.tmp_1, s.tmp_1.arg0.fields["handler"], 1); s.callLocIdx = 42; s.pc = 3; return s.tmp_1; }
      else if (s.tmp_1.fn.isGetter) { s.tmp_1.stage2Call = true; s.callLocIdx = 42; s.pc = 3; return s.tmp_1;; }
     else { s.callLocIdx = 42; s.pc = 3; return s.tmp_1; }
    }
  case 3:
    r0 = s.retval;
  case 1:
  case 2:
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
control_EventHandler_register_inline__P6142.info = {"start":1032,"length":71,"line":31,"column":58,"endLine":33,"endColumn":13,"fileName":"pxt_modules/base/eventcontext.ts","functionName":"inline","argumentNames":[]}

function control_EventHandler_register_inline__P6142_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: control_EventHandler_register_inline__P6142, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
} }





function game_eventContext__P1788(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    r0 = pxsim_numops_toBoolDecr(globals.inited___3226);
    s.tmp_1 = r0;
    r0 = pxsim_Boolean__bang(s.tmp_1);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 1; continue; }
    globals.inited___3226 = (true);
    s.tmp_0 = game_pushScene__P1786_mk(s);
    s.callLocIdx = 89; s.pc = 3; return s.tmp_0;
  case 3:
    r0 = s.retval;
  case 1:
  case 2:
    s.tmp_0 = control_eventContext__P408_mk(s);
    s.callLocIdx = 90; s.pc = 4; return s.tmp_0;
  case 4:
    r0 = s.retval;
    return leave(s, r0)
  default: oops()
} } }
game_eventContext__P1788.info = {"start":1279,"length":159,"line":55,"column":4,"endLine":61,"endColumn":5,"fileName":"pxt_modules/game---light/compat.ts","functionName":"eventContext","argumentNames":[]}

function game_eventContext__P1788_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: game_eventContext__P1788, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
} }





function game_pushScene__P1786(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.ctx___6252 = undefined;
    s.tmp_0 = control_pushEventContext__P409_mk(s);
    s.callLocIdx = 86; s.pc = 1; return s.tmp_0;
  case 1:
    r0 = s.retval;
    s.ctx___6252 = (r0);
    s.tmp_0 = control_EventContext_registerFrameHandler__P403_mk(s);
    s.tmp_0.arg0 = s.ctx___6252;
    s.tmp_0.arg1 = 60;
    s.tmp_0.arg2 = game_pushScene_inline__P6258;
    s.callLocIdx = 87; s.pc = 2; return s.tmp_0;
  case 2:
    r0 = s.retval;
    s.tmp_0 = control_EventContext_registerFrameHandler__P403_mk(s);
    s.tmp_0.arg0 = s.ctx___6252;
    s.tmp_0.arg1 = 200;
    s.tmp_0.arg2 = control___screen_update__P1676;
    s.callLocIdx = 88; s.pc = 3; return s.tmp_0;
  case 3:
    r0 = s.retval;
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
game_pushScene__P1786.info = {"start":914,"length":285,"line":43,"column":4,"endLine":49,"endColumn":5,"fileName":"pxt_modules/game---light/compat.ts","functionName":"pushScene","argumentNames":[]}

function game_pushScene__P1786_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: game_pushScene__P1786, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  ctx___6252: undefined,
} }





function game_pushScene_inline__P6258(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    r0 = pxsim_ImageMethods.fill(globals.screen___1715, 0);
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
game_pushScene_inline__P6258.info = {"start":1058,"length":44,"line":45,"column":67,"endLine":47,"endColumn":9,"fileName":"pxt_modules/game---light/compat.ts","functionName":"inline","argumentNames":[]}

function game_pushScene_inline__P6258_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: game_pushScene_inline__P6258, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
} }





function control_pushEventContext__P409(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.ctx___6270 = undefined;
    s.n___6276 = undefined;
    r0 = pxsim_numops_toBoolDecr(globals.eventContexts___3119);
    s.tmp_1 = r0;
    r0 = pxsim_Boolean__bang(s.tmp_1);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 1; continue; }
    r0 = pxsim_Array__mk();
    globals.eventContexts___3119 = (r0);
  case 1:
  case 2:
    s.tmp_0 = control_eventContext__P408_mk(s);
    s.callLocIdx = 52; s.pc = 5; return s.tmp_0;
  case 5:
    r0 = s.retval;
    s.ctx___6270 = (r0);
    r0 = pxsim_numops_toBoolDecr(s.ctx___6270);
    if (!r0) { step = 3; continue; }
    s.tmp_0 = control_EventContext_unregister__P402_mk(s);
    s.tmp_0.arg0 = s.ctx___6270;
    s.callLocIdx = 53; s.pc = 6; return s.tmp_0;
  case 6:
    r0 = s.retval;
  case 3:
  case 4:
    r0 = pxsim_pxtcore_mkClassInstance(control_EventContext__C395_VT);
    s.tmp_0 = r0;
    s.tmp_1 = control_EventContext_constructor__P399_mk(s);
    s.tmp_1.arg0 = s.tmp_0;
    s.callLocIdx = 54; s.pc = 7; return s.tmp_1;
  case 7:
    r0 = s.retval;
    s.n___6276 = (s.tmp_0);
    r0 = pxsim_Array__push(globals.eventContexts___3119, s.n___6276);
    r0 = s.n___6276;
    return leave(s, r0)
  default: oops()
} } }
control_pushEventContext__P409.info = {"start":7310,"length":340,"line":220,"column":4,"endLine":231,"endColumn":5,"fileName":"pxt_modules/base/eventcontext.ts","functionName":"pushEventContext","argumentNames":[]}

function control_pushEventContext__P409_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: control_pushEventContext__P409, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  ctx___6270: undefined,
  n___6276: undefined,
} }





function control_EventContext_unregister__P402(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.h___6305 = undefined;
    s.unnamed16___U1 = undefined;
    s.unnamed17___U2 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    r0 = s.arg0;
    if (!checkSubtype(r0, control_EventContext__C395_VT)) failedCast(r0);
    s.h___6305 = (undefined);
    r0 = s.arg0.fields["handlers"];
    s.unnamed16___U1 = (r0);
    s.unnamed17___U2 = (0);
  case 1:
    s.tmp_0 = r0 = s.unnamed17___U2;
    r0 = pxsim_Array__length(s.unnamed16___U1);
    s.tmp_1 = r0;
    r0 = (s.tmp_0 < s.tmp_1);
    if (!r0) { step = 2; continue; }
    r0 = pxsim_Array__getAt(s.unnamed16___U1, s.unnamed17___U2);
    s.h___6305 = (r0);
    s.tmp_2 = control_EventHandler_unregister__P3113_mk(s);
    s.tmp_2.arg0 = s.h___6305;
    s.callLocIdx = 48; s.pc = 3; return s.tmp_2;
  case 3:
    r0 = s.retval;
    r0 = (s.unnamed17___U2 + 1);
    s.unnamed17___U2 = (r0);
    { step = 1; continue; }
  case 2:
    s.unnamed16___U1 = (undefined);
    s.tmp_0 = r0 = s.arg0;
    r0 = s.tmp_0.fields["frameWorker"];
    s.tmp_2 = r0;
    r0 = (s.tmp_2 + 1);
    s.tmp_1 = r0;
    r0 = (s.tmp_0).fields["frameWorker"] = (s.tmp_1);
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
control_EventContext_unregister__P402.info = {"start":4721,"length":131,"line":141,"column":8,"endLine":145,"endColumn":9,"fileName":"pxt_modules/base/eventcontext.ts","functionName":"unregister","argumentNames":["this"]}

function control_EventContext_unregister__P402_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: control_EventContext_unregister__P402, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  h___6305: undefined,
  unnamed16___U1: undefined,
  unnamed17___U2: undefined,
  arg0: undefined,
} }





function control_EventHandler_unregister__P3113(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    r0 = s.arg0;
    if (!checkSubtype(r0, control_EventHandler__C3111_VT)) failedCast(r0);
    r0 = s.arg0.fields["src"];
    s.tmp_0 = r0;
    r0 = s.arg0.fields["value"];
    s.tmp_1 = r0;
    r0 = s.arg0.fields["flags"];
    s.tmp_2 = r0;
    r0 = pxsim.control.internalOnEvent(s.tmp_0, s.tmp_1, control_doNothing__P3115, s.tmp_2);
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
control_EventHandler_unregister__P3113.info = {"start":1136,"length":106,"line":36,"column":8,"endLine":38,"endColumn":9,"fileName":"pxt_modules/base/eventcontext.ts","functionName":"unregister","argumentNames":["this"]}

function control_EventHandler_unregister__P3113_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: control_EventHandler_unregister__P3113, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  arg0: undefined,
} }





function control_doNothing__P3115(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
control_doNothing__P3115.info = {"start":1254,"length":24,"line":41,"column":4,"endLine":41,"endColumn":28,"fileName":"pxt_modules/base/eventcontext.ts","functionName":"doNothing","argumentNames":[]}

function control_doNothing__P3115_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: control_doNothing__P3115, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
} }





function control_EventContext_constructor__P399(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    r0 = s.arg0;
    if (!checkSubtype(r0, control_EventContext__C395_VT)) failedCast(r0);
    s.tmp_0 = r0 = s.arg0;
    r0 = pxsim_Array__mk();
    s.tmp_1 = r0;
    r0 = (s.tmp_0).fields["handlers"] = (s.tmp_1);
    r0 = (s.arg0).fields["framesInSample"] = (0);
    r0 = (s.arg0).fields["timeInSample"] = (0);
    r0 = (s.arg0).fields["deltaTimeMillis"] = (0);
    r0 = (s.arg0).fields["frameWorker"] = (0);
    r0 = (s.arg0).fields["idleCallbacks"] = (undefined);
    r0 = pxsim_numops_toBoolDecr(globals.control_EventContext_lastStats___397);
    s.tmp_1 = r0;
    r0 = pxsim_Boolean__bang(s.tmp_1);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 1; continue; }
    r0 = pxsim_String_.mkEmpty();
    globals.control_EventContext_lastStats___397 = (r0);
  case 1:
  case 2:
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
control_EventContext_constructor__P399.info = {"start":1778,"length":347,"line":59,"column":8,"endLine":69,"endColumn":9,"fileName":"pxt_modules/base/eventcontext.ts","functionName":"inline","argumentNames":["this"]}

function control_EventContext_constructor__P399_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: control_EventContext_constructor__P399, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  arg0: undefined,
} }





function controller_pauseUntilAnyButtonIsPressed__P1857(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    setupResume(s, 1);
    pxsim.control.waitForEvent(2049, 0);
    checkResumeConsumed();
    return;
  case 1:
    r0 = s.retval;
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
controller_pauseUntilAnyButtonIsPressed__P1857.info = {"start":9968,"length":96,"line":287,"column":4,"endLine":289,"endColumn":5,"fileName":"pxt_modules/game---light/controllerbutton.ts","functionName":"pauseUntilAnyButtonIsPressed","argumentNames":[]}

function controller_pauseUntilAnyButtonIsPressed__P1857_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: controller_pauseUntilAnyButtonIsPressed__P1857, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
} }





function game_setWaitAnyButton__P1789(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    globals.__waitAnyButton___3230 = (s.arg0);
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
game_setWaitAnyButton__P1789.info = {"start":1481,"length":83,"line":64,"column":4,"endLine":66,"endColumn":5,"fileName":"pxt_modules/game---light/compat.ts","functionName":"setWaitAnyButton","argumentNames":["f"]}

function game_setWaitAnyButton__P1789_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: game_setWaitAnyButton__P1789, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  arg0: undefined,
} }





function game_consoleOverlay_listener__P3268(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.lambdaArgs = null;
    }
    r0 = pxsim_numops_toBoolDecr(globals.consoleStrings___3233);
    s.tmp_1 = r0;
    r0 = pxsim_Boolean__bang(s.tmp_1);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBool(s.tmp_0);
    if (!r0) { step = 1; continue; }
    r0 = s.tmp_0;
    { step = 2; continue; }
  case 1:
    r0 = pxsim_numops_toBoolDecr(s.arg1);
    s.tmp_2 = r0;
    r0 = pxsim_Boolean__bang(s.tmp_2);
  case 2:
    // jmp value (already in r0)
    s.tmp_3 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_3);
    if (!r0) { step = 3; continue; }
    { step = 7; continue; }
  case 3:
  case 4:
    s.tmp_4 = helpers_arrayForEach__P109_mk(s);
    s.tmp_5 = helpers_arrayFilter__P110_mk(s);
    s.tmp_6 = helpers_stringSplit__P122_mk(s);
    s.tmp_6.arg0 = s.arg1;
    s.tmp_6.arg1 = "\n";
    s.tmp_6.arg2 = undefined;
    s.callLocIdx = 96; s.pc = 10; return s.tmp_6;
  case 10:
    r0 = s.retval;
    s.tmp_5.arg0 = r0;
    s.tmp_5.arg1 = forEach_inline__P6341;
    s.callLocIdx = 97; s.pc = 9; return s.tmp_5;
  case 9:
    r0 = s.retval;
    s.tmp_4.arg0 = r0;
    s.tmp_4.arg1 = game_consoleOverlay_listener_inline__P6346;
    s.callLocIdx = 99; s.pc = 8; return s.tmp_4;
  case 8:
    r0 = s.retval;
    r0 = pxsim_Array__length(globals.consoleStrings___3233);
    s.tmp_1 = r0;
    r0 = (s.tmp_1 > globals.consoleLines___3246);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 5; continue; }
    s.tmp_2 = helpers_arraySplice__P100_mk(s);
    s.tmp_2.arg0 = globals.consoleStrings___3233;
    s.tmp_2.arg1 = 0;
    r0 = pxsim_Array__length(globals.consoleStrings___3233);
    s.tmp_3 = r0;
    r0 = (s.tmp_3 - globals.consoleLines___3246);
    s.tmp_2.arg2 = r0;
    s.callLocIdx = 100; s.pc = 11; return s.tmp_2;
  case 11:
    r0 = s.retval;
  case 5:
  case 6:
  case 7:
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
game_consoleOverlay_listener__P3268.info = {"start":787,"length":571,"line":26,"column":4,"endLine":42,"endColumn":5,"fileName":"pxt_modules/game---light/console.ts","functionName":"listener","argumentNames":["priority","text"]}

function game_consoleOverlay_listener__P3268_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: game_consoleOverlay_listener__P3268, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  tmp_4: undefined,
  tmp_5: undefined,
  tmp_6: undefined,
  arg0: undefined,
  arg1: undefined,
} }





function forEach_inline__P6341(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    r0 = pxsim_numops_toBoolDecr(s.arg0);
    s.tmp_2 = r0;
    r0 = pxsim_Boolean__bang(s.tmp_2);
    s.tmp_1 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_1);
    s.tmp_0 = r0;
    r0 = pxsim_Boolean__bang(s.tmp_0);
    return leave(s, r0)
  default: oops()
} } }
forEach_inline__P6341.info = {"start":985,"length":14,"line":32,"column":20,"endLine":32,"endColumn":34,"fileName":"pxt_modules/game---light/console.ts","functionName":"inline","argumentNames":["line"]}

function forEach_inline__P6341_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: forEach_inline__P6341, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  arg0: undefined,
} }





function game_consoleOverlay_listener_inline__P6346(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.j___6348 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    s.j___6348 = (0);
  case 1:
    s.tmp_1 = r0 = s.j___6348;
    r0 = pxsim_String_.length(s.arg0);
    s.tmp_2 = r0;
    r0 = (s.tmp_1 < s.tmp_2);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 2; continue; }
    s.tmp_3 = r0 = globals.consoleStrings___3233;
    s.tmp_5 = helpers_stringSlice__P119_mk(s);
    s.tmp_5.arg0 = s.arg0;
    s.tmp_5.arg1 = s.j___6348;
    r0 = (s.j___6348 + globals.consoleColumns___3256);
    s.tmp_5.arg2 = r0;
    s.callLocIdx = 98; s.pc = 3; return s.tmp_5;
  case 3:
    r0 = s.retval;
    s.tmp_4 = r0;
    r0 = pxsim_Array__push(s.tmp_3, s.tmp_4);
    r0 = (s.j___6348 + globals.consoleColumns___3256);
    s.j___6348 = (r0);
    { step = 1; continue; }
  case 2:
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
game_consoleOverlay_listener_inline__P6346.info = {"start":1022,"length":189,"line":33,"column":21,"endLine":37,"endColumn":13,"fileName":"pxt_modules/game---light/console.ts","functionName":"inline","argumentNames":["line"]}

function game_consoleOverlay_listener_inline__P6346_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: game_consoleOverlay_listener_inline__P6346, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  tmp_4: undefined,
  tmp_5: undefined,
  j___6348: undefined,
  arg0: undefined,
} }





function helpers_stringSplit__P122(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.A___6380 = undefined;
    s.lim___6382 = undefined;
    s.s___6398 = undefined;
    s.p___6401 = undefined;
    s.R___6402 = undefined;
    s.z___6416 = undefined;
    s.T___6429 = undefined;
    s.q___6430 = undefined;
    s.e___6436 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.arg2 = (s.lambdaArgs[2]);
      s.lambdaArgs = null;
    }
    r0 = pxsim_Array__mk();
    s.A___6380 = (r0);
    s.lim___6382 = (0);
    r0 = (s.arg2 === undefined);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 1; continue; }
    r0 = (536870912 - 1);
    s.lim___6382 = (r0);
    { step = 4; continue; }
  case 1:
    r0 = (s.arg2 < 0);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 2; continue; }
    s.lim___6382 = (0);
    { step = 3; continue; }
  case 2:
    r0 = (s.arg2 | 0);
    s.lim___6382 = (r0);
  case 3:
  case 4:
    r0 = pxsim_String_.length(s.arg0);
    s.s___6398 = (r0);
    s.p___6401 = (0);
    s.R___6402 = (s.arg1);
    r0 = (s.lim___6382 == 0);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 5; continue; }
    r0 = s.A___6380;
    { step = 21; continue; }
  case 5:
  case 6:
    r0 = (s.arg1 === undefined);
    s.tmp_1 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_1);
    if (!r0) { step = 7; continue; }
    r0 = pxsim_Array_.setAt(s.A___6380, 0, s.arg0);
    r0 = s.A___6380;
    { step = 21; continue; }
  case 7:
  case 8:
    r0 = (s.s___6398 == 0);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 11; continue; }
    s.tmp_1 = helpers_splitMatch__P3042_mk(s);
    s.tmp_1.arg0 = s.arg0;
    s.tmp_1.arg1 = 0;
    s.tmp_1.arg2 = s.R___6402;
    s.callLocIdx = 7; s.pc = 22; return s.tmp_1;
  case 22:
    r0 = s.retval;
    s.z___6416 = (r0);
    r0 = (s.z___6416 > -1);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 9; continue; }
    r0 = s.A___6380;
    { step = 21; continue; }
  case 9:
  case 10:
    r0 = pxsim_Array_.setAt(s.A___6380, 0, s.arg0);
    r0 = s.A___6380;
    { step = 21; continue; }
  case 11:
  case 12:
    s.q___6430 = (s.p___6401);
  case 13:
    r0 = (s.q___6430 != s.s___6398);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 20; continue; }
    s.tmp_1 = helpers_splitMatch__P3042_mk(s);
    s.tmp_1.arg0 = s.arg0;
    s.tmp_1.arg1 = s.q___6430;
    s.tmp_1.arg2 = s.R___6402;
    s.callLocIdx = 8; s.pc = 23; return s.tmp_1;
  case 23:
    r0 = s.retval;
    s.e___6436 = (r0);
    r0 = (s.e___6436 < 0);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 14; continue; }
    r0 = (s.q___6430 + 1);
    s.q___6430 = (r0);
    { step = 19; continue; }
  case 14:
    r0 = (s.e___6436 == s.p___6401);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 15; continue; }
    r0 = (s.q___6430 + 1);
    s.q___6430 = (r0);
    { step = 18; continue; }
  case 15:
    s.tmp_0 = helpers_stringSlice__P119_mk(s);
    s.tmp_0.arg0 = s.arg0;
    s.tmp_0.arg1 = s.p___6401;
    s.tmp_0.arg2 = s.q___6430;
    s.callLocIdx = 9; s.pc = 24; return s.tmp_0;
  case 24:
    r0 = s.retval;
    s.T___6429 = (r0);
    r0 = pxsim_Array__push(s.A___6380, s.T___6429);
    r0 = pxsim_Array__length(s.A___6380);
    s.tmp_1 = r0;
    r0 = (s.tmp_1 == s.lim___6382);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 16; continue; }
    r0 = s.A___6380;
    { step = 21; continue; }
  case 16:
  case 17:
    s.p___6401 = (s.e___6436);
    s.q___6430 = (s.p___6401);
  case 18:
  case 19:
    { step = 13; continue; }
  case 20:
    s.tmp_0 = helpers_stringSlice__P119_mk(s);
    s.tmp_0.arg0 = s.arg0;
    s.tmp_0.arg1 = s.p___6401;
    s.tmp_0.arg2 = s.q___6430;
    s.callLocIdx = 10; s.pc = 25; return s.tmp_0;
  case 25:
    r0 = s.retval;
    s.T___6429 = (r0);
    r0 = pxsim_Array__push(s.A___6380, s.T___6429);
    r0 = s.A___6380;
  case 21:
    return leave(s, r0)
  default: oops()
} } }
helpers_stringSplit__P122.info = {"start":12919,"length":1319,"line":434,"column":4,"endLine":478,"endColumn":5,"fileName":"pxt_modules/base/pxt-helpers.ts","functionName":"stringSplit","argumentNames":["S","separator","limit"]}

function helpers_stringSplit__P122_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: helpers_stringSplit__P122, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  A___6380: undefined,
  lim___6382: undefined,
  s___6398: undefined,
  p___6401: undefined,
  R___6402: undefined,
  z___6416: undefined,
  T___6429: undefined,
  q___6430: undefined,
  e___6436: undefined,
  arg0: undefined,
  arg1: undefined,
  arg2: undefined,
} }





function helpers_splitMatch__P3042(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.r___6481 = undefined;
    s.s___6484 = undefined;
    s.i___6494 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.arg2 = (s.lambdaArgs[2]);
      s.lambdaArgs = null;
    }
    r0 = pxsim_String_.length(s.arg2);
    s.r___6481 = (r0);
    r0 = pxsim_String_.length(s.arg0);
    s.s___6484 = (r0);
    r0 = (s.arg1 + s.r___6481);
    s.tmp_1 = r0;
    r0 = (s.tmp_1 > s.s___6484);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 1; continue; }
    r0 = -1;
    { step = 7; continue; }
  case 1:
  case 2:
    s.i___6494 = (0);
  case 3:
    r0 = (s.i___6494 < s.r___6481);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 6; continue; }
    s.tmp_3 = r0 = s.arg0;
    r0 = (s.arg1 + s.i___6494);
    s.tmp_4 = r0;
    r0 = pxsim_String_.charAt(s.tmp_3, s.tmp_4);
    s.tmp_2 = r0;
    r0 = pxsim_String_.charAt(s.arg2, s.i___6494);
    s.tmp_5 = r0;
    r0 = (s.tmp_2 != s.tmp_5);
    s.tmp_1 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_1);
    if (!r0) { step = 4; continue; }
    r0 = -1;
    { step = 7; continue; }
  case 4:
  case 5:
    r0 = (s.i___6494 + 1);
    s.i___6494 = (r0);
    { step = 3; continue; }
  case 6:
    r0 = (s.arg1 + s.r___6481);
  case 7:
    return leave(s, r0)
  default: oops()
} } }
helpers_splitMatch__P3042.info = {"start":14244,"length":289,"line":480,"column":4,"endLine":489,"endColumn":5,"fileName":"pxt_modules/base/pxt-helpers.ts","functionName":"splitMatch","argumentNames":["S","q","R"]}

function helpers_splitMatch__P3042_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: helpers_splitMatch__P3042, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  tmp_4: undefined,
  tmp_5: undefined,
  r___6481: undefined,
  s___6484: undefined,
  i___6494: undefined,
  arg0: undefined,
  arg1: undefined,
  arg2: undefined,
} }





function helpers_arrayFilter__P110(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.res___6517 = undefined;
    s.len___6519 = undefined;
    s.i___6522 = undefined;
    s.v___6527 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.lambdaArgs = null;
    }
    r0 = pxsim_Array__mk();
    s.res___6517 = (r0);
    r0 = pxsim_Array__length(s.arg0);
    s.len___6519 = (r0);
    s.i___6522 = (0);
  case 1:
    r0 = (s.i___6522 < s.len___6519);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 4; continue; }
    r0 = pxsim_Array__getAt(s.arg0, s.i___6522);
    s.v___6527 = (r0);
    s.tmp_1 = lambda_3_mk(s);
    s.tmp_1.argL = s.arg1;
    s.tmp_1.arg0 = s.v___6527;
    s.tmp_1.arg1 = s.i___6522;
    setupLambda(s.tmp_1, s.tmp_1.argL);
    s.callLocIdx = 1; s.pc = 5; return s.tmp_1;
  case 5:
    r0 = s.retval;
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 2; continue; }
    r0 = pxsim_Array__push(s.res___6517, s.v___6527);
  case 2:
  case 3:
    r0 = (s.i___6522 + 1);
    s.i___6522 = (r0);
    { step = 1; continue; }
  case 4:
    r0 = s.res___6517;
    return leave(s, r0)
  default: oops()
} } }
helpers_arrayFilter__P110.info = {"start":7695,"length":317,"line":261,"column":4,"endLine":269,"endColumn":5,"fileName":"pxt_modules/base/pxt-helpers.ts","functionName":"arrayFilter","argumentNames":["arr","callbackfn"]}

function helpers_arrayFilter__P110_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: helpers_arrayFilter__P110, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  res___6517: undefined,
  len___6519: undefined,
  i___6522: undefined,
  v___6527: undefined,
  arg0: undefined,
  arg1: undefined,
} }





function helpers_arrayForEach__P109(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.len___6543 = undefined;
    s.i___6546 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.lambdaArgs = null;
    }
    r0 = pxsim_Array__length(s.arg0);
    s.len___6543 = (r0);
    s.i___6546 = (0);
  case 1:
    r0 = (s.i___6546 < s.len___6543);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 2; continue; }
    s.tmp_1 = lambda_3_mk(s);
    s.tmp_1.argL = s.arg1;
    r0 = pxsim_Array__getAt(s.arg0, s.i___6546);
    s.tmp_1.arg0 = r0;
    s.tmp_1.arg1 = s.i___6546;
    setupLambda(s.tmp_1, s.tmp_1.argL);
    s.callLocIdx = 0; s.pc = 3; return s.tmp_1;
  case 3:
    r0 = s.retval;
    r0 = (s.i___6546 + 1);
    s.i___6546 = (r0);
    { step = 1; continue; }
  case 2:
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
helpers_arrayForEach__P109.info = {"start":7439,"length":250,"line":254,"column":4,"endLine":259,"endColumn":5,"fileName":"pxt_modules/base/pxt-helpers.ts","functionName":"arrayForEach","argumentNames":["arr","callbackfn"]}

function helpers_arrayForEach__P109_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: helpers_arrayForEach__P109, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  len___6543: undefined,
  i___6546: undefined,
  arg0: undefined,
  arg1: undefined,
} }





function console_addListener__P383(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    r0 = pxsim_numops_toBoolDecr(s.arg0);
    s.tmp_1 = r0;
    r0 = pxsim_Boolean__bang(s.tmp_1);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBool(s.tmp_0);
    if (!r0) { step = 1; continue; }
    r0 = s.tmp_0;
    { step = 2; continue; }
  case 1:
    r0 = pxsim_Array_.indexOf(globals.listeners___3097, s.arg0, undefined);
    s.tmp_2 = r0;
    r0 = (s.tmp_2 > -1);
  case 2:
    // jmp value (already in r0)
    s.tmp_3 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_3);
    if (!r0) { step = 3; continue; }
    { step = 5; continue; }
  case 3:
  case 4:
    r0 = pxsim_Array__push(globals.listeners___3097, s.arg0);
  case 5:
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
console_addListener__P383.info = {"start":3558,"length":197,"line":121,"column":4,"endLine":124,"endColumn":5,"fileName":"pxt_modules/base/console.ts","functionName":"addListener","argumentNames":["listener"]}

function console_addListener__P383_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: console_addListener__P383, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  arg0: undefined,
} }





function Scene_constructor__P1781(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    r0 = s.arg0;
    if (!checkSubtype(r0, Scene__C1779_VT)) failedCast(r0);
    s.tmp_0 = r0 = s.arg0;
    r0 = pxsim_Array__mk();
    s.tmp_1 = r0;
    r0 = (s.tmp_0).fields["buttonEventHandlers"] = (s.tmp_1);
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
Scene_constructor__P1781.info = {"start":615,"length":59,"line":27,"column":4,"endLine":29,"endColumn":5,"fileName":"pxt_modules/game---light/compat.ts","functionName":"inline","argumentNames":["this"]}

function Scene_constructor__P1781_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: Scene_constructor__P1781, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  arg0: undefined,
} }





function settings_initScopes__P3209(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.rn___6580 = undefined;
    s.tmp_1 = settings_runNumber__P1741_mk(s);
    s.callLocIdx = 75; s.pc = 1; return s.tmp_1;
  case 1:
    r0 = s.retval;
    s.tmp_0 = r0;
    r0 = (s.tmp_0 + 1);
    s.rn___6580 = (r0);
    s.tmp_0 = settings_writeNumber__P1746_mk(s);
    s.tmp_0.arg0 = globals.RUN_KEY___3197;
    s.tmp_0.arg1 = s.rn___6580;
    s.callLocIdx = 76; s.pc = 2; return s.tmp_0;
  case 2:
    r0 = s.retval;
    r0 = pxsim.control.deviceSerialNumber();
    s.tmp_1 = r0;
    r0 = (s.tmp_1 & 2147483647);
    s.tmp_0 = r0;
    r0 = pxsim_pxtcore.seedAddRandom(s.tmp_0);
    r0 = pxsim_pxtcore.seedAddRandom(s.rn___6580);
    s.tmp_0 = settings_setScope__P3208_mk(s);
    r0 = pxsim_pxtcore.programName();
    s.tmp_0.arg0 = r0;
    s.callLocIdx = 77; s.pc = 3; return s.tmp_0;
  case 3:
    r0 = s.retval;
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
settings_initScopes__P3209.info = {"start":1104,"length":230,"line":41,"column":4,"endLine":49,"endColumn":5,"fileName":"pxt_modules/settings/settings.ts","functionName":"initScopes","argumentNames":[]}

function settings_initScopes__P3209_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: settings_initScopes__P3209, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  rn___6580: undefined,
} }





function settings_setScope__P3208(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.currScope___6609 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    r0 = pxsim_numops_toBoolDecr(s.arg0);
    s.tmp_1 = r0;
    r0 = pxsim_Boolean__bang(s.tmp_1);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBool(s.tmp_0);
    if (!r0) { step = 1; continue; }
    r0 = s.tmp_0;
    { step = 2; continue; }
  case 1:
    r0 = pxsim_String_.length(s.arg0);
    s.tmp_2 = r0;
    r0 = (s.tmp_2 > 100);
  case 2:
    // jmp value (already in r0)
    s.tmp_3 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_3);
    if (!r0) { step = 3; continue; }
    r0 = pxsim_pxtrt.panic(922);
  case 3:
  case 4:
    s.tmp_0 = settings_readString__P1749_mk(s);
    s.tmp_0.arg0 = globals.SCOPE_KEY___3198;
    s.callLocIdx = 73; s.pc = 7; return s.tmp_0;
  case 7:
    r0 = s.retval;
    s.currScope___6609 = (r0);
    r0 = (s.currScope___6609 != s.arg0);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 5; continue; }
    r0 = pxsim.settings._userClean();
    s.tmp_0 = settings_writeString__P1744_mk(s);
    s.tmp_0.arg0 = globals.SCOPE_KEY___3198;
    s.tmp_0.arg1 = s.arg0;
    s.callLocIdx = 74; s.pc = 8; return s.tmp_0;
  case 8:
    r0 = s.retval;
  case 5:
  case 6:
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
settings_setScope__P3208.info = {"start":826,"length":272,"line":31,"column":4,"endLine":39,"endColumn":5,"fileName":"pxt_modules/settings/settings.ts","functionName":"setScope","argumentNames":["scope"]}

function settings_setScope__P3208_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: settings_setScope__P3208, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  currScope___6609: undefined,
  arg0: undefined,
} }





function settings_readString__P1749(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.buf___6640 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    r0 = pxsim.settings._get(s.arg0);
    s.buf___6640 = (r0);
    r0 = pxsim_numops_toBoolDecr(s.buf___6640);
    s.tmp_1 = r0;
    r0 = pxsim_Boolean__bang(s.tmp_1);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 1; continue; }
    r0 = undefined;
    { step = 3; continue; }
    { step = 2; continue; }
  case 1:
    r0 = pxsim.BufferMethods.toString(s.buf___6640);
    { step = 3; continue; }
  case 2:
    r0 = undefined;
  case 3:
    return leave(s, r0)
  default: oops()
} } }
settings_readString__P1749.info = {"start":2827,"length":177,"line":110,"column":4,"endLine":116,"endColumn":5,"fileName":"pxt_modules/settings/settings.ts","functionName":"readString","argumentNames":["key"]}

function settings_readString__P1749_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: settings_readString__P1749, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  buf___6640: undefined,
  arg0: undefined,
} }





function settings_readBuffer__P1748(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    r0 = pxsim.settings._get(s.arg0);
    return leave(s, r0)
  default: oops()
} } }
settings_readBuffer__P1748.info = {"start":2694,"length":72,"line":103,"column":4,"endLine":105,"endColumn":5,"fileName":"pxt_modules/settings/settings.ts","functionName":"readBuffer","argumentNames":["key"]}

function settings_readBuffer__P1748_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: settings_readBuffer__P1748, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  arg0: undefined,
} }





function settings_writeString__P1744(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.lambdaArgs = null;
    }
    s.tmp_0 = settings_writeBuffer__P1743_mk(s);
    s.tmp_0.arg0 = s.arg0;
    r0 = pxsim.control.createBufferFromUTF8(s.arg1);
    s.tmp_0.arg1 = r0;
    s.callLocIdx = 79; s.pc = 1; return s.tmp_0;
  case 1:
    r0 = s.retval;
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
settings_writeString__P1744.info = {"start":1895,"length":125,"line":75,"column":4,"endLine":77,"endColumn":5,"fileName":"pxt_modules/settings/settings.ts","functionName":"writeString","argumentNames":["key","value"]}

function settings_writeString__P1744_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: settings_writeString__P1744, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  arg0: undefined,
  arg1: undefined,
} }





function settings_writeBuffer__P1743(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.lambdaArgs = null;
    }
    r0 = pxsim.settings._set(s.arg0, s.arg1);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 1; continue; }
    r0 = pxsim.settings._userClean();
    r0 = pxsim_pxtrt.panic(920);
  case 1:
  case 2:
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
settings_writeBuffer__P1743.info = {"start":1538,"length":290,"line":63,"column":4,"endLine":70,"endColumn":5,"fileName":"pxt_modules/settings/settings.ts","functionName":"writeBuffer","argumentNames":["key","value"]}

function settings_writeBuffer__P1743_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: settings_writeBuffer__P1743, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  arg0: undefined,
  arg1: undefined,
} }





function settings_writeNumber__P1746(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.lambdaArgs = null;
    }
    r0 = pxsim_Array__mk();
    s.tmp_0 = r0;
    r0 = pxsim_Array__push(s.tmp_0, s.arg1);
    s.tmp_1 = settings_writeBuffer__P1743_mk(s);
    s.tmp_1.arg0 = s.arg0;
    s.tmp_2 = msgpack_packNumberArray__P184_mk(s);
    s.tmp_2.arg0 = s.tmp_0;
    s.callLocIdx = 80; s.pc = 2; return s.tmp_2;
  case 2:
    r0 = s.retval;
    s.tmp_1.arg1 = r0;
    s.callLocIdx = 81; s.pc = 1; return s.tmp_1;
  case 1:
    r0 = s.retval;
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
settings_writeNumber__P1746.info = {"start":2265,"length":122,"line":89,"column":4,"endLine":91,"endColumn":5,"fileName":"pxt_modules/settings/settings.ts","functionName":"writeNumber","argumentNames":["key","value"]}

function settings_writeNumber__P1746_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: settings_writeNumber__P1746, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  arg0: undefined,
  arg1: undefined,
} }





function msgpack_packNumberArray__P184(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.off___6662 = undefined;
    s.n___6664 = undefined;
    s.unnamed10___U2 = undefined;
    s.unnamed11___U3 = undefined;
    s.buf___6674 = undefined;
    s.n___6680 = undefined;
    s.unnamed12___U6 = undefined;
    s.unnamed13___U7 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    s.off___6662 = (0);
    s.n___6664 = (undefined);
    s.unnamed10___U2 = (s.arg0);
    s.unnamed11___U3 = (0);
  case 1:
    s.tmp_0 = r0 = s.unnamed11___U3;
    r0 = pxsim_Array__length(s.unnamed10___U2);
    s.tmp_1 = r0;
    r0 = (s.tmp_0 < s.tmp_1);
    if (!r0) { step = 2; continue; }
    r0 = pxsim_Array__getAt(s.unnamed10___U2, s.unnamed11___U3);
    s.n___6664 = (r0);
    s.tmp_2 = r0 = s.off___6662;
    s.tmp_4 = msgpack_packNumberCore__P3056_mk(s);
    s.tmp_4.arg0 = null;
    s.tmp_4.arg1 = s.off___6662;
    s.tmp_4.arg2 = s.n___6664;
    s.callLocIdx = 18; s.pc = 5; return s.tmp_4;
  case 5:
    r0 = s.retval;
    s.tmp_3 = r0;
    r0 = (s.tmp_2 + s.tmp_3);
    s.off___6662 = (r0);
    r0 = (s.unnamed11___U3 + 1);
    s.unnamed11___U3 = (r0);
    { step = 1; continue; }
  case 2:
    s.unnamed10___U2 = (undefined);
    r0 = pxsim.control.createBuffer(s.off___6662);
    s.buf___6674 = (r0);
    s.off___6662 = (0);
    s.n___6680 = (undefined);
    s.unnamed12___U6 = (s.arg0);
    s.unnamed13___U7 = (0);
  case 3:
    s.tmp_0 = r0 = s.unnamed13___U7;
    r0 = pxsim_Array__length(s.unnamed12___U6);
    s.tmp_1 = r0;
    r0 = (s.tmp_0 < s.tmp_1);
    if (!r0) { step = 4; continue; }
    r0 = pxsim_Array__getAt(s.unnamed12___U6, s.unnamed13___U7);
    s.n___6680 = (r0);
    s.tmp_2 = r0 = s.off___6662;
    s.tmp_4 = msgpack_packNumberCore__P3056_mk(s);
    s.tmp_4.arg0 = s.buf___6674;
    s.tmp_4.arg1 = s.off___6662;
    s.tmp_4.arg2 = s.n___6680;
    s.callLocIdx = 19; s.pc = 6; return s.tmp_4;
  case 6:
    r0 = s.retval;
    s.tmp_3 = r0;
    r0 = (s.tmp_2 + s.tmp_3);
    s.off___6662 = (r0);
    r0 = (s.unnamed13___U7 + 1);
    s.unnamed13___U7 = (r0);
    { step = 3; continue; }
  case 4:
    s.unnamed12___U6 = (undefined);
    r0 = s.buf___6674;
    return leave(s, r0)
  default: oops()
} } }
msgpack_packNumberArray__P184.info = {"start":3427,"length":330,"line":117,"column":4,"endLine":128,"endColumn":5,"fileName":"pxt_modules/base/buffer.ts","functionName":"packNumberArray","argumentNames":["nums"]}

function msgpack_packNumberArray__P184_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: msgpack_packNumberArray__P184, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  tmp_4: undefined,
  off___6662: undefined,
  n___6664: undefined,
  unnamed10___U2: undefined,
  unnamed11___U3: undefined,
  buf___6674: undefined,
  n___6680: undefined,
  unnamed12___U6: undefined,
  unnamed13___U7: undefined,
  arg0: undefined,
} }





function msgpack_packNumberCore__P3056(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.tag___6694 = undefined;
    s.fmt___6737 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.arg2 = (s.lambdaArgs[2]);
      s.lambdaArgs = null;
    }
    s.tag___6694 = (203);
    s.tmp_1 = r0 = s.arg2;
    r0 = (s.arg2 << 0);
    s.tmp_2 = r0;
    r0 = (s.tmp_1 == s.tmp_2);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBool(s.tmp_0);
    if (!r0) { step = 1; continue; }
    r0 = s.tmp_0;
    { step = 2; continue; }
  case 1:
    s.tmp_3 = r0 = s.arg2;
    r0 = (s.arg2 >>> 0);
    s.tmp_4 = r0;
    r0 = (s.tmp_3 == s.tmp_4);
  case 2:
    // jmp value (already in r0)
    s.tmp_5 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_5);
    if (!r0) { step = 19; continue; }
    r0 = (-31 <= s.arg2);
    s.tmp_6 = r0;
    r0 = pxsim_numops_toBool(s.tmp_6);
    if (r0) { step = 3; continue; }
    r0 = s.tmp_6;
    { step = 4; continue; }
  case 3:
    r0 = (s.arg2 <= 127);
  case 4:
    // jmp value (already in r0)
    s.tmp_7 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_7);
    if (!r0) { step = 7; continue; }
    r0 = pxsim_numops_toBoolDecr(s.arg0);
    if (!r0) { step = 5; continue; }
    r0 = pxsim.BufferMethods.setByte(s.arg0, s.arg1, s.arg2);
  case 5:
  case 6:
    r0 = 1;
    { step = 23; continue; }
    { step = 18; continue; }
  case 7:
    r0 = (0 <= s.arg2);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 12; continue; }
    r0 = (s.arg2 <= 255);
    s.tmp_1 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_1);
    if (!r0) { step = 8; continue; }
    s.tag___6694 = (204);
    { step = 11; continue; }
  case 8:
    r0 = (s.arg2 <= 65535);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 9; continue; }
    s.tag___6694 = (205);
    { step = 10; continue; }
  case 9:
    s.tag___6694 = (206);
  case 10:
  case 11:
    { step = 17; continue; }
  case 12:
    r0 = (-127 <= s.arg2);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 13; continue; }
    s.tag___6694 = (208);
    { step = 16; continue; }
  case 13:
    r0 = (-32767 <= s.arg2);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 14; continue; }
    s.tag___6694 = (209);
    { step = 15; continue; }
  case 14:
    s.tag___6694 = (210);
  case 15:
  case 16:
  case 17:
  case 18:
  case 19:
  case 20:
    s.tmp_0 = msgpack_tagFormat__P3055_mk(s);
    s.tmp_0.arg0 = s.tag___6694;
    s.callLocIdx = 14; s.pc = 24; return s.tmp_0;
  case 24:
    r0 = s.retval;
    s.fmt___6737 = (r0);
    r0 = pxsim_numops_toBoolDecr(s.arg0);
    if (!r0) { step = 21; continue; }
    r0 = pxsim.BufferMethods.setByte(s.arg0, s.arg1, s.tag___6694);
    s.tmp_0 = r0 = s.arg0;
    s.tmp_1 = r0 = s.fmt___6737;
    r0 = (s.arg1 + 1);
    s.tmp_2 = r0;
    r0 = pxsim.BufferMethods.setNumber(s.tmp_0, s.tmp_1, s.tmp_2, s.arg2);
  case 21:
  case 22:
    s.tmp_1 = pins_sizeOf__P175_mk(s);
    s.tmp_1.arg0 = s.fmt___6737;
    s.callLocIdx = 15; s.pc = 25; return s.tmp_1;
  case 25:
    r0 = s.retval;
    s.tmp_0 = r0;
    r0 = (s.tmp_0 + 1);
  case 23:
    return leave(s, r0)
  default: oops()
} } }
msgpack_packNumberCore__P3056.info = {"start":1632,"length":951,"line":56,"column":4,"endLine":86,"endColumn":5,"fileName":"pxt_modules/base/buffer.ts","functionName":"packNumberCore","argumentNames":["buf","offset","num"]}

function msgpack_packNumberCore__P3056_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: msgpack_packNumberCore__P3056, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  tmp_4: undefined,
  tmp_5: undefined,
  tmp_6: undefined,
  tmp_7: undefined,
  tag___6694: undefined,
  fmt___6737: undefined,
  arg0: undefined,
  arg1: undefined,
  arg2: undefined,
} }





function msgpack_tagFormat__P3055(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    s.tmp_0 = r0 = s.arg0;
    r0 = pxsim_pxtcore.switch_eq(203, s.tmp_0);
    if (r0) { step = 1; continue; }
    r0 = pxsim_pxtcore.switch_eq(204, s.tmp_0);
    if (r0) { step = 2; continue; }
    r0 = pxsim_pxtcore.switch_eq(205, s.tmp_0);
    if (r0) { step = 3; continue; }
    r0 = pxsim_pxtcore.switch_eq(206, s.tmp_0);
    if (r0) { step = 4; continue; }
    r0 = pxsim_pxtcore.switch_eq(208, s.tmp_0);
    if (r0) { step = 5; continue; }
    r0 = pxsim_pxtcore.switch_eq(209, s.tmp_0);
    if (r0) { step = 6; continue; }
    r0 = pxsim_pxtcore.switch_eq(210, s.tmp_0);
    if (r0) { step = 7; continue; }
    r0 = s.tmp_0;
    { step = 8; continue; }
  case 1:
    r0 = 16;
    { step = 9; continue; }
  case 2:
    r0 = 7;
    { step = 9; continue; }
  case 3:
    r0 = 9;
    { step = 9; continue; }
  case 4:
    r0 = 12;
    { step = 9; continue; }
  case 5:
    r0 = 6;
    { step = 9; continue; }
  case 6:
    r0 = 8;
    { step = 9; continue; }
  case 7:
    r0 = 10;
    { step = 9; continue; }
  case 8:
    r0 = null;
    { step = 9; continue; }
    r0 = undefined;
  case 9:
    return leave(s, r0)
  default: oops()
} } }
msgpack_tagFormat__P3055.info = {"start":1145,"length":481,"line":42,"column":4,"endLine":54,"endColumn":5,"fileName":"pxt_modules/base/buffer.ts","functionName":"tagFormat","argumentNames":["tag"]}

function msgpack_tagFormat__P3055_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: msgpack_tagFormat__P3055, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  arg0: undefined,
} }





function pins_sizeOf__P175(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    s.tmp_0 = Buffer_sizeOfNumberFormat__P215_mk(s);
    s.tmp_0.arg0 = s.arg0;
    s.callLocIdx = 13; s.pc = 1; return s.tmp_0;
  case 1:
    r0 = s.retval;
    return leave(s, r0)
  default: oops()
} } }
pins_sizeOf__P175.info = {"start":42,"length":101,"line":2,"column":4,"endLine":4,"endColumn":5,"fileName":"pxt_modules/base/buffer.ts","functionName":"sizeOf","argumentNames":["format"]}

function pins_sizeOf__P175_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: pins_sizeOf__P175, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  arg0: undefined,
} }





function Buffer_sizeOfNumberFormat__P215(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    s.tmp_0 = r0 = s.arg0;
    r0 = pxsim_pxtcore.switch_eq(1, s.tmp_0);
    if (r0) { step = 1; continue; }
    r0 = pxsim_pxtcore.switch_eq(2, s.tmp_0);
    if (r0) { step = 2; continue; }
    r0 = pxsim_pxtcore.switch_eq(6, s.tmp_0);
    if (r0) { step = 3; continue; }
    r0 = pxsim_pxtcore.switch_eq(7, s.tmp_0);
    if (r0) { step = 4; continue; }
    r0 = pxsim_pxtcore.switch_eq(3, s.tmp_0);
    if (r0) { step = 5; continue; }
    r0 = pxsim_pxtcore.switch_eq(4, s.tmp_0);
    if (r0) { step = 6; continue; }
    r0 = pxsim_pxtcore.switch_eq(8, s.tmp_0);
    if (r0) { step = 7; continue; }
    r0 = pxsim_pxtcore.switch_eq(9, s.tmp_0);
    if (r0) { step = 8; continue; }
    r0 = pxsim_pxtcore.switch_eq(5, s.tmp_0);
    if (r0) { step = 9; continue; }
    r0 = pxsim_pxtcore.switch_eq(10, s.tmp_0);
    if (r0) { step = 10; continue; }
    r0 = pxsim_pxtcore.switch_eq(12, s.tmp_0);
    if (r0) { step = 11; continue; }
    r0 = pxsim_pxtcore.switch_eq(11, s.tmp_0);
    if (r0) { step = 12; continue; }
    r0 = pxsim_pxtcore.switch_eq(15, s.tmp_0);
    if (r0) { step = 13; continue; }
    r0 = pxsim_pxtcore.switch_eq(13, s.tmp_0);
    if (r0) { step = 14; continue; }
    r0 = pxsim_pxtcore.switch_eq(16, s.tmp_0);
    if (r0) { step = 15; continue; }
    r0 = pxsim_pxtcore.switch_eq(14, s.tmp_0);
    if (r0) { step = 16; continue; }
    r0 = s.tmp_0;
    { step = 17; continue; }
  case 1:
  case 2:
  case 3:
  case 4:
    r0 = 1;
    { step = 18; continue; }
  case 5:
  case 6:
  case 7:
  case 8:
    r0 = 2;
    { step = 18; continue; }
  case 9:
  case 10:
  case 11:
  case 12:
  case 13:
  case 14:
    r0 = 4;
    { step = 18; continue; }
  case 15:
  case 16:
    r0 = 8;
    { step = 18; continue; }
  case 17:
    r0 = 0;
  case 18:
    return leave(s, r0)
  default: oops()
} } }
Buffer_sizeOfNumberFormat__P215.info = {"start":14912,"length":856,"line":508,"column":4,"endLine":532,"endColumn":5,"fileName":"pxt_modules/base/buffer.ts","functionName":"sizeOfNumberFormat","argumentNames":["format"]}

function Buffer_sizeOfNumberFormat__P215_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: Buffer_sizeOfNumberFormat__P215, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  arg0: undefined,
} }





function settings_runNumber__P1741(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.tmp_1 = settings_readNumber__P1751_mk(s);
    s.tmp_1.arg0 = globals.RUN_KEY___3197;
    s.callLocIdx = 72; s.pc = 3; return s.tmp_1;
  case 3:
    r0 = s.retval;
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBool(s.tmp_0);
    if (!r0) { step = 1; continue; }
    r0 = s.tmp_0;
    { step = 2; continue; }
  case 1:
    r0 = 0;
  case 2:
    // jmp value (already in r0)
    s.tmp_2 = r0;
    r0 = s.tmp_2;
    return leave(s, r0)
  default: oops()
} } }
settings_runNumber__P1741.info = {"start":745,"length":75,"line":27,"column":4,"endLine":29,"endColumn":5,"fileName":"pxt_modules/settings/settings.ts","functionName":"runNumber","argumentNames":[]}

function settings_runNumber__P1741_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: settings_runNumber__P1741, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
} }





function settings_readNumber__P1751(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.buf___6796 = undefined;
    s.nums___6803 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    r0 = pxsim.settings._get(s.arg0);
    s.buf___6796 = (r0);
    r0 = pxsim_numops_toBoolDecr(s.buf___6796);
    s.tmp_1 = r0;
    r0 = pxsim_Boolean__bang(s.tmp_1);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 1; continue; }
    r0 = undefined;
    { step = 7; continue; }
    { step = 6; continue; }
  case 1:
    s.tmp_2 = msgpack_unpackNumberArray__P183_mk(s);
    s.tmp_2.arg0 = s.buf___6796;
    s.tmp_2.arg1 = 0;
    s.callLocIdx = 84; s.pc = 8; return s.tmp_2;
  case 8:
    r0 = s.retval;
    s.nums___6803 = (r0);
    s.tmp_0 = r0 = s.nums___6803;
    r0 = pxsim_numops_toBool(s.tmp_0);
    if (r0) { step = 2; continue; }
    r0 = s.tmp_0;
    { step = 3; continue; }
  case 2:
    r0 = pxsim_Array__length(s.nums___6803);
    s.tmp_1 = r0;
    r0 = (s.tmp_1 >= 1);
  case 3:
    // jmp value (already in r0)
    s.tmp_2 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_2);
    if (!r0) { step = 4; continue; }
    r0 = pxsim_Array__getAt(s.nums___6803, 0);
    { step = 7; continue; }
  case 4:
  case 5:
    r0 = undefined;
    { step = 7; continue; }
  case 6:
    r0 = undefined;
  case 7:
    return leave(s, r0)
  default: oops()
} } }
settings_readNumber__P1751.info = {"start":3283,"length":313,"line":131,"column":4,"endLine":141,"endColumn":5,"fileName":"pxt_modules/settings/settings.ts","functionName":"readNumber","argumentNames":["key"]}

function settings_readNumber__P1751_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: settings_readNumber__P1751, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  buf___6796: undefined,
  nums___6803: undefined,
  arg0: undefined,
} }





function msgpack_unpackNumberArray__P183(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.res___6816 = undefined;
    s.fmt___6823 = undefined;
    s.v___6832 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.lambdaArgs = null;
    }
    r0 = pxsim_Array__mk();
    s.res___6816 = (r0);
  case 1:
    s.tmp_1 = r0 = s.arg1;
    r0 = pxsim.BufferMethods.length(s.arg0);
    s.tmp_2 = r0;
    r0 = (s.tmp_1 < s.tmp_2);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 10; continue; }
    s.tmp_3 = r0 = s.arg1;
    r0 = (s.tmp_3 + 1);
    s.arg1 = (r0);
    s.tmp_4 = msgpack_tagFormat__P3055_mk(s);
    r0 = pxsim.BufferMethods.getByte(s.arg0, s.tmp_3);
    s.tmp_4.arg0 = r0;
    s.callLocIdx = 16; s.pc = 12; return s.tmp_4;
  case 12:
    r0 = s.retval;
    s.fmt___6823 = (r0);
    r0 = (s.fmt___6823 === null);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 6; continue; }
    s.tmp_1 = r0 = s.arg0;
    r0 = (s.arg1 - 1);
    s.tmp_2 = r0;
    r0 = pxsim.BufferMethods.getNumber(s.tmp_1, 6, s.tmp_2);
    s.v___6832 = (r0);
    r0 = (-31 <= s.v___6832);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBool(s.tmp_0);
    if (r0) { step = 2; continue; }
    r0 = s.tmp_0;
    { step = 3; continue; }
  case 2:
    r0 = (s.v___6832 <= 127);
  case 3:
    // jmp value (already in r0)
    s.tmp_1 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_1);
    if (!r0) { step = 4; continue; }
    r0 = pxsim_Array__push(s.res___6816, s.v___6832);
    { step = 5; continue; }
  case 4:
    r0 = null;
    { step = 11; continue; }
  case 5:
    { step = 7; continue; }
  case 6:
    s.tmp_0 = r0 = s.res___6816;
    r0 = pxsim.BufferMethods.getNumber(s.arg0, s.fmt___6823, s.arg1);
    s.tmp_1 = r0;
    r0 = pxsim_Array__push(s.tmp_0, s.tmp_1);
    s.tmp_0 = r0 = s.arg1;
    s.tmp_2 = pins_sizeOf__P175_mk(s);
    s.tmp_2.arg0 = s.fmt___6823;
    s.callLocIdx = 17; s.pc = 13; return s.tmp_2;
  case 13:
    r0 = s.retval;
    s.tmp_1 = r0;
    r0 = (s.tmp_0 + s.tmp_1);
    s.arg1 = (r0);
  case 7:
  case 8:
    r0 = pxsim.BufferMethods.getByte(s.arg0, s.arg1);
    s.tmp_1 = r0;
    r0 = (s.tmp_1 === 193);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 9; continue; }
    r0 = (s.arg1 + 1);
    s.arg1 = (r0);
    { step = 8; continue; }
  case 9:
    { step = 1; continue; }
  case 10:
    r0 = s.res___6816;
  case 11:
    return leave(s, r0)
  default: oops()
} } }
msgpack_unpackNumberArray__P183.info = {"start":2650,"length":669,"line":91,"column":4,"endLine":111,"endColumn":5,"fileName":"pxt_modules/base/buffer.ts","functionName":"unpackNumberArray","argumentNames":["buf","offset"]}

function msgpack_unpackNumberArray__P183_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: msgpack_unpackNumberArray__P183, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  tmp_4: undefined,
  res___6816: undefined,
  fmt___6823: undefined,
  v___6832: undefined,
  arg0: undefined,
  arg1: undefined,
} }





function control___screen_setupUpdate__P1677(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    globals.__updated___3164 = (true);
    globals.__update___3162 = (s.arg0);
    s.tmp_0 = lambda_1_mk(s);
    s.tmp_0.argL = s.arg0;
    setupLambda(s.tmp_0, s.tmp_0.argL);
    s.callLocIdx = 66; s.pc = 1; return s.tmp_0;
  case 1:
    r0 = s.retval;
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
control___screen_setupUpdate__P1677.info = {"start":198,"length":125,"line":10,"column":4,"endLine":14,"endColumn":5,"fileName":"pxt_modules/screen/frame.ts","functionName":"setupUpdate","argumentNames":["update"]}

function control___screen_setupUpdate__P1677_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: control___screen_setupUpdate__P1677, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  arg0: undefined,
} }





function _screen_internal_getScreenHeight__P1720(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    r0 = pxsim_pxtcore.getConfig(2103, s.arg0);
    return leave(s, r0)
  default: oops()
} } }
_screen_internal_getScreenHeight__P1720.info = {"start":960,"length":127,"line":28,"column":4,"endLine":30,"endColumn":5,"fileName":"pxt_modules/screen/targetoverrides.ts","functionName":"getScreenHeight","argumentNames":["defl"]}

function _screen_internal_getScreenHeight__P1720_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: _screen_internal_getScreenHeight__P1720, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  arg0: undefined,
} }





function _screen_internal_getScreenWidth__P1719(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    r0 = pxsim_pxtcore.getConfig(2102, s.arg0);
    return leave(s, r0)
  default: oops()
} } }
_screen_internal_getScreenWidth__P1719.info = {"start":810,"length":125,"line":23,"column":4,"endLine":25,"endColumn":5,"fileName":"pxt_modules/screen/targetoverrides.ts","functionName":"getScreenWidth","argumentNames":["defl"]}

function _screen_internal_getScreenWidth__P1719_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: _screen_internal_getScreenWidth__P1719, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  arg0: undefined,
} }





function control___screen_update__P1676(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    r0 = pxsim_numops_toBoolDecr(globals.__update___3162);
    if (!r0) { step = 1; continue; }
    s.tmp_0 = lambda_1_mk(s);
    s.tmp_0.argL = globals.__update___3162;
    setupLambda(s.tmp_0, s.tmp_0.argL);
    s.callLocIdx = 65; s.pc = 3; return s.tmp_0;
  case 3:
    r0 = s.retval;
  case 1:
  case 2:
    globals.__updated___3164 = (true);
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
control___screen_update__P1676.info = {"start":90,"length":102,"line":4,"column":4,"endLine":8,"endColumn":5,"fileName":"pxt_modules/screen/frame.ts","functionName":"update","argumentNames":[]}

function control___screen_update__P1676_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: control___screen_update__P1676, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
} }





function pause__P413(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    setupResume(s, 1);
    pxsim.loops.pause(s.arg0);
    checkResumeConsumed();
    return;
  case 1:
    r0 = s.retval;
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
pause__P413.info = {"start":246,"length":57,"line":7,"column":0,"endLine":9,"endColumn":1,"fileName":"pxt_modules/base/pause.ts","functionName":"pause","argumentNames":["ms"]}

function pause__P413_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: pause__P413, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  arg0: undefined,
} }




function lambda_4_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: null, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  tmp_4: undefined,
  arg0: undefined,
  arg1: undefined,
  arg2: undefined,
  arg3: undefined,
} }


function lambda_3_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: null, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  tmp_4: undefined,
  arg0: undefined,
  arg1: undefined,
  arg2: undefined,
} }


function if_handler_1_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: null, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  tmp_4: undefined,
  arg0: undefined,
} }


function lambda_1_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: null, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  tmp_4: undefined,
  arg0: undefined,
} }


function if_condition_1_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: null, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  tmp_4: undefined,
  arg0: undefined,
} }


function if_charHeight_1_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: null, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  tmp_4: undefined,
  arg0: undefined,
} }


function if_charWidth_1_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: null, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  tmp_4: undefined,
  arg0: undefined,
} }

const Scene__C1779_VT = mkVTable({
  name: "Scene",
  numFields: 1,
  classNo: 16,
  lastSubtypeNo: 16,
  maxBgInstances: null,
  methods: {
  },
  iface: {
    "buttonEventHandlers": null,
    "set/buttonEventHandlers": null,
  },
});
const control_EventContext__C395_VT = mkVTable({
  name: "EventContext",
  numFields: 10,
  classNo: 17,
  lastSubtypeNo: 17,
  maxBgInstances: null,
  methods: {
  },
  iface: {
    "handlers": null,
    "set/handlers": null,
    "frameCallbacks": null,
    "set/frameCallbacks": null,
    "frameWorker": null,
    "set/frameWorker": null,
    "framesInSample": null,
    "set/framesInSample": null,
    "timeInSample": null,
    "set/timeInSample": null,
    "lastPerfDump": null,
    "set/lastPerfDump": null,
    "deltaTimeMillis": null,
    "set/deltaTimeMillis": null,
    "prevTimeMillis": null,
    "set/prevTimeMillis": null,
    "idleCallbacks": null,
    "set/idleCallbacks": null,
    "runningCallbacks": null,
    "set/runningCallbacks": null,
    "runCallbacks": control_EventContext_runCallbacks__P3116,
    "registerFrameCallbacks": control_EventContext_registerFrameCallbacks__P3117,
    "unregister": control_EventContext_unregister__P402,
    "registerFrameHandler": control_EventContext_registerFrameHandler__P403,
    "registerHandler": control_EventContext_registerHandler__P405,
  },
});
const control_FrameCallback__C392_VT = mkVTable({
  name: "FrameCallback",
  numFields: 2,
  classNo: 18,
  lastSubtypeNo: 18,
  maxBgInstances: null,
  methods: {
  },
  iface: {
    "order": null,
    "set/order": null,
    "handler": null,
    "set/handler": null,
  },
});
const control_PollEvent__C3090_VT = mkVTable({
  name: "PollEvent",
  numFields: 6,
  classNo: 19,
  lastSubtypeNo: 19,
  maxBgInstances: null,
  methods: {
  },
  iface: {
    "eid": null,
    "set/eid": null,
    "vid": null,
    "set/vid": null,
    "start": null,
    "set/start": null,
    "timeOut": null,
    "set/timeOut": null,
    "condition": null,
    "set/condition": null,
    "once": null,
    "set/once": null,
  },
});
const control_EventHandler__C3111_VT = mkVTable({
  name: "EventHandler",
  numFields: 4,
  classNo: 20,
  lastSubtypeNo: 20,
  maxBgInstances: null,
  methods: {
  },
  iface: {
    "src": null,
    "set/src": null,
    "value": null,
    "set/value": null,
    "handler": null,
    "set/handler": null,
    "flags": null,
    "set/flags": null,
    "register": control_EventHandler_register__P3112,
    "unregister": control_EventHandler_unregister__P3113,
  },
});

const breakpoints = setupDebugger(1, ["num___8136"])

return _main___P8510
})

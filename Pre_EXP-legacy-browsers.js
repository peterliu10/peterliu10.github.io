/**************** 
 * Pre_Exp *
 ****************/


// store info about the experiment session:
let expName = 'Pre_EXP';  // from the Builder filename that created this script
let expInfo = {
    'participant': `${util.pad(Number.parseFloat(util.randint(0, 999999)).toFixed(0), 6)}`,
    'session': '001',
};

// Start code blocks for 'Before Experiment'
// Run 'Before Experiment' code from Total_code
Punish_storage = 0;
Choice_Final = 0;
A = "k";
Rank_1 = 0;
Rank_2 = 0;
Rank_3 = 0;
Punish_Final = "k";

// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),
  units: 'height',
  waitBlanking: true,
  backgroundImage: '',
  backgroundFit: 'none',
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); },flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(IntroRoutineBegin());
flowScheduler.add(IntroRoutineEachFrame());
flowScheduler.add(IntroRoutineEnd());
const Block_3LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(Block_3LoopBegin(Block_3LoopScheduler));
flowScheduler.add(Block_3LoopScheduler);
flowScheduler.add(Block_3LoopEnd);












flowScheduler.add(quitPsychoJS, 'Thank you for your patience.', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, 'Thank you for your patience.', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    // resources:
    {'name': 'Block.xlsx', 'path': 'Block.xlsx'},
    {'name': 'Exp.xlsx', 'path': 'Exp.xlsx'},
    {'name': 'R.png', 'path': 'R.png'},
    {'name': 'L.png', 'path': 'L.png'},
    {'name': 'Black.png', 'path': 'Black.png'},
    {'name': 'Coin.png', 'path': 'Coin.png'},
    {'name': 'Broken.png', 'path': 'Broken.png'},
    {'name': '500.png', 'path': '500.png'},
    {'name': '500Broken.png', 'path': '500Broken.png'},
    {'name': '100.png', 'path': '100.png'},
    {'name': '100Broken.png', 'path': '100Broken.png'},
    {'name': 'default.png', 'path': 'https://pavlovia.org/assets/default/default.png'},
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.INFO);


var currentLoop;
var frameDur;
async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2024.2.3';
  expInfo['OS'] = window.navigator.platform;


  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  

  
  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expInfo["participant"]}_${expName}_${expInfo["date"]}`);
  psychoJS.experiment.field_separator = '\t';


  return Scheduler.Event.NEXT;
}


var IntroClock;
var Punish_storage;
var Game_3Clock;
var backkground;
var arrowStim;
var resp;
var Rank1Clock;
var RankText;
var RankText_2;
var COINVALUE;
var Message_1Clock;
var text;
var ChoiceClock;
var text_4;
var text_5;
var Choice_resp;
var Wait_PunishClock;
var text_2;
var PunishClock;
var target_group;
var Punish_resp;
var CL1;
var target_cloth;
var text_9;
var FeedbackClock;
var text_6;
var text_7;
var text_3;
var Rw_1_image;
var Rw_2_image;
var Rw_3_image;
var text_8;
var Blank_trailClock;
var Blakn;
var RestClock;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "Intro"
  IntroClock = new util.Clock();
  // Run 'Begin Experiment' code from Total_code
  Punish_storage = 0;
  
  // Initialize components for Routine "Game_3"
  Game_3Clock = new util.Clock();
  backkground = new visual.Rect ({
    win: psychoJS.window, name: 'backkground', 
    width: [0.8, 0.8][0], height: [0.8, 0.8][1],
    ori: 0.0, 
    pos: [0, 0], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new util.Color('white'), 
    fillColor: new util.Color('white'), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -1, 
    interpolate: true, 
  });
  
  arrowStim = new visual.ImageStim({
    win : psychoJS.window,
    name : 'arrowStim', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [0.5, 0.5],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Rank1"
  Rank1Clock = new util.Clock();
  RankText = new visual.TextStim({
    win: psychoJS.window,
    name: 'RankText',
    text: '     \u3000あなたは\u3000\u3000\u3000\u3000\u3000\u3000になりました\n\nBプレイヤーは\u3000\u3000\u3000\u3000\u3000\u3000になりました\n\nCプレイヤーは\u3000\u3000\u3000\u3000\u3000\u3000になりました',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.06,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  RankText_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'RankText_2',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.06,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  COINVALUE = new visual.ImageStim({
    win : psychoJS.window,
    name : 'COINVALUE', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0.3], 
    draggable: false,
    size : [0.2, 0.2],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -3.0 
  });
  // Initialize components for Routine "Message_1"
  Message_1Clock = new util.Clock();
  text = new visual.TextStim({
    win: psychoJS.window,
    name: 'text',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.06,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  // Initialize components for Routine "Choice"
  ChoiceClock = new util.Clock();
  text_4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_4',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.2), 0], draggable: false, height: 0.06,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  text_5 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_5',
    text: '●',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([1.0, (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -2.0 
  });
  
  Choice_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Wait_Punish"
  Wait_PunishClock = new util.Clock();
  text_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_2',
    text: '他のプレイヤーを待っています',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  // Initialize components for Routine "Punish"
  PunishClock = new util.Clock();
  // Run 'Begin Experiment' code from code_5
  target_group = "Coin.png";
  
  Punish_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  CL1 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'CL1', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [0.15, 0.15],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -3.0 
  });
  target_cloth = new visual.ImageStim({
    win : psychoJS.window,
    name : 'target_cloth', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0.3], 
    draggable: false,
    size : [0.2, 0.2],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -4.0 
  });
  text_9 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_9',
    text: 'F: 返却          J: 破壊',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.22)], draggable: false, height: 0.06,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -5.0 
  });
  
  // Initialize components for Routine "Feedback"
  FeedbackClock = new util.Clock();
  text_6 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_6',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.1), 0.152], draggable: false, height: 0.06,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  text_7 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_7',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.1), 0.015], draggable: false, height: 0.06,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  text_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_3',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.1), (- 0.122)], draggable: false, height: 0.06,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  Rw_1_image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'Rw_1_image', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0.1, 0.152], 
    draggable: false,
    size : [0.05, 0.05],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -4.0 
  });
  Rw_2_image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'Rw_2_image', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0.1, 0.015], 
    draggable: false,
    size : [0.05, 0.05],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -5.0 
  });
  Rw_3_image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'Rw_3_image', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0.1, (- 0.122)], 
    draggable: false,
    size : [0.05, 0.05],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -6.0 
  });
  text_8 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_8',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0.18, 0.152], draggable: false, height: 0.06,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -7.0 
  });
  
  // Initialize components for Routine "Blank_trail"
  Blank_trailClock = new util.Clock();
  Blakn = new visual.TextStim({
    win: psychoJS.window,
    name: 'Blakn',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Initialize components for Routine "Rest"
  RestClock = new util.Clock();
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var IntroMaxDurationReached;
var IntroMaxDuration;
var IntroComponents;
function IntroRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Intro' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    IntroMaxDurationReached = false;
    // update component parameters for each repeat
    psychoJS.experiment.addData('Intro.started', globalClock.getTime());
    IntroMaxDuration = null
    // keep track of which components have finished
    IntroComponents = [];
    
    IntroComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function IntroRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Intro' ---
    // get current time
    t = IntroClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    IntroComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function IntroRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Intro' ---
    IntroComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('Intro.stopped', globalClock.getTime());
    // the Routine "Intro" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var Block_3;
function Block_3LoopBegin(Block_3LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    Block_3 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'Block.xlsx',
      seed: undefined, name: 'Block_3'
    });
    psychoJS.experiment.addLoop(Block_3); // add the loop to the experiment
    currentLoop = Block_3;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    Block_3.forEach(function() {
      snapshot = Block_3.getSnapshot();
    
      Block_3LoopScheduler.add(importConditions(snapshot));
      const Single_trailLoopScheduler = new Scheduler(psychoJS);
      Block_3LoopScheduler.add(Single_trailLoopBegin(Single_trailLoopScheduler, snapshot));
      Block_3LoopScheduler.add(Single_trailLoopScheduler);
      Block_3LoopScheduler.add(Single_trailLoopEnd);
      Block_3LoopScheduler.add(RestRoutineBegin(snapshot));
      Block_3LoopScheduler.add(RestRoutineEachFrame());
      Block_3LoopScheduler.add(RestRoutineEnd(snapshot));
      Block_3LoopScheduler.add(Block_3LoopEndIteration(Block_3LoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


var Single_trail;
function Single_trailLoopBegin(Single_trailLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    Single_trail = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: TrialHandler.importConditions(psychoJS.serverManager, 'Exp.xlsx', '0:3'),
      seed: undefined, name: 'Single_trail'
    });
    psychoJS.experiment.addLoop(Single_trail); // add the loop to the experiment
    currentLoop = Single_trail;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    Single_trail.forEach(function() {
      snapshot = Single_trail.getSnapshot();
    
      Single_trailLoopScheduler.add(importConditions(snapshot));
      Single_trailLoopScheduler.add(Game_3RoutineBegin(snapshot));
      Single_trailLoopScheduler.add(Game_3RoutineEachFrame());
      Single_trailLoopScheduler.add(Game_3RoutineEnd(snapshot));
      Single_trailLoopScheduler.add(Rank1RoutineBegin(snapshot));
      Single_trailLoopScheduler.add(Rank1RoutineEachFrame());
      Single_trailLoopScheduler.add(Rank1RoutineEnd(snapshot));
      Single_trailLoopScheduler.add(Message_1RoutineBegin(snapshot));
      Single_trailLoopScheduler.add(Message_1RoutineEachFrame());
      Single_trailLoopScheduler.add(Message_1RoutineEnd(snapshot));
      Single_trailLoopScheduler.add(ChoiceRoutineBegin(snapshot));
      Single_trailLoopScheduler.add(ChoiceRoutineEachFrame());
      Single_trailLoopScheduler.add(ChoiceRoutineEnd(snapshot));
      Single_trailLoopScheduler.add(Wait_PunishRoutineBegin(snapshot));
      Single_trailLoopScheduler.add(Wait_PunishRoutineEachFrame());
      Single_trailLoopScheduler.add(Wait_PunishRoutineEnd(snapshot));
      Single_trailLoopScheduler.add(PunishRoutineBegin(snapshot));
      Single_trailLoopScheduler.add(PunishRoutineEachFrame());
      Single_trailLoopScheduler.add(PunishRoutineEnd(snapshot));
      Single_trailLoopScheduler.add(FeedbackRoutineBegin(snapshot));
      Single_trailLoopScheduler.add(FeedbackRoutineEachFrame());
      Single_trailLoopScheduler.add(FeedbackRoutineEnd(snapshot));
      Single_trailLoopScheduler.add(Blank_trailRoutineBegin(snapshot));
      Single_trailLoopScheduler.add(Blank_trailRoutineEachFrame());
      Single_trailLoopScheduler.add(Blank_trailRoutineEnd(snapshot));
      Single_trailLoopScheduler.add(Single_trailLoopEndIteration(Single_trailLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function Single_trailLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(Single_trail);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function Single_trailLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


async function Block_3LoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(Block_3);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function Block_3LoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var Game_3MaxDurationReached;
var arrow_list;
var correct_keys;
var Choice_Final;
var current_arrow;
var reaction_times;
var trial_start_time;
var waiting_for_end;
var back_color;
var back_color_num;
var Rank_list;
var Block_stage;
var Rank;
var _resp_allKeys;
var Game_3MaxDuration;
var Game_3Components;
function Game_3RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Game_3' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(4.000000);
    Game_3MaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code_in_Practice
    arrow_list = [arrow1, arrow2, arrow3, arrow4, arrow5, arrow_black];
    correct_keys = [key1, key2, key3, key4, key5, "space"];
    Choice_Final = 0;
    current_arrow = 0;
    reaction_times = [];
    trial_start_time = globalClock.getTime();
    waiting_for_end = false;
    arrowStim.image = arrow_list[current_arrow];
    continueRoutine = true;
    back_color = "blue";
    back_color_num = 0;
    Rank_list = [Rank_1, Rank_2, Rank_3];
    Block_stage = (Number.parseInt(Block_num) - 1);
    console.log(Rank_list[Block_stage]);
    Rank = Number.parseInt(Rank_list[Block_stage]);
    if ((Rank === 0)) {
        continueRoutine = false;
    }
    
    resp.keys = undefined;
    resp.rt = undefined;
    _resp_allKeys = [];
    psychoJS.experiment.addData('Game_3.started', globalClock.getTime());
    Game_3MaxDuration = null
    // keep track of which components have finished
    Game_3Components = [];
    Game_3Components.push(backkground);
    Game_3Components.push(arrowStim);
    Game_3Components.push(resp);
    
    Game_3Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


var current_time;
var elapsed_time;
var keys;
var key;
var rt;
var waiting_start_time;
var frameRemains;
function Game_3RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Game_3' ---
    // get current time
    t = Game_3Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // Run 'Each Frame' code from code_in_Practice
    current_time = globalClock.getTime();
    elapsed_time = (current_time - trial_start_time);
    keys = resp.getKeys();
    if ((keys && (! waiting_for_end))) {
        key = keys[0];
        rt = keys[0].rt;
        if ((key.name === correct_keys[current_arrow])) {
            reaction_times.push(rt);
            current_arrow += 1;
            back_color_num += 1;
            if (((back_color_num % 2) === 1)) {
                back_color = "green";
            } else {
                back_color = "blue";
            }
            if ((current_arrow >= (arrow_list.length - 1))) {
                waiting_for_end = true;
                current_arrow = 5;
                waiting_start_time = globalClock.getTime();
                arrowStim.image = "Black.png";
            } else {
                arrowStim.image = arrow_list[current_arrow];
            }
        }
    }
    if ((elapsed_time >= 4)) {
        continueRoutine = false;
    }
    if (waiting_for_end) {
        if (((globalClock.getTime() - trial_start_time) >= 4)) {
            continueRoutine = false;
        }
    }
    
    
    if (backkground.status === PsychoJS.Status.STARTED){ // only update if being drawn
      backkground.setFillColor(new util.Color(back_color), false);
    }
    
    // *backkground* updates
    if (t >= 0 && backkground.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      backkground.tStart = t;  // (not accounting for frame time here)
      backkground.frameNStart = frameN;  // exact frame index
      
      backkground.setAutoDraw(true);
    }
    
    frameRemains = 0 + 4 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (backkground.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      backkground.setAutoDraw(false);
    }
    
    
    if (arrowStim.status === PsychoJS.Status.STARTED){ // only update if being drawn
      arrowStim.setImage(arrow_list[current_arrow], false);
    }
    
    // *arrowStim* updates
    if (t >= 0 && arrowStim.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      arrowStim.tStart = t;  // (not accounting for frame time here)
      arrowStim.frameNStart = frameN;  // exact frame index
      
      arrowStim.setAutoDraw(true);
    }
    
    frameRemains = 0 + 4 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (arrowStim.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      arrowStim.setAutoDraw(false);
    }
    
    
    // *resp* updates
    if (t >= 0.0 && resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      resp.tStart = t;  // (not accounting for frame time here)
      resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { resp.clearEvents(); });
    }
    
    frameRemains = 0.0 + 4 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (resp.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      resp.status = PsychoJS.Status.FINISHED;
        }
      
    if (resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = resp.getKeys({keyList: ['j', 'f'], waitRelease: false});
      _resp_allKeys = _resp_allKeys.concat(theseKeys);
      if (_resp_allKeys.length > 0) {
        resp.keys = _resp_allKeys.map((key) => key.name);  // storing all keys
        resp.rt = _resp_allKeys.map((key) => key.rt);
        resp.duration = _resp_allKeys.map((key) => key.duration);
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    Game_3Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Game_3RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Game_3' ---
    Game_3Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('Game_3.stopped', globalClock.getTime());
    // Run 'End Routine' code from code_in_Practice
    psychoJS.experiment.addData("ReactionTimes", reaction_times);
    psychoJS.experiment.addData("TotalArrowsReacted", current_arrow);
    psychoJS.experiment.addData("TrialDuration", 4);
    
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(resp.corr, level);
    }
    psychoJS.experiment.addData('resp.keys', resp.keys);
    if (typeof resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('resp.rt', resp.rt);
        psychoJS.experiment.addData('resp.duration', resp.duration);
        }
    
    resp.stop();
    if (Game_3MaxDurationReached) {
        Game_3Clock.add(Game_3MaxDuration);
    } else {
        Game_3Clock.add(4.000000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var Rank1MaxDurationReached;
var Coin_list;
var Broken_list;
var COIN;
var Rank_moji;
var Rank1MaxDuration;
var Rank1Components;
function Rank1RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Rank1' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(2.500000);
    Rank1MaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code
    Rank_list = [Rank_1, Rank_2, Rank_3];
    Block_stage = (Number.parseInt(Block_num) - 1);
    Rank = Number.parseInt(Rank_list[Block_stage]);
    if ((Rank === 0)) {
        continueRoutine = false;
    }
    Coin_list = [Coin_1, Coin_2, Coin_3];
    Broken_list = [Coin_1_broken, Coin_2_broken, Coin_3_broken];
    COIN = Coin_list[Block_stage];
    if ((Rank === 1)) {
        Rank_moji = "\u4e00\u4f4d\n\n\u4e8c\u4f4d\n\n\u4e09\u4f4d";
    } else {
        if ((Rank === 2)) {
            Rank_moji = "\u4e8c\u4f4d\n\n\u4e00\u4f4d\n\n\u4e09\u4f4d";
        } else {
            Rank_moji = "\u4e09\u4f4d\n\n\u4e00\u4f4d\n\n\u4e8c\u4f4d";
        }
    }
    
    RankText_2.setText(Rank_moji);
    COINVALUE.setImage(COIN);
    psychoJS.experiment.addData('Rank1.started', globalClock.getTime());
    Rank1MaxDuration = null
    // keep track of which components have finished
    Rank1Components = [];
    Rank1Components.push(RankText);
    Rank1Components.push(RankText_2);
    Rank1Components.push(COINVALUE);
    
    Rank1Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function Rank1RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Rank1' ---
    // get current time
    t = Rank1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *RankText* updates
    if (t >= 0.0 && RankText.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      RankText.tStart = t;  // (not accounting for frame time here)
      RankText.frameNStart = frameN;  // exact frame index
      
      RankText.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 2.5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (RankText.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      RankText.setAutoDraw(false);
    }
    
    
    // *RankText_2* updates
    if (t >= 0.0 && RankText_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      RankText_2.tStart = t;  // (not accounting for frame time here)
      RankText_2.frameNStart = frameN;  // exact frame index
      
      RankText_2.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 2.5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (RankText_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      RankText_2.setAutoDraw(false);
    }
    
    
    // *COINVALUE* updates
    if (t >= 0.0 && COINVALUE.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      COINVALUE.tStart = t;  // (not accounting for frame time here)
      COINVALUE.frameNStart = frameN;  // exact frame index
      
      COINVALUE.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 2.5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (COINVALUE.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      COINVALUE.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    Rank1Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Rank1RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Rank1' ---
    Rank1Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('Rank1.stopped', globalClock.getTime());
    if (Rank1MaxDurationReached) {
        Rank1Clock.add(Rank1MaxDuration);
    } else {
        Rank1Clock.add(2.500000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var Message_1MaxDurationReached;
var Message_champion;
var Message_1MaxDuration;
var Message_1Components;
function Message_1RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Message_1' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(2.500000);
    Message_1MaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code_2
    Rank_list = [Rank_1, Rank_2, Rank_3];
    Block_stage = (Number.parseInt(Block_num) - 1);
    Rank = Number.parseInt(Rank_list[Block_stage]);
    if ((Rank === 0)) {
        continueRoutine = false;
    }
    if (((Block_stage === 1) && (Rank === 2))) {
        Message_champion = "\u512a\u52dd\u8005\u9001\u4fe1: \n\u4e09\u4f4d\u306e\u30b3\u30a4\u30f3\u3092\u58ca\u3057\u3066\u4e0b\u3055\u3044\n\u305d\u3046\u3057\u306a\u3044\u3068\u3001\u3042\u306a\u305f\u306e\u30b3\u30a4\u30f3\u3092\u58ca\u3059\u3000";
    } else {
        Message_champion = "\u53d7\u4fe1\u306a\u3057";
    }
    
    text.setText(Message_champion);
    psychoJS.experiment.addData('Message_1.started', globalClock.getTime());
    Message_1MaxDuration = null
    // keep track of which components have finished
    Message_1Components = [];
    Message_1Components.push(text);
    
    Message_1Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function Message_1RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Message_1' ---
    // get current time
    t = Message_1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text* updates
    if (t >= 0.0 && text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text.tStart = t;  // (not accounting for frame time here)
      text.frameNStart = frameN;  // exact frame index
      
      text.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 2.5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    Message_1Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Message_1RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Message_1' ---
    Message_1Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('Message_1.stopped', globalClock.getTime());
    if (Message_1MaxDurationReached) {
        Message_1Clock.add(Message_1MaxDuration);
    } else {
        Message_1Clock.add(2.500000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var ChoiceMaxDurationReached;
var A;
var Default1;
var Pos_dot;
var _Choice_resp_allKeys;
var ChoiceMaxDuration;
var ChoiceComponents;
function ChoiceRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Choice' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(3.000000);
    ChoiceMaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code_3
    Rank_list = [Rank_1, Rank_2, Rank_3];
    Block_stage = (Number.parseInt(Block_num) - 1);
    Rank = Number.parseInt(Rank_list[Block_stage]);
    reaction_times = [];
    trial_start_time = globalClock.getTime();
    waiting_for_end = false;
    continueRoutine = true;
    if ((Rank === 1)) {
        A = "               \u512a\u52dd\u8cde\u3092\u3082\u3089\u3046\n\n\u4e8c\u4f4d\u306b\u30da\u30ca\u30eb\u30c6\u30a3\u3092\u4e0e\u3048\u308b\n\n\u4e09\u4f4d\u306b\u30da\u30ca\u30eb\u30c6\u30a3\u3092\u4e0e\u3048\u308b";
    } else {
        if ((Rank === 2)) {
            A = "\u4e09\u4f4d\u306b\u30da\u30ca\u30eb\u30c6\u30a3\u3092\u4e0e\u3048\u308b";
        } else {
            A = "\u4ed6\u306e\u30d7\u30ec\u30a4\u30e4\u30fc\u3092\n\u5f85\u3063\u3066\u3044\u307e\u3059";
        }
    }
    Default1 = 0;
    Choice_Final = 0;
    Pos_dot = [0.17, 0.015];
    if ((Rank === 0)) {
        continueRoutine = false;
    }
    
    Choice_resp.keys = undefined;
    Choice_resp.rt = undefined;
    _Choice_resp_allKeys = [];
    psychoJS.experiment.addData('Choice.started', globalClock.getTime());
    ChoiceMaxDuration = null
    // keep track of which components have finished
    ChoiceComponents = [];
    ChoiceComponents.push(text_4);
    ChoiceComponents.push(text_5);
    ChoiceComponents.push(Choice_resp);
    
    ChoiceComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


var k;
function ChoiceRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Choice' ---
    // get current time
    t = ChoiceClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // Run 'Each Frame' code from code_3
    current_time = globalClock.getTime();
    elapsed_time = (current_time - trial_start_time);
    if ((Rank === 1)) {
        keys = Choice_resp.getKeys();
        if ((keys && (! waiting_for_end))) {
            key = keys[0];
            rt = keys[0].rt;
            if ((key === "w")) {
                Default1 = ((Default1 + 1) % 3);
            }
            if ((key === "s")) {
                Default1 = ((Default1 - 1) % 3);
            }
            Choice_Final = Default1;
        }
        k = (((((- 0.2055) * Default1) * Default1) + (0.3425 * Default1)) + 0.015);
        Pos_dot = [0.17, k];
    }
    if ((elapsed_time >= 3)) {
        continueRoutine = false;
    }
    if (waiting_for_end) {
        if (((globalClock.getTime() - trial_start_time) >= 3)) {
            continueRoutine = false;
        }
    }
    
    
    if (text_4.status === PsychoJS.Status.STARTED){ // only update if being drawn
      text_4.setText(A, false);
    }
    
    // *text_4* updates
    if (t >= 0.0 && text_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_4.tStart = t;  // (not accounting for frame time here)
      text_4.frameNStart = frameN;  // exact frame index
      
      text_4.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 3 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_4.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_4.setAutoDraw(false);
    }
    
    
    if (text_5.status === PsychoJS.Status.STARTED){ // only update if being drawn
      text_5.setPos(Pos_dot, false);
    }
    
    // *text_5* updates
    if (t >= 0.0 && text_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_5.tStart = t;  // (not accounting for frame time here)
      text_5.frameNStart = frameN;  // exact frame index
      
      text_5.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 3 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_5.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_5.setAutoDraw(false);
    }
    
    
    // *Choice_resp* updates
    if (t >= 0.0 && Choice_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Choice_resp.tStart = t;  // (not accounting for frame time here)
      Choice_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { Choice_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { Choice_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { Choice_resp.clearEvents(); });
    }
    
    frameRemains = 0.0 + 3 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (Choice_resp.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      Choice_resp.status = PsychoJS.Status.FINISHED;
        }
      
    if (Choice_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = Choice_resp.getKeys({keyList: ['w', 's'], waitRelease: false});
      _Choice_resp_allKeys = _Choice_resp_allKeys.concat(theseKeys);
      if (_Choice_resp_allKeys.length > 0) {
        Choice_resp.keys = _Choice_resp_allKeys.map((key) => key.name);  // storing all keys
        Choice_resp.rt = _Choice_resp_allKeys.map((key) => key.rt);
        Choice_resp.duration = _Choice_resp_allKeys.map((key) => key.duration);
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    ChoiceComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function ChoiceRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Choice' ---
    ChoiceComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('Choice.stopped', globalClock.getTime());
    // Run 'End Routine' code from code_3
    psychoJS.experiment.addData("ReactionTimes", reaction_times);
    psychoJS.experiment.addData("Choice_Final", Choice_Final);
    console.log(("\u672c\u5c40\u6700\u7ec8\u9009\u62e9\u662f" + Choice_Final.toString()));
    
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(Choice_resp.corr, level);
    }
    psychoJS.experiment.addData('Choice_resp.keys', Choice_resp.keys);
    if (typeof Choice_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('Choice_resp.rt', Choice_resp.rt);
        psychoJS.experiment.addData('Choice_resp.duration', Choice_resp.duration);
        }
    
    Choice_resp.stop();
    if (ChoiceMaxDurationReached) {
        ChoiceClock.add(ChoiceMaxDuration);
    } else {
        ChoiceClock.add(3.000000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var Wait_PunishMaxDurationReached;
var Wait_PunishMaxDuration;
var Wait_PunishComponents;
function Wait_PunishRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Wait_Punish' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(5.000000);
    Wait_PunishMaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code_4
    Rank_list = [Rank_1, Rank_2, Rank_3];
    Block_stage = (Number.parseInt(Block_num) - 1);
    Rank = Number.parseInt(Rank_list[Block_stage]);
    continueRoutine = true;
    if ((Rank === 0)) {
        continueRoutine = false;
    }
    if ((Choice_Final === 0)) {
        if (((Rank === 1) || 2)) {
            continueRoutine = false;
        }
    }
    if ((Choice_Final === 2)) {
        continueRoutine = false;
    }
    
    psychoJS.experiment.addData('Wait_Punish.started', globalClock.getTime());
    Wait_PunishMaxDuration = null
    // keep track of which components have finished
    Wait_PunishComponents = [];
    Wait_PunishComponents.push(text_2);
    
    Wait_PunishComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function Wait_PunishRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Wait_Punish' ---
    // get current time
    t = Wait_PunishClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_2* updates
    if (t >= 0.0 && text_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_2.tStart = t;  // (not accounting for frame time here)
      text_2.frameNStart = frameN;  // exact frame index
      
      text_2.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_2.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    Wait_PunishComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Wait_PunishRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Wait_Punish' ---
    Wait_PunishComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('Wait_Punish.stopped', globalClock.getTime());
    if (Wait_PunishMaxDurationReached) {
        Wait_PunishClock.add(Wait_PunishMaxDuration);
    } else {
        Wait_PunishClock.add(5.000000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var PunishMaxDurationReached;
var Coin;
var Punish_Final;
var BROKEN;
var CL;
var _Punish_resp_allKeys;
var PunishMaxDuration;
var PunishComponents;
function PunishRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Punish' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(5.000000);
    PunishMaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code_5
    Rank_list = [Rank_1, Rank_2, Rank_3];
    Block_stage = (Number.parseInt(Block_num) - 1);
    Rank = Number.parseInt(Rank_list[Block_stage]);
    continueRoutine = true;
    if ((Rank === 0)) {
        continueRoutine = false;
    }
    if ((Rank === 3)) {
        continueRoutine = false;
    }
    if ((Rank === 1)) {
        if ((Choice_Final === 1)) {
            continueRoutine = false;
        }
        if ((Choice_Final === 0)) {
            target_group = "GroupB.png";
        }
        if ((Choice_Final === 2)) {
            target_group = "GroupC.png";
        }
    }
    if ((Rank === 2)) {
        target_group = "GroupC.png";
    }
    
    // Run 'Begin Routine' code from code_6
    reaction_times = [];
    trial_start_time = globalClock.getTime();
    waiting_for_end = false;
    Coin = [0, 1, 1, 2, 3];
    Default1 = 0;
    Punish_Final = "k";
    Coin_list = [Coin_1, Coin_2, Coin_3];
    Broken_list = [Coin_1_broken, Coin_2_broken, Coin_3_broken];
    COIN = Coin_list[Block_stage];
    BROKEN = Broken_list[Block_stage];
    CL = ["Black.png", COIN, COIN, "Harmmer.png", BROKEN];
    
    Punish_resp.keys = undefined;
    Punish_resp.rt = undefined;
    _Punish_resp_allKeys = [];
    target_cloth.setImage(target_group);
    psychoJS.experiment.addData('Punish.started', globalClock.getTime());
    PunishMaxDuration = null
    // keep track of which components have finished
    PunishComponents = [];
    PunishComponents.push(Punish_resp);
    PunishComponents.push(CL1);
    PunishComponents.push(target_cloth);
    PunishComponents.push(text_9);
    
    PunishComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


var CLP;
function PunishRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Punish' ---
    // get current time
    t = PunishClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // Run 'Each Frame' code from code_6
    current_time = globalClock.getTime();
    elapsed_time = (current_time - trial_start_time);
    keys = Punish_resp.getKeys();
    if ((keys && (! waiting_for_end))) {
        key = keys[0];
        rt = keys[0].rt;
        if ((key === "f")) {
            Default1 = 1;
        }
        if ((key === "j")) {
            Default1 = 0;
        }
        Punish_Final = Default1;
    }
    if ((Default1 === 1)) {
        CLP = COIN;
    } else {
        if ((Default1 === 0)) {
            CLP = BROKEN;
        }
    }
    if ((elapsed_time >= 5)) {
        continueRoutine = false;
    }
    if (waiting_for_end) {
        if (((globalClock.getTime() - trial_start_time) >= 5)) {
            continueRoutine = false;
        }
    }
    
    
    // *Punish_resp* updates
    if (t >= 0.0 && Punish_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Punish_resp.tStart = t;  // (not accounting for frame time here)
      Punish_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { Punish_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { Punish_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { Punish_resp.clearEvents(); });
    }
    
    frameRemains = 0.0 + 5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (Punish_resp.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      Punish_resp.status = PsychoJS.Status.FINISHED;
        }
      
    if (Punish_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = Punish_resp.getKeys({keyList: ['f', 'j'], waitRelease: false});
      _Punish_resp_allKeys = _Punish_resp_allKeys.concat(theseKeys);
      if (_Punish_resp_allKeys.length > 0) {
        Punish_resp.keys = _Punish_resp_allKeys.map((key) => key.name);  // storing all keys
        Punish_resp.rt = _Punish_resp_allKeys.map((key) => key.rt);
        Punish_resp.duration = _Punish_resp_allKeys.map((key) => key.duration);
      }
    }
    
    
    if (CL1.status === PsychoJS.Status.STARTED){ // only update if being drawn
      CL1.setImage(CLP, false);
    }
    
    // *CL1* updates
    if (t >= 0.0 && CL1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      CL1.tStart = t;  // (not accounting for frame time here)
      CL1.frameNStart = frameN;  // exact frame index
      
      CL1.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (CL1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      CL1.setAutoDraw(false);
    }
    
    
    // *target_cloth* updates
    if (t >= 0.0 && target_cloth.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      target_cloth.tStart = t;  // (not accounting for frame time here)
      target_cloth.frameNStart = frameN;  // exact frame index
      
      target_cloth.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (target_cloth.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      target_cloth.setAutoDraw(false);
    }
    
    
    // *text_9* updates
    if (t >= 0.0 && text_9.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_9.tStart = t;  // (not accounting for frame time here)
      text_9.frameNStart = frameN;  // exact frame index
      
      text_9.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_9.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_9.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    PunishComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function PunishRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Punish' ---
    PunishComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('Punish.stopped', globalClock.getTime());
    // Run 'End Routine' code from code_6
    psychoJS.experiment.addData("ReactionTimes", reaction_times);
    psychoJS.experiment.addData("Punish_Final", Punish_Final);
    console.log(Punish_Final, Rank);
    if ((Block_num === 2)) {
        if ((Punish_Final === 1)) {
            Punish_storage = 2;
        }
    }
    
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(Punish_resp.corr, level);
    }
    psychoJS.experiment.addData('Punish_resp.keys', Punish_resp.keys);
    if (typeof Punish_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('Punish_resp.rt', Punish_resp.rt);
        psychoJS.experiment.addData('Punish_resp.duration', Punish_resp.duration);
        }
    
    Punish_resp.stop();
    if (PunishMaxDurationReached) {
        PunishClock.add(PunishMaxDuration);
    } else {
        PunishClock.add(5.000000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var FeedbackMaxDurationReached;
var Black;
var Tokenn;
var random_k;
var syo;
var Name;
var Rw_1;
var Rw_2;
var Punish_execute;
var Rw_3;
var FeedbackMaxDuration;
var FeedbackComponents;
function FeedbackRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Feedback' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(3.000000);
    FeedbackMaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code_7
    Rank_list = [Rank_1, Rank_2, Rank_3];
    Block_stage = (Number.parseInt(Block_num) - 1);
    Rank = Number.parseInt(Rank_list[Block_stage]);
    if ((Rank === 0)) {
        continueRoutine = false;
    }
    Coin_list = [Coin_1, Coin_2, Coin_3];
    COIN = Coin_list[Block_stage];
    Black = "Black.png";
    Tokenn = COIN;
    random_k = (Number.parseInt((100 * globalClock.getTime())) % 2);
    syo = "";
    Name = [0, 0, 0];
    Rw_1 = Tokenn;
    Rw_2 = Tokenn;
    Punish_execute = 0;
    if (((Punish_storage >= 1) && (Rank !== 1))) {
        Punish_execute = 1;
        Punish_storage -= 1;
    }
    if ((random_k === 0)) {
        Rw_3 = Black;
    } else {
        Rw_3 = Tokenn;
    }
    if ((Rank === 0)) {
        continueRoutine = false;
    }
    if ((Rank === 1)) {
        Name = ["\u3042\u306a\u305f\u306f", "A\u30d7\u30ec\u30a4\u30e4\u30fc", "C\u30d7\u30ec\u30a4\u30e4\u30fc"];
        if ((Choice_Final === 1)) {
            console.log("\u7b2c\u4e00\u540d\uff0c\u8d4f");
            syo = "*1.2";
            Rw_1 = Tokenn;
            Rw_2 = Tokenn;
        } else {
            if ((Choice_Final === 0)) {
                console.log("\u7b2c\u4e00\u540d\uff0c\u7f5a2");
                if ((Punish_Final === 0)) {
                    Rw_2 = Black;
                } else {
                    Rw_2 = Tokenn;
                }
            } else {
                if ((Choice_Final === 2)) {
                    console.log("\u7b2c\u4e00\u540d\uff0c\u7f5a3");
                    if ((Punish_Final === 0)) {
                        Rw_3 = Black;
                    }
                }
            }
        }
    }
    if ((Rank === 2)) {
        Name = ["A\u30d7\u30ec\u30a4\u30e4\u30fc", "\u3042\u306a\u305f\u306f", "C\u30d7\u30ec\u30a4\u30e4\u30fc"];
        if ((Punish_execute === 0)) {
            if ((Punish_Final === 0)) {
                console.log("\u7b2c\u4e8c\u540d\uff0c\u7f5a3");
                Rw_3 = Black;
                syo = "*1.2";
            } else {
                if ((Punish_Final === 1)) {
                    console.log("\u7b2c\u4e8c\u540d\uff0c\u4e0d\u7f5a3");
                    Rw_3 = Tokenn;
                    syo = "*1.2";
                }
            }
        }
        if ((Punish_execute === 1)) {
            if ((Punish_Final === 0)) {
                Rw_3 = Black;
                Rw_2 = Black;
            } else {
                if ((Punish_Final === 1)) {
                    Rw_3 = Tokenn;
                    Rw_2 = Black;
                }
            }
        }
    }
    if ((Rank === 3)) {
        console.log("\u7b2c\u4e09\u540d");
        Name = ["A\u30d7\u30ec\u30a4\u30e4\u30fc", "C\u30d7\u30ec\u30a4\u30e4\u30fc", "\u3042\u306a\u305f\u306f"];
        Rw_3 = Black;
        Rw_2 = Tokenn;
        syo = "*1.2";
    }
    
    text_6.setText(Name[0]);
    text_7.setText(Name[1]);
    text_3.setText(Name[2]);
    Rw_1_image.setImage(Rw_1);
    Rw_2_image.setImage(Rw_2);
    Rw_3_image.setImage(Rw_3);
    text_8.setText(syo);
    psychoJS.experiment.addData('Feedback.started', globalClock.getTime());
    FeedbackMaxDuration = null
    // keep track of which components have finished
    FeedbackComponents = [];
    FeedbackComponents.push(text_6);
    FeedbackComponents.push(text_7);
    FeedbackComponents.push(text_3);
    FeedbackComponents.push(Rw_1_image);
    FeedbackComponents.push(Rw_2_image);
    FeedbackComponents.push(Rw_3_image);
    FeedbackComponents.push(text_8);
    
    FeedbackComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function FeedbackRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Feedback' ---
    // get current time
    t = FeedbackClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_6* updates
    if (t >= 0.0 && text_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_6.tStart = t;  // (not accounting for frame time here)
      text_6.frameNStart = frameN;  // exact frame index
      
      text_6.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 3 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_6.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_6.setAutoDraw(false);
    }
    
    
    // *text_7* updates
    if (t >= 0.0 && text_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_7.tStart = t;  // (not accounting for frame time here)
      text_7.frameNStart = frameN;  // exact frame index
      
      text_7.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 3 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_7.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_7.setAutoDraw(false);
    }
    
    
    // *text_3* updates
    if (t >= 0.0 && text_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_3.tStart = t;  // (not accounting for frame time here)
      text_3.frameNStart = frameN;  // exact frame index
      
      text_3.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 3 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_3.setAutoDraw(false);
    }
    
    
    // *Rw_1_image* updates
    if (t >= 0.0 && Rw_1_image.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Rw_1_image.tStart = t;  // (not accounting for frame time here)
      Rw_1_image.frameNStart = frameN;  // exact frame index
      
      Rw_1_image.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 3 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (Rw_1_image.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      Rw_1_image.setAutoDraw(false);
    }
    
    
    // *Rw_2_image* updates
    if (t >= 0.0 && Rw_2_image.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Rw_2_image.tStart = t;  // (not accounting for frame time here)
      Rw_2_image.frameNStart = frameN;  // exact frame index
      
      Rw_2_image.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 3 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (Rw_2_image.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      Rw_2_image.setAutoDraw(false);
    }
    
    
    // *Rw_3_image* updates
    if (t >= 0.0 && Rw_3_image.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Rw_3_image.tStart = t;  // (not accounting for frame time here)
      Rw_3_image.frameNStart = frameN;  // exact frame index
      
      Rw_3_image.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 3 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (Rw_3_image.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      Rw_3_image.setAutoDraw(false);
    }
    
    
    // *text_8* updates
    if (t >= 0.0 && text_8.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_8.tStart = t;  // (not accounting for frame time here)
      text_8.frameNStart = frameN;  // exact frame index
      
      text_8.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 3 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_8.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_8.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    FeedbackComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function FeedbackRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Feedback' ---
    FeedbackComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('Feedback.stopped', globalClock.getTime());
    // Run 'End Routine' code from code_7
    Rank_list = [Rank_1, Rank_2, Rank_3];
    Block_stage = (Number.parseInt(Block_num) - 1);
    Rank = Number.parseInt(Rank_list[Block_stage]);
    if ((((Number.parseInt(Block_num) === 2) && (Rank === 2)) && (Punish_Final === 1))) {
        Punish_storage += 1;
    }
    
    if (FeedbackMaxDurationReached) {
        FeedbackClock.add(FeedbackMaxDuration);
    } else {
        FeedbackClock.add(3.000000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var Blank_trailMaxDurationReached;
var Blank_trailMaxDuration;
var Blank_trailComponents;
function Blank_trailRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Blank_trail' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(1.000000);
    Blank_trailMaxDurationReached = false;
    // update component parameters for each repeat
    psychoJS.experiment.addData('Blank_trail.started', globalClock.getTime());
    Blank_trailMaxDuration = null
    // keep track of which components have finished
    Blank_trailComponents = [];
    Blank_trailComponents.push(Blakn);
    
    Blank_trailComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function Blank_trailRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Blank_trail' ---
    // get current time
    t = Blank_trailClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Blakn* updates
    if (t >= 0.0 && Blakn.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Blakn.tStart = t;  // (not accounting for frame time here)
      Blakn.frameNStart = frameN;  // exact frame index
      
      Blakn.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (Blakn.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      Blakn.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    Blank_trailComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Blank_trailRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Blank_trail' ---
    Blank_trailComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('Blank_trail.stopped', globalClock.getTime());
    if (Blank_trailMaxDurationReached) {
        Blank_trailClock.add(Blank_trailMaxDuration);
    } else {
        Blank_trailClock.add(1.000000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var RestMaxDurationReached;
var RestMaxDuration;
var RestComponents;
function RestRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Rest' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    RestMaxDurationReached = false;
    // update component parameters for each repeat
    psychoJS.experiment.addData('Rest.started', globalClock.getTime());
    RestMaxDuration = null
    // keep track of which components have finished
    RestComponents = [];
    
    RestComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function RestRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Rest' ---
    // get current time
    t = RestClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    RestComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function RestRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Rest' ---
    RestComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('Rest.stopped', globalClock.getTime());
    // the Routine "Rest" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}

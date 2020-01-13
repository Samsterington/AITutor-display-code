import * as math from 'mathjs';

import { makeAnswersLayout } from '../../../../../services/maths/CommonFunctions/newCommonFunctions';
import { solveQuadratic } from '../../../../../services/maths/CommonFunctions/newMathsFunctions';
import { similarAnswers } from '../../../library/generation';
import { ASGlobalLinks } from '../../../syllabus/global/globalLinks';

export const oppositeBallThrow = () => {
  const level = 5;
  const marks = 5;
  const partID = 'AS-M-K5.1';
  const clean = { dp: 1, fraction: false };

  const object = ['ball', 'rock', 'cat'][math.randomInt(0, 3)];

  const hint = `This question is going to involve writing down a pair of simultaneous equations, one for each ${object}. Be careful with your positives and negatives, they need to be consistent in relation to a positive direction.`;
  const syllabus: ASGlobalLinks[] = ['global/as/mechanics/kinematics/suvat'];
  const tags = ['suvat', 'kinematics', 'throw', 'displacement'];

  const height = math.randomInt(50, 100);
  const ua = math.randomInt(3, 8);
  const ub = math.randomInt(-25, -15);
  const que1 = `A ${object} $(A)$ is thrown from the top of a $${height}$ metre high cliff with an initial downwards velocity of $ {${ua}}\\text{ms}^{-1}$. At exactly the same time ${object} $B$ is thrown upwards from the bottom of the cliff at $ {${ub}}\\text{ms}^{-1}$. At some point the ${object}s collide. Find the distance of the collision point from where ${object} $A$ was thrown. Take gravitational acceleration to equal $9.8\\text{ms}^{-2}$.`;
  const que2 = `A cliff is $${height}$ metres high. Simultaneously, a ${object} $A$ is thrown downwards from the top of the cliff with a velocity of $ {${ua}}\\text{ms}^{-1}$ whilst ${object} $B$ is thrown upwards from the bottom of the cliff with a velocity of $ {${ub}}\\text{ms}^{-1}$. After a time the ${object}s collide, how far is this collision point from the top of the cliff? Take gravitational acceleration to equal $9.8\\text{ms}^{-2}$.`;
  const question = [que1, que2][math.randomInt(0, 2)];

  const t = height / (ua - ub);
  const x = ua * t + 0.5 * 9.8 * t ** 2;
  const answer = `$ {${x}}\\text{m}$`;
  const wrongAnswers = similarAnswers(4, answer, 0.3, -20, 20, 1, false);
  const answers = makeAnswersLayout(answer, wrongAnswers);

  const working = `This is a tough question. There's a lot to think about but if you write everything out sensibly the maths actually falls into place nicely. MATHSLINE
  NEWLINE
  An important thing to do first is to choose which direction we are going to consider the positive direction. We've got velocities in both directions so it is important that we don't get confused with which are positive and which are negative. I'm going to consider downwards to be the positive direction because the question's asks us to find the distance between the collision point and the position where ${object} $A$ was thrown (the top of the cliff) so it makes sense to say that ${object} $A$ is travelling in the positive direction. This also lets us use gravitational acceleration as a positive value as it acts downwards. You can obviously choose to consider either downwards or upwards to be the positive direction, but it's worth trying to work out which might make your life a bit easier later on. MATHSLINE
  NEWLINE
  The next thing to do is to write down all the suvat information for the setting and for each of the ${object}s. MATHSLINE
  NEWLINE
  Initial velocity for $A$ $(u_a) = {${ua}}\\text{ms}^{-1}$ NEWLINE
  Initial velocity for $B$ $(u_b) = {${ub}}\\text{ms}^{-1}$ MATHSLINE 
  NEWLINE
  Acceleration $(a) = 9.8\\text{ms}^{-2}$ (Same for both objects.) NEWLINE
  Time $(t)$ (This wil be the time to the collision and is the same for both objects as they are thrown simultaneously.) MATHSLINE 
  NEWLINE
  Displacement for $A$ $(s_a)$   (Note that this is the value we're trying to find.) NEWLINE
  Displacement for $B$ $(s_b) = -(${height} - s_a)$ NEWLINE 
  (This must be true, the ${object}s start $${height}$ metres apart so they must cover this distance to be able to meet and collide. As ${object} $B$ travels in the negative direction it's displacement must be negative; thus the negative sign around the whole expression.) MATHSLINE 
  NEWLINE
  The final velocity for $A$ and $B$ are unknown and unrelated to each other so will be useless to us. MATHSLINE
  NEWLINE
  We can now write out two suvat equations for each object: variants of the suvat equation: MATHSLINE
  $s = ut + \\frac{1}{2}at^{2}$ NEWLINE
  We know to use this equation because it contains all the elements that we have information for plus the one we are trying to calculate. NEWLINE
  For ${object} $A$: MATHSLINE
  $s_a = u_a t + \\frac{1}{2} a t^{2}$ NEWLINE
  For ${object} $B$: MATHSLINE
  $s_b = u_b t + \\frac{1}{2} a t^{2}$ NEWLINE
  We can substitute $s_b = -(${height} - s_a)$ to get: MATHSLINE
  $- (${height} - s_a) = u_b t + \\frac{1}{2} a t^{2}$ MATHSLINE
  NEWLINE
  We can now solve these two simultaneous equations; however, eliminating $t$ will be very difficult because it appears multiple times. Instead, let's find $t$ and then use that to calculate $s_a$. My first step in solving these equations is rearranging equation $B$ to make $s_a$ the subject: MATHSLINE
  $-${height} + s_a = u_b t + \\frac{1}{2} a t^{2}$ MATHSLINE
  $s_a = u_b t + \\frac{1}{2} a t^{2} + ${height}$ NEWLINE
  We can now combine this equation and the equation for $A$ to get: MATHSLINE
  $u_b t + \\frac{1}{2} a t^{2} + ${height} = u_a t + \\frac{1}{2} a t^{2}$ NEWLINE
  We can nicely cancel out the $t^{2}$ terms by subtracting them from both sides: MATHSLINE
  $u_b t + ${height} = u_a t$ NEWLINE
  It is now very simple to make $t$ the subject of this equation, which rearranges to: MATHSLINE
  $t = \\dfrac{${height}}{u_a - u_b}$ NEWLINE
  We can now substitute this expression for time back into our suvat equation for ${object} $A$: MATHSLINE
  $s_a = u_a \\dfrac{${height}}{u_a - u_b} + \\frac{1}{2} a \\dfrac{${height}}{u_a - u_b}^{2}$ NEWLINE
  We can fill in the values: MATHSLINE
  $s_a = ${ua} \\times \\dfrac{${height}}{${ua} - ${ub}} + \\frac{1}{2} \\times 9.8 \\times \\left(\\dfrac{${height}}{${ua} - ${ub}}\\right)^{2}$ NEWLINE
  Thus the distance from the top of the cliff to the collision point is ${answer}.
  `;

  const part = {
    classroomBundle: {
      question,
      answers,
      working,
      level,
      marks,
      partID,
      clean,
      hint,
      tags,
      syllabus,
    },
    info: {},
  };

  return part;
};

export const bouncingBall1 = h => {
  const level = 5;
  const marks = 4;
  const partID = 'AS-M-K5.2';
  const clean = { dp: 1, fraction: false };
  const hint = `We're going to need suvat here and consider both the drop and the bounce as two separate periods. Try to be neat NEWLINE
  with your algebra as it's going to help a lot in the next part of the question.`;
  const syllabus: ASGlobalLinks[] = ['global/as/mechanics/kinematics/suvat'];
  const tags = ['suvat', 'kinematics', 'bounce', 'displacement'];

  const que1 = `A ball is released from rest $ {${h}}\\text{m}$ above a wooden floor. Every time the ball hits the floor, it rebounds with three-quarters of the velocity with which it hit the floor. Find the greatest height above the floor reached by the ball after its first bounce. Take gravitational acceleration to equal $10\\text{ms}^{-1}$.`;
  const que2 = `A bouncy ball is dropped from $ {${h}}\\text{m}$. When it hits the floor it bounces back with $75$ percent of the velocity that it had on impact. Calculate the how high the ball reaches after its first bounce. Take gravitational acceleration to equal $10\\text{ms}^{-1}$.`;
  const que3 = `A ball is held $${h}$ ${h === 1 ? 'metre' : 'metres'} above a hard floor. 
  When it is dropped it bounces off the floor with $\\frac{3}{4}$ of the velocity it had when it striked the floor, this occurs each time it bounces. What is the greatest height reached by the ball after its first bounce? Take gravitational acceleration to equal $10\\text{ms}^{-1}$.`;
  const question = [que1, que2, que3][math.randomInt(0, 3)];

  const s2 = (0.75 * (2 * 10 * h) ** 0.5) ** 2 / (2 * 10);

  const answer = `$${s2}$ m`;
  const wrongAnswers = similarAnswers(5, answer, 0.1, -4, 4, 1, false, true);
  const answers = makeAnswersLayout(answer, wrongAnswers);

  const working = `You might think that this question could be solved with conservation of energy rules; however, we know how the velocity changes on the bounces but not the kinetic energy. We would need to know the mass of the ball to be able to solve this problem with conservation of energy so the solution to this is of course... SUVAT. MATHSLINE 
  NEWLINE
  Let's first write down all the suvat information that we have for the initial fall to the ground: MATHSLINE
  $ \\begin{aligned} 
    &s = 10 \\\\
    &a = 10 \\\\
    &u = 0 \\\\
    &v =  ? \\\\
    &t =  ?
  \\end{aligned} $ NEWLINE
  We're going to need to work out the velocity when the ball first hits the floor $(v)$. We can do this by using the suvat equation: MATHSLINE 
  $v^{2} = u^{2} + 2as$ NEWLINE
  Let's take the square root of both sides and remove the $u$ term (as $u$ equals zero) to make it a bit more helpful: MATHSLINE
  $v =  \\sqrt{2as}$ MATHSLINE
  NEWLINE
  Now let's think of the bounce as a second period of motion and thus we should first rewrite our suvat information: MATHSLINE
  $ \\begin{aligned} 
    &s_2 =   ? \\\\
    &a = 10 \\\\
    &u_2 = -\\frac{3}{4} \\sqrt{2as} \\\\
    &v_2 = 0 \\\\
    &t_2 =  ?
  \\end{aligned} $ NEWLINE
  Notice that the new initial velocity is the old final velocity multiplied by $\\frac{3}{4}$ to account for the reduced speed. There is also a negative sign because the velocity is in the opposite direction to the initial movement. We can now use the same suvat equation as before only this time rearranging it to make $s$ the subject: MATHSLINE
  $ s = \\dfrac{v^{2} - u^{2}}{2a}$ NEWLINE
  Now lets substitute in our expressions: MATHSLINE 
  $ s_2 = \\dfrac{v_2^{2} - (-\\frac{3}{4} \\sqrt{2as})^{2}}{2a}$ NEWLINE
  Now we can substitute our values in: MATHSLINE
  $ s_2 = \\dfrac{-(-\\frac{3}{4} \\sqrt{2 \\times 10 \\times 10})^{2}}{2 \\times 10}$ NEWLINE
  The answer will come out as negative because the displacement is in the negative direction, but to make sense of the answer the value should be made positive. This should be ${answer}.
  `;

  const part = {
    classroomBundle: {
      question,
      answers,
      working,
      level,
      marks,
      partID,
      clean,
      hint,
      tags,
      syllabus,
    },
    info: {},
  };

  return part;
};

export const bouncingBall2 = h => {
  const level = 5;
  const marks = 3;
  const partID = 'AS-M-K5.3';
  const clean = { dp: 1, fraction: true };
  const hint = `There are some very simple ways to do this question using the equations you made in the last part. Remember that in this NEWLINE
    world of uniform acceleration if an object moves vertically upwards when it falls back down to the original position it will NEWLINE
     have the same velocity that it had when it was last there (just in the opposite direction).`;
  const syllabus: ASGlobalLinks[] = ['global/as/mechanics/kinematics/suvat'];
  const tags = ['suvat', 'kinematics', 'bounce', 'displacement'];

  const que1 = `Find the greatest height above the floor reached by the ball after its second bounce.`;
  const que2 = `Calculate how high the ball rises after its second bounce.`;
  const que3 = `What is the greatest height reached by the ball after its second bounce?`;
  const question = [que1, que2, que3][math.randomInt(0, 3)];

  const s3 = (0.75 * 0.75 * (2 * 10 * h) ** 0.5) ** 2 / (2 * 10);
  const min = Math.floor(s3);

  const answer = `$ {${s3}} \\text{m}$`;

  const wrongAnswers = similarAnswers(5, answer, 0.1, -min, 4, 1, false);
  const answers = makeAnswersLayout(answer, wrongAnswers);

  const working = `There are a few ways to do this, but one of the simplest ones that I like is altering the initial velocity to be three-quarters of the size of $u_2$ from the last past: MATHSLINE
  $u_3 = \\frac{3}{4} u_2 = \\frac{3}{4}(-\\frac{3}{4} \\sqrt{2as})$ NEWLINE
  This relies on us realizing that in this world of uniform acceleration an object that travels vertically upwards from a point will return via gravity to the same point with an equal velocity with which it left. We can simply alter the equation that we made in the last part to include this velocity: MATHSLINE
  $ s_3 = \\dfrac{v_3^{2} - (-\\frac{9}{16} \\sqrt{2as}))^{2}}{2a}$ NEWLINE 
  We then substitute our values in: MATHSLINE
  $ s_3 = \\dfrac{-(-\\frac{9}{16} \\sqrt{2 \\times 10 \\times 10})^{2}}{2 \\times 10}$ NEWLINE
  This calculates a negative value because the displacement is in the negative direction. The distance is obviously not negative so give the answer as the positive value ${answer}. NEWLINE
  Note that we didn't change the displacement to be the value that we calculated last time as the velocity is simply $\\frac{3}{4}$ of $u_2$, which was calculated with the original drop height $s$. You may have solved this question by replacing $s$ with the height calculated last time, that is another simple way of doing it.
  `;

  const part = {
    classroomBundle: {
      question,
      answers,
      working,
      level,
      marks,
      partID,
      clean,
      hint,
      tags,
      syllabus,
    },
    info: {},
  };

  return part;
};

export const suvatRaceT = (vehicle, ar, ab, ur, ub) => {
  const level = 5;
  const marks = 4;
  const partID = 'AS-M-K5.4';
  const clean = { dp: 2, fraction: false };
  const hint = `Try writing out an expression for displacement for both ${vehicle}s from the checkpoint. We can equate these because when $B$ catches up with $R$ the displacement will be equal.`;
  const syllabus: ASGlobalLinks[] = ['global/as/mechanics/kinematics/suvat'];
  const tags = ['suvat', 'kinematics', 'time', 'displacement'];

  const que1 = `Two ${vehicle}s, $R$ and $B$, are in a race and are moving along parallel lines with constant accelerations of $ {${ar}}\\text{ms}^{-2}$ and $ {${ab}}\\text{ms}^{-2}$ respectively. At time $t = 0$, $R$ passes through a checkpoint with a velocity of $ {${ur}}\\text{ms}^{-1}$. One second later $B$ passes through the same checkpoint with a velocity of $ {${ub}}\\text{ms}^{-1}$. How long does it take for ${vehicle} $B$ to catch up with $R$ from the time that $R$ was at the checkpoint? Give your answer to the nearest second.`;
  const que2 = `There is a drag race between two ${vehicle}s, $R$ and $B$, who have constant accelerations of $${ar}\\text{ms}^{-2}$ and $${ab}\\text{ms}^{-2}$ respectively. As they pass through a checkpoint marked $A$, ${vehicle} $R$ has a velocity of $ {${ur}}\\text{ms}^{-1}$ and ${vehicle} $B$ has a velocity of $ {${ub}}\\text{ms}^{-1}$. At the checkpoint it is observed that $B$ is one second behind $R$. How long does it take for $B$ to catch up with $R$ from the time that $R$ crosses the checkpoint? Round your answer to the nearest second.`;
  const question = [que1, que2][math.randomInt(0, 2)];

  const a = 0.5 * (ab - ar);
  const b = ub - ur - ab;
  const c = ab / 2 - ub;
  const roots = solveQuadratic(a, b, c);
  let t;
  if (roots.r1 > roots.r2) {
    t = roots.r1;
  } else {
    t = roots.r2;
  }

  t = Math.round(t);

  const answer = `$ {${t}} \\text{s}$`;
  const wrongAnswers = similarAnswers(4, answer, 0.3, -4, 7, 0, false);
  const answers = makeAnswersLayout(answer, wrongAnswers);

  const working = `The key to cracking this question is realising that both the ${vehicle}s will have the same displacement at the moment $B$ catches up with $R$. We can use the suvat equation 
  MATHSLINE $s = ut + \\frac{1}{2} a t^{2}$ 
  NEWLINE to write expressions for the displacement for both ${vehicle}s. NEWLINE
  For ${vehicle} $R$ this is very simple: MATHSLINE 
  $ s = ${ur}t + \\frac{1}{2} ${ar} t^{2}$ MATHSLINE
  $ s = ${ur}t + ${ar / 2}t^{2}$ NEWLINE
  For $B$ it is a little bit trickier because it has one less second to travel from the checkpoint to the catch up point. Because of this one second delay we will write the equation as so: MATHSLINE
  $ s = ${ub}(t - 1) + \\frac{1}{2} \\times ${ab} (t - 1)^{2}$ MATHSLINE
  $ s = ${ub}t - ${ub} + \\frac{${ab}}{2} (t^{2} - 2t + 1)$ MATHSLINE
  $ s = ${ub}t - ${ub} + ${ab / 2}t^{2} - ${ab}t + \\frac{1}{2} \\times ${ab}$ MATHSLINE
  $ s = ${ab / 2}t^{2} + (${ub} - ${ab})t + ${ab / 2 - ub}$ MATHSLINE
  $ s = ${ab / 2}t^{2} + ${ub - ab}t + ${ab / 2 - ub}$ NEWLINE
  Now we have expressions of displacement for both ${vehicle}s which we can equate to each other. MATHSLINE
  $ ${ur}t + ${ar / 2}t^{2} = ${ab / 2}t^{2} + ${ub - ab}t + ${ab / 2 - ub}$ NEWLINE
  From this we can make a quadratic expression of $t$: MATHSLINE
  $0 = (${ab / 2} - ${ar / 2})t^{2} + (${ub - ab} - ${ur})t + ${ab / 2 - ub}$ MATHSLINE
  $0 = ${ab / 2 - ar / 2}t^{2} + (${ub - ab - ur})t + ${ab / 2 - ub}$ NEWLINE
  We can now use the quadratic formula to calculate our two roots, $${roots.r1}$ and $${
    roots.r2
  }$. We know that the question is asking for a time in the future, so thus the answer must be ${answer}.
  `;

  const part = {
    classroomBundle: {
      question,
      answers,
      working,
      level,
      marks,
      partID,
      clean,
      hint,
      tags,
      syllabus,
    },
    info: {
      time: t,
    },
  };

  return part;
};

export const suvatRaceS = (vehicle, ar, ur, time) => {
  const level = 5;
  const marks = 1;
  const partID = 'AS-M-K5.5';
  const clean = { dp: 1, fraction: false };
  const hint = `We've done all the hard work in the last part, we just need to take our value for time and substitute it into one of the equations you have just made.`;
  const syllabus: ASGlobalLinks[] = ['global/as/mechanics/kinematics/suvat'];
  const tags = ['suvat', 'kinematics', 'time', 'displacement'];

  const que1 = `Find the distance between the checkpoint and the position where the ${vehicle} $B$ caught up with $R$.`;
  const que2 = `How far did the ${vehicle} $R$ travel before it was caught up by ${vehicle} $B$?`;
  const question = [que1, que2][math.randomInt(0, 2)];

  const s = ur * time + 0.5 * ar * time ** 2;

  const answer = `$ {${s}}\\text{m}$`;
  const wrongAnswers = similarAnswers(4, answer, 0.3, -4, 4, 2, false);
  const answers = makeAnswersLayout(answer, wrongAnswers);

  const working = `This is quite an easy extra part. We just have to go back to our equation for ${vehicle} $R$ and substitute in the value of $t$ that we calculated in the last part: MATHSLINE
  $ s = ${ur}t + \\frac{1}{2} ${ar} t^{2}$ MATHSLINE
  $ s = ${ur} \\times ${time} + \\frac{1}{2} ${ar} \\times ${time}^{2}$ NEWLINE
  This calculates the distance to be ${answer}.
  `;

  const part = {
    classroomBundle: {
      question,
      answers,
      working,
      level,
      marks,
      partID,
      clean,
      hint,
      tags,
      syllabus,
    },
    info: {},
  };

  return part;
};

export const train3MotionsFindTnS = () => {
  const level = 5;
  const marks = 5;
  const partID = 'AS-M-K5.6';
  const clean = { dp: 3, fraction: false };
  const hint = `This is a hard question, make sure you have all the information written out neatly for each period of motion. NEWLINE
  Try and create suvat expressions for each period of motion, then solve them simultaneously.`;
  const syllabus: ASGlobalLinks[] = ['global/as/mechanics/kinematics/suvat'];
  const tags = ['suvat', 'kinematics', 'time', 'displacement', 'problem'];

  const a1 = math.randomInt(2, 5);
  const v = a1 * math.randomInt(8, 13);
  const tempVal = math.randomInt(10, 20);
  const km = (tempVal * v) / 1000;
  const time = (math.randomInt(100, 200) + tempVal) / 60;

  const que1 = `A train departs from station $A$ and accelerates uniformly at $ {${a1}}x \\; \\text{ms}^{-2}$ until it is moving at a velocity of $ {${v}}\\text{ms}^{-1}$. For $T$ seconds the train continues at this velocity, after which it decelerates uniformly at $x\\text{ms}^{-2}$ until it comes to a stop at station $B$. The distance between the stations is $ {${km}}\\text{km}$ and the time taken from $A$ to $B$ is $${time}$ minutes. Calculate the values of $x$.`;
  const que2 = `A train leaves the station $A$ with an acceleration of $ {${a1}}x \\; \\text{ms}^{-2}$. When it reaches the speed limit of $ {${v}}\\text{ms}^{-1}$ it stops accelerating and travels at this velocity for $T$ seconds. After this time period the train begins to decelerate at $x\\text{ms}^{-2}$ until it comes to rest at station $B$. The total distance traveled by the train is $ {${km}} \\text{km}$ whilst the total time taken was $${time}$ minutes. What is the value of $x$?`;
  const question = [que1, que2][math.randomInt(0, 2)];

  let x = (v / 2 + v / (2 * a1) - v / a1 - v) / ((1000 * km) / v - time * 60);
  x = Math.round(x * 100) / 100;

  const answer = `$x = ${x}$`;

  const wrongAnswers = similarAnswers(5, answer, 0.3, -10, 10, 2, false);
  const answers = makeAnswersLayout(answer, wrongAnswers);

  const working = `This one is a big one, I'm not gonna lie. But if you can do this then I think you've got kinematics down and your algebra is on point as well. MATHSLINE 
  NEWLINE
  First thing to do, as always, is to list all the suvat information that we have. Let's do this for each of the three periods of motion separately. MATHSLINE
  NEWLINE
  Period 1: MATHSLINE
  $ \\begin{aligned}
    &s = s_1 \\\\
    &u = 0 \\\\
    &v = ${v} \\\\
    &a = ${a1}x \\\\
    &t = t_1 
  \\end{aligned} $ NEWLINE
  Period 2: MATHSLINE
  $ \\begin{aligned}
    &s = s_2 \\\\
    &u = ${v} \\\\
    &v = ${v} \\\\
    &a = 0 \\\\
    &t = T 
  \\end{aligned} $ NEWLINE
  Period 3: MATHSLINE
  $ \\begin{aligned}
    &s = s_3 \\\\
    &u = ${v} \\\\
    &v = 0 \\\\
    &a = -x \\\\
    &t = t_3 
  \\end{aligned} $ NEWLINE
  We can also derive some equations about the total distance and total time: MATHSLINE
  $${km * 1000} = s_1 + s_2 + s_3$ MATHSLINE
  $${time * 60} = t_1 + T + t_3$ NEWLINE
  Note that the values for total distance and time have been converted to SI units because both the velocities and accelerations are in SI units. NEWLINE
  Looking at our suvat information, we can see that for both the first and second periods of motion (where $x$ appears) we have three unknowns. This makes me feel like we are going to need to produce some simultaneous equations to calculate $x$. So let's write out some suvat equations that will include $x$ and another unknown. NEWLINE
  Based on $v = u + at$: MATHSLINE
  $ \\begin{aligned} 
    &${v} = 0 + ${a1} x t_1 \\\\
    &0 = ${v} - x t_3 
  \\end{aligned} $ NEWLINE
  Based on $v^{2} = u^{2} + 2 a s$: MATHSLINE
  $ \\begin{aligned} 
    &${v}^{2} = 0 + 2 ${a1} x s_1 \\\\
    &0 = ${v}^{2} - 2 x s_3 
  \\end{aligned} $ NEWLINE
  We can combine these equations with the total distance and total time equations that we made earlier. Let's rearrange these to make the displacement and time variables the subjects. These will look like: MATHSLINE
  $ \\begin{aligned} 
    &t_1 = \\dfrac{${v}}{${a1} x}  \\\\
    &t_3 = \\dfrac{${v}}{x} \\\\
    &s_1 = \\dfrac{${v}^{2}}{${a1 * 2} x} \\\\
    &s_3 = \\dfrac{${v}^{2}}{2x} 
  \\end{aligned} $ NEWLINE
  Now we can combine these with the total time and distance equations to get: MATHSLINE 
  $${km * 1000} = \\dfrac{${v}^{2}}{${a1 * 2} x} + s_2 + \\dfrac{${v}^{2}}{2x} $ MATHSLINE
  $${time * 60} = \\dfrac{${v}}{${a1} x} + T + \\dfrac{${v}}{x}$ NEWLINE
  That second equation is perfect, it contains two unknowns so is ready to be solved; however, the first equation still contains three unknowns so it can't yet be solved. The trick for fixing this is to use the second period of motion. You can use suvat equations but more simply, in this second period of motion as there is no acceleration we can use the good old speed equals distance over time equation. In our situation we can write it as: MATHSLINE
  $${v} = \\dfrac{s_2}{T}$ MATHSLINE
  $s_2 = ${v} T$ NEWLINE
  We can now combine that with the total distance equation to get: MATHSLINE
  $${km * 1000} = \\dfrac{${v}^{2}}{${a1 * 2} x} + ${v} T + \\dfrac{${v}^{2}}{2x} $ NEWLINE
  Finally we have two simultaneous equations that we can solve for $x$. The first step being to rearrange both to make $T$ the subject: MATHSLINE
  $T = ${time * 60} - \\dfrac{${v}}{${a1} x} - \\dfrac{${v}}{x}$ MATHSLINE
  $T = \\frac{${km * 1000}}{${v}}  - \\dfrac{${v}}{${a1 * 2} x} - \\dfrac{${v}}{2x}$ NEWLINE
  We can now combine these and solve for $x$: MATHSLINE
  $ ${time * 60} - \\dfrac{${v}}{${a1} x} - \\dfrac{${v}}{x} = \\frac{${km * 1000}}{${v}}  - \\frac{${v}}{${a1 *
    2} x} - \\dfrac{${v}}{2x}$ MATHSLINE
  $ ${time * 60} - \\dfrac{${v / a1}}{x} - \\dfrac{${v}}{x} = ${(km * 1000) / v} - \\dfrac{${v / (a1 * 2)}}{x} - \\dfrac{${v /
    2}}{x}$ MATHSLINE
  $ ${time * 60}x - ${v / a1} - ${v} = ${(km * 1000) / v}x - ${v / (a1 * 2)} - ${v / 2}$ MATHSLINE
  $ ${time * 60 - (km * 1000) / v}x  = ${v / a1 + v - v / (a1 * 2) - v / 2}$ MATHSLINE
  $ x  = ${(v / a1 + v - v / (a1 * 2) - v / 2) / (time * 60 - (km * 1000) / v)}$ MATHSLINE
    `;

  const part = {
    classroomBundle: {
      question,
      answers,
      working,
      level,
      marks,
      partID,
      clean,
      hint,
      tags,
      syllabus,
    },
    info: {},
  };

  return part;
};

export const usainBolt = () => {
  const level = 5;
  const marks = 5;
  const partID = 'AS-M-K5.7';
  const clean = { dp: 1, fraction: false };
  const hint = `There are two periods of motion plus an equation for total time and total distance that can all be written out. NEWLINE
  Together these equations can be solved simultaneously.`;
  const syllabus: ASGlobalLinks[] = ['global/as/mechanics/kinematics/suvat'];
  const tags = ['suvat', 'displacement', 'acceleration', 'velocity', 'time'];

  const a = Math.random() * 4 + 7;
  const question = `It is estimated that Usain Bolt accelerates at an average of $ {${a}}\\text{ms}^{-2}$ when he runs a $100$ metre sprint. Let's model his sprint as two separate periods of motion; the first with constant acceleration, which occurs until he reaches his top speed and the second which has a constant velocity. What percentage of time was Usain Bolt accelerating when he set the $100$ metre world record, running it in $9.58$ seconds.
  `;

  const roots = solveQuadratic(0.5 * a, -9.58 * a, 100);
  let t;
  if (roots.r1n > 0 && roots.r1n < 9.58) {
    t = roots.r1;
  } else {
    t = roots.r2;
  }

  let percent = (t * 100) / 9.58;
  percent = math.round(percent) as number;

  const answer = `$${percent}$ %`;
  const wrongAnswers = similarAnswers(4, answer, 0.3, -6, 8, 0, false);
  const answers = makeAnswersLayout(answer, wrongAnswers);

  const working = `As we're dealing with constant acceleration and time calculation this question is going to have to be solved using suvat equations. Let's write down the suvat information for both periods of motion. MATHSLINE 
  NEWLINE
  For the first period of motion: MATHSLINE
  $ \\begin{aligned} 
    &s = s_1 \\\\
    &u = 0 \\\\
    &v = ? \\\\
    &a = ${a} \\\\
    &t = t_1
  \\end{aligned} $ NEWLINE
  For the second period of motion: MATHSLINE$ 
  \\begin{aligned} 
    &s = s_2 \\\\
    &u = v \\\\
    &a = 10 \\\\
    &t = t_2
  \\end{aligned} $ NEWLINE
  We can also write a few equations relating the periods of motion: MATHSLINE
  $100 = s_1 + s_2$ MATHSLINE
  $9.58 = t_1 + t_2$ NEWLINE
  As both periods of motion have multiple unknowns you can guess that we're going to have to use simultaneous equations to find t_1 (this is the length of time that Bolt is accelerating for). Let's create some suvat equations with time in, I'm going to avoid using velocity because we have no immediate way to work that out. Using $s= ut + \\frac{1}{2}at^{2}$ I can make: MATHSLINE
  $s_1 = \\frac{1}{2} a t_1^{2}$ MATHSLINE
  $s_2 = v t_2$ NEWLINE
  Let's now substitute these into the equation for total distance: MATHSLINE
  $100 = \\frac{1}{2} \\times ${a} t_1^{2} + v t_2$ NEWLINE
  We're almost ready to solve the equations simultaneously however we still have three variables in this equation. So let's try and create another equation relating $t_1$ and $v$. The simplest suvat equation I think would work is $v = u + at$. I can use this and the information in the first period of motion to get: MATHSLINE
  $v = ${a} t_1$ NEWLINE
  Let's substitute this into the previous equation we just made to get: MATHSLINE 
  $100 = \\frac{1}{2} \\times ${a} t_1^{2} + ${a} t_1 t_2$ NEWLINE
  Now we can simultaneously solve this equation and the equation for total time, I'm going to first rearrange the latter to make $t_2$ the subject: MATHSLINE
  $t_2 = 9.58 - t_1$ NEWLINE
  Now i'm going to substitute this into the previous equation: MATHSLINE
  $100 = \\frac{1}{2} \\times ${a} t_1^{2} + ${a} t_1 (9.58 - t_1)$ NEWLINE
  Now let's simplify this expression: MATHSLINE
  $100 = \\frac{1}{2} \\times ${a} t_1^{2} + ${a} \\times 9.58 t_1 - ${a} t_1^{2}$ MATHSLINE
  $0 = \\frac{1}{2} \\times ${a} t_1^{2} - ${a * 9.58} t_1 + 100$ NEWLINE
  You can see here that we have a quadratic equation so let's find its solutions using the quadratic formula. I calculate the two roots to be $${
    roots.r1
  }$ and $${
    roots.r2
  }$. The only reasonable answer is $t$ because this falls within the time limits of the race. We can calculate what percentage of the race time it is by dividing it by the total time and multiplying by $100$. This gives us the answer of ${answer}. 
  `;

  const part = {
    classroomBundle: {
      question,
      answers,
      working,
      level,
      marks,
      partID,
      clean,
      hint,
      tags,
      syllabus,
    },
    info: {},
  };

  return part;
};

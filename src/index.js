const messages = [
    "Self-Esteem as a Spiritual Discipline",
    "The “I”, the ego, the deepest self, is the faculty of awareness, the ability to think. Across a lifetime, knowledge grows, convictions may change, emotions come and go; but that which knows, judges, and feels --that is the changeless constant within us. ",
    "If self-esteem is not reality-based, if it is not rooted in such virtues as rationality, self-responsibility, and integrity, it is not self-esteem.",
    "Sometimes people ask, “Can a person have too much self-esteem? Can a person have too much physical health? In both cases, the answer is no.",
    "The same thing we do every night, Pinky - try to take over the world!",
    "If you face life without the conviction that you have a right to be happy, you will not fight for your happiness. ",
    "Do you know which of your actions have a positive effect on your self-esteem? Do you know which ones have a negative effect?",
    "If you want to teach your children honesty, do not punish them for telling the truth.",
    "No one was ever made good by being informed he or she is bad.",
    "A strong sense of personal identity is the product of two things: independent thinking and the possession of an integrated set of values.",
    "Self-esteem is the state of those at war neither with themselves nor others. ",
    "You are not moved to change those things whose reality you deny. ",
    "The quest of reason is for the noncontradictory integration of experience. ",
    "Often, a flight from reality is a flight from the reality of your inner state, the thoughts and feelings you are frightened to face or understand. ",
    "Rationality –respect for the facts of reality—must include respect for the facts of your own being. Your inner world, too, is part of reality. No one can be said to be living consciously who exempts self-awareness and self-examination from the agenda. "
  ];
  
  const funnyCommit = () => {
    const message = messages[Math.floor(Math.random() * messages.length)];
    console.log(`\x1b[34m${message}\x1b[89m`);
  }
  
  module.exports = {
    funnyCommit
  };
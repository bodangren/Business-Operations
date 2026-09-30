import Lesson01Phase1 from "@/components/student/Lesson01Phase1"

export default function Phase1Content() {
  const videoData = {
    title: "From Chaos to Control: Starting Your Business with a Smart Ledger",
    description: "Follow Sarah's journey as she launches TechStart Solutions and quickly learns that tracking finances in a notebook is a recipe for disaster. See how the stress of future taxes pushes her to create her first 'Smart Ledger'—a critical first step towards building a professional, sustainable business. This is the foundation of keeping 'clean books' from day one.",
    youtubeId: "IN4MBaOdLRY",
    duration: "4:30",
    transcript: `(Sarah sits in a well-lit, modern office space, speaking directly to the camera with a confident and reflective tone.)

When I first launched TechStart Solutions, the feeling was just… incredible. I remember landing my first few clients back-to-back. There was a local bakery who needed a new website—that was a $2,200 project. Then a pet groomer for a social media setup, which was about $650. And right after that, a dental office for SEO work for another $1,100. The money was actually coming in. I honestly thought, 'Okay, this is it. I'm doing it.'

But what nobody saw was the chaos behind the curtain. While I was so focused on delivering great work for them, my own business records... they were a disaster. I was tracking everything in notebooks. Seriously. Every invoice, every payment, every little software subscription. I was just scribbling it down, thinking I could keep it all straight in my head. I felt completely overwhelmed by just the most basic record-keeping.

The real wake-up call came when I started thinking about taxes. I had this moment of pure panic. I looked at this stack of notebooks and just thought, 'How am I ever going to pull accurate numbers out of this? What's my actual profit? If an accountant asks me for a specific receipt, am I going to spend a week looking for it?' I realized my system wasn't just messy; it was a huge risk. It was totally unsustainable.

That's when I decided I needed to build what this course calls a 'Smart Ledger'. It wasn't just about making a list. It was about building a real system—something organized, something I could trust. The idea was to have 'clean books' from day one. I learned pretty quickly that you don't do this just for your accountant or for some future investor. You do it for yourself, so you can actually understand what's happening in your own company and make decisions based on facts, not just gut feelings.

Once I built that first proper ledger, it was like a weight was lifted. I wasn't overwhelmed anymore. I had clarity. I could see my actual financial health in real time, and that gave me so much confidence. But, of course, solving one problem just shows you the next one. My new, organized system made it painfully obvious just how much time I was spending on manual data entry. Every single transaction still had to be typed in by hand. And that new challenge—all that wasted time—is what pushed me to figure out automation, which I think is what you're covering next.`
  }

  const unitConfig = {
    colorScheme: {
      primary: "blue",
      secondary: "blue-200",
      text: "blue-800",
      cardBg: "blue-50",
      cardBorder: "blue-200"
    },
    introText: {
      welcomeText: "Welcome to the world of business operations! It's a place where a great idea needs a great plan to succeed. This unit is all about building one of the most important parts of that plan: a trustworthy system for managing money. To guide us, we'll follow the story of a new entrepreneur named Sarah Chen, the founder of a digital marketing startup called TechStart Solutions.",
      contextText: "When Sarah first launched her company, the feeling was incredible. She was passionate and talented, and clients noticed. But as you'll discover, there was chaos behind the curtain that threatened everything she was building. Let's hear her story directly."
    },
    reflectionText: "Sarah's experience reveals a critical truth about entrepreneurship: even the most successful businesses can be brought down by poor financial organization. Her story isn't unique—many startups fail not because their product or service isn't good enough, but because they can't demonstrate financial credibility to investors, lenders, or even themselves.",
    transitionText: "Just like Sarah discovered, having a great business idea isn't enough—you need systems that can grow with your success. In the next phase, we'll dive deeper into TechStart Solutions' business model and explore exactly why financial record-keeping is so critical for building investor confidence and long-term business sustainability.",
    turnAndTalkPrompt: {
      description: "Think about a time when you or someone you know had to organize something important (like school assignments, personal finances, or a group project) and it became chaotic. Share with a partner:",
      questions: [
        "What went wrong with the organization system?",
        "How did the chaos make you feel?",
        "What would have prevented the problem?",
        "How does this connect to Sarah's experience with TechStart?"
      ]
    }
  }

  return (
    <Lesson01Phase1
      videoData={videoData}

      unitConfig={unitConfig}
    />
  )
}
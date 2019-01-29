import React from "react";
//Help — book API, where r u?
//Summaries and images from goodreads.com

const books = [
    // {
    //     title: "If You Really Loved Me",
    //     author: "Ann Rule",
    //     finished: 2018,
    //     inProgress: true,
    //     "tags": [
    //         "non-fiction",
    //         "true crime",
    //     ],
    //     goodreadsUrl: "https://www.goodreads.com/book/show/118469.If_You_Really_Loved_Me",
    //     coverImg: "https://images.gr-assets.com/books/1348985837l/118469.jpg",
    //     summary: <div>
    //         <p>
    //             David Brown was the consummate entrepreneur: a computer wizard and millionaire
    //             by age thirty-two. When his beautiful young wife was shot to death as she slept,
    //             Brown's fourteen-year-old daughter, Cinnamon, confessed to killing her stepmother.
    //             The California courts sentenced her harshly: twenty-four years to life. But in
    //             the wake of Cinnamon's murder conviction, thanks in part to two determined lawmen,
    //             the twisted private world of David Brown himself unfolded with astonishing clarity
    //             -- revealing a trail of perverse love, twisted secrets, and evil mind games.
    //         </p>
    //         <p>
    //             A complex and often dangerous investigation suggested a horrifying scenario: Was
    //             the seemingly bland David Brown really a stone-cold killer who convinced his
    //             own daughter to prove her love by killing for him? A man who turned young women
    //             into his own personal slaves, who collected nearly $1 million in insurance money,
    //             and married his dead wife's teenage sister, David Brown was a sociopath who would
    //             stop at nothing...a deadly charmer who almost got away with everything.
    //         </p>
    //     </div>
    // },
    {
        title: "Class Trip & The Mustache",
        author: "Emmanuel Carrere",
        finished: "",
        inProgress: true,
        "tags": [
            "fiction",
            "mystery",
        ],
        goodreadsUrl: "https://www.goodreads.com/book/show/340240.Two_by_Carr_re",
        coverImg: "https://images.gr-assets.com/books/1388849971l/340240.jpg",
        summary: <div>
            <p>
                Two harrowing tales of pyschological suspense--hailed as " stunning"
                (John Updike)--from the mathematician of horror.
            </p>
            <p>
                Two by Carrere brings together the greatest works of Emmanuel Carrere,
                "the Stephen King of France" (Mirabella), two novels that are at once
                gripping suspense stories and laser probes into the modern psyche.
            </p>
            <p>
                The Mustache begins with a husband's playful question to his wife:
                "What would you say if I shaved off my mustache?" But, for the hero
                of The Mustache, that simple question catapults him into a metaphysical
                nightmare as his wife and friends not only fail to notice his newly
                clean-shaven appearance but deny the existence altogether of his
                former mustache. Is he the victim of some bad joke? Or have they
                all suddenly gone mad?
            </p>
            <p>
                In Class Trip, little Nicolas embarks on an ill-fated overnight
                excursion. Prone to lurid imaginings of kidnappings and organ
                thefts, Nicolas watches his fantasies grow horrifyingly real
                when a local child disappears. Nicolas takes it upon himself
                to investigate, fearlessly playing detective--until he uncovers
                the devastating truth. Dramatic, taut with intensity, Carrere's
                depictions of the terrifying anxieties and shifting realities of
                modern life are marvels of concentrated emotion.
            </p>
        </div>
    },
    {
        title: "Kitchen Confidential: Adventures in the Culinary Underbelly",
        author: "Anthony Bourdain",
        finished: 2018,
        audiobook: true,
        "tags": [
            "non-fiction",
            "memoir",
        ],
        goodreadsUrl: "https://www.goodreads.com/book/show/33313.Kitchen_Confidential",
        coverImg: "https://images.gr-assets.com/books/1433739086l/33313.jpg",
        summary: <div>
            <p>
                A deliciously funny, delectably shocking banquet of wild-but-true tales of life
                in the culinary trade from Chef Anthony Bourdain, laying out his more than a
                quarter-century of drugs, sex, and haute cuisine—now with all-new,
                never-before-published material.
            </p>
            <p>
                New York Chef Tony Bourdain gives away secrets of the trade in his wickedly
                funny, inspiring memoir/expose. <i>Kitchen Confidential</i> reveals what Bourdain calls
                "twenty-five years of sex, drugs, bad behavior and haute cuisine."
            </p>
        </div>
    },
    {
        title: "The Chickenshit Club: Why the Justice Department Fails to Prosecute Executives",
        author: "Jesse Eisinger",
        inProgress: true,
        audiobook: true,
        "tags": [
            "non-fiction",
            "true crime",
        ],
        goodreadsUrl: "https://www.goodreads.com/book/show/34397551-the-chickenshit-club",
        coverImg: "https://images.gr-assets.com/books/1499862781l/34397551.jpg",
        summary: <div>
            <p>
                From Pulitzer Prize–winning journalist Jesse Eisinger, “a fast moving, fly-on-the-wall,
                disheartening look at the deterioration of the Justice Department and the Securities and
                Exchange Commission…It is a book of superheroes” (San Franscisco Review of Books).
            </p>
            <p>
                Why were no bankers put in prison after the financial crisis of 2008? Why do CEOs seem
                to commit wrongdoing with impunity? The problem goes beyond banks deemed “Too Big to
                Fail” to almost every large corporation in America—to pharmaceutical companies and auto
                manufacturers and beyond. <i>The Chickenshit Club</i>—an inside reference to prosecutors too
                scared of failure and too daunted by legal impediments to do their jobs—explains why
                in “an absorbing financial history, a monumental work of journalism… a first-rate study
                of the federal bureaucracy” (<i>Bloomberg Businessweek</i>).
            </p>
            <p>
                Jesse Eisigner begins the story in the 1970s, when the government pioneered the notion
                that top corporate executives, not just seedy crooks, could commit heinous crimes and
                go to prison. He brings us to trading desks on Wall Street, to corporate boardrooms and
                the offices of prosecutors and FBI agents. These revealing looks provide context for the
                evolution of the Justice Department’s approach to pursuing corporate criminals through
                the early 2000s and into the Justice Department’s approach to pursuing corporate criminals
                through the early 2000s and into the Justice Department of today, including the
                prosecutorial fiascos, corporate lobbying, trial losses, and culture shifts that have
                stripped the government of the will and ability to prosecute top corporate executives.
            </p>
        </div>
    },
    {
        title: "The Indifferent Stars Above: The Harrowing Saga of a Donner Party Bride",
        author: "Daniel James Brown",
        inProgress: true,
        audiobook: true,
        "tags": [
            "non-fiction",
            "biography",
        ],
        goodreadsUrl: "https://www.goodreads.com/book/show/6033525-the-indifferent-stars-above",
        coverImg: "https://images.gr-assets.com/books/1438825353l/6033525.jpg",
        summary: <div>
            <p>
                In April of 1846, twenty-one-year-old Sarah Graves, intent on a better future, set
                 out west from Illinois with her new husband, her parents, and eight siblings.
                 Seven months later, after joining a party of emigrants led by George Donner,
                 they reached the Sierra Nevada Mountains as the first heavy snows of the season
                 closed the pass ahead of them. In early December, starving and desperate, Sarah
                 and fourteen others set out for California on snowshoes and, over the next
                 thirty-two days, endured almost unfathomable hardships and horrors.
            </p>
            <p>
                In this gripping narrative, Daniel James Brown sheds new light on one of the
                most infamous events in American history. Following every painful footstep of
                Sarah's journey with the Donner Party, Brown produces a tale both spellbinding
                and richly informative.
            </p>
        </div>
    },
    {
        title: "Pain Killer: An Empire of Deceit and the Origin of America's Opioid Epidemic",
        author: "Barry Meier",
        inProgress: false,
        audiobook: true,
        "tags": [
            "non-fiction",
            "medicine",
        ],
        goodreadsUrl: "https://www.goodreads.com/book/show/1226104.Pain_Killer",
        coverImg: "https://images.gr-assets.com/books/1312051807l/1226104.jpg",
        summary: <div>
            <p>
                OxyContin, a potent painkiller containing opium-derived oxycodone as its key
                active ingredient, was first sold in 1996 as a treatment for cancer patients
                and other chronic pain sufferers. From the start, the drug's manufacturer
                aggressively marketed its patented time-release formula as a breakthrough in
                the effort to reduce prescription drug abuse. It wasn't long, however, before
                thrill-seeking teenagers shattered that illusion of safety; by simply crushing
                an "Oxy," they were able to tap into a high so seductive it would come to
                dominate their lives. Some patients, seeking relief from pain, also found
                themselves drawn to the drug's dark side.
            </p>
            <p>
                <i>Pain Killer</i> takes readers on a journey of discovery that begins with the true
                story of Lindsay, a high-school cheerleader in Virginia who gets hooked on Oxys,
                and expands outward to explore the critical issues of legitimate pain management,
                prescription drug abuse, and how the misuse of science by the drug industry
                threatens the public good. With the fast-rising abuse of prescription drugs by
                young people ringing alarm bells within government, the how and why behind the
                OxyContin disaster is a gripping read not only for parents, but also for medical
                professionals, community leaders, business executives, and all those concerned
                with this crisis.
            </p>
        </div>
    },
    {
        title: "The Stranger Beside Me",
        author: "Ann Rule",
        finished: 2018,
        "tags": [
            "non-fiction",
            "true crime",
        ],
        goodreadsUrl: "https://www.goodreads.com/book/show/15654.The_Stranger_Beside_Me",
        coverImg: "https://images.gr-assets.com/books/1330072383l/15654.jpg",
        summary: <div>
            <p>
                Ann Rule was a writer working on the biggest story of her life, tracking
                down a brutal mass-murderer. Little did she know that Ted Bundy, her close
                friend, was the savage slayer she was hunting.
            </p>
        </div>
    },
    {
        title: "Sprint: How to Solve Big Problems and Test New Ideas in Just Five Days",
        author: "Jake Knapp",
        finished: 2018,
        "tags": [
            "non-fiction",
            "technology",
        ],
        goodreadsUrl: "https://www.goodreads.com/book/show/25814544-sprint",
        coverImg: "https://images.gr-assets.com/books/1457284924l/25814544.jpg",
        summary: <div>
            <p>
                From three design partners at Google Ventures, a unique five-day process
                for solving tough problems using design, prototyping, and testing ideas
                with customers.
            </p>
            <p>
                The startups that Google Ventures invest in face big questions every day:
                Where’s the most important place to focus your effort, and how do you start?
                What will your ideas look like in real life? How many meetings and discussions
                does it take before you can be sure you have the right solution to a problem?
                Business owners and investors want their companies and the people who lead
                them to be equipped to answer these questions—and quickly. And now there’s
                a sure-fire way to solve their problems and test solutions: the sprint.
            </p>
            <p>
                While working at Google, designer Jake Knapp created a unique problem-solving
                method that he coined a “design sprint”—a five-day process to help companies
                answer crucial questions. His ‘sprints’ were used on everything from Google
                Search to Chrome to Google X. When he moved to Google Ventures, he joined
                Braden Kowitz and John Zeratsky, both designers and partners there who worked
                on products like YouTube and Gmail. Together Knapp, Zeratsky, and Kowitz have
                run over 100 sprints with their portfolio companies. They’ve seen firsthand
                how sprints can overcome challenges in all kinds of companies: healthcare,
                fitness, finance, retailers, and more.
            </p>
            <p>
                A practical guide to answering business questions, Sprint is a book for groups
                of any size, from small startups to Fortune 100s, from teachers to non-profits.
                It’s for anyone with a big opportunity, problem, or idea who needs to get
                answers today.
            </p>
        </div>
    },
    {
        title: "I'll Be Gone in the Dark",
        author: "Michelle McNamara",
        finished: 2018,
        audiobook: true,
        "tags": [
            "non-fiction",
            "true crime",
        ],
        goodreadsUrl: "https://www.goodreads.com/book/show/35068432-i-ll-be-gone-in-the-dark",
        coverImg: "https://images.gr-assets.com/books/1499131009l/35068432.jpg",
        summary: <div>
            <p>
                A masterful true crime account of the Golden State Killer—the elusive
                serial rapist turned murderer who terrorized California for over a
                decade—from Michelle McNamara, the gifted journalist who died tragically
                while investigating the case.
            </p>
            <p>
                <i>"You’ll be silent forever, and I’ll be gone in the dark."</i>
            </p>
            <p>
                For more than ten years, a mysterious and violent predator committed
                fifty sexual assaults in Northern California before moving south,
                where he perpetrated ten sadistic murders. Then he disappeared,
                eluding capture by multiple police forces and some of the best detectives
                in the area.
            </p>
            <p>
                Three decades later, Michelle McNamara, a true crime journalist who
                created the popular website TrueCrimeDiary.com, was determined to
                find the violent psychopath she called "the Golden State Killer."
                Michelle pored over police reports, interviewed victims, and embedded
                herself in the online communities that were as obsessed with the case
                as she was.
            </p>
            <p>
                At the time of the crimes, the Golden State Killer was between the
                ages of eighteen and thirty, Caucasian, and athletic—capable of
                vaulting tall fences. He always wore a mask. After choosing a victim—he
                favored suburban couples—he often entered their home when no one was
                there, studying family pictures, mastering the layout. He attacked while
                they slept, using a flashlight to awaken and blind them. Though they
                could not recognize him, his victims recalled his voice: a guttural
                whisper through clenched teeth, abrupt and threatening.
            </p>
            <p>
                <i>I’ll Be Gone in the Dark</i>—the masterpiece McNamara was writing
                at the time of her sudden death—offers an atmospheric snapshot of a
                moment in American history and a chilling account of a criminal mastermind
                and the wreckage he left behind. It is also a portrait of a woman’s
                obsession and her unflagging pursuit of the truth. Framed by an introduction
                by Gillian Flynn and an afterword by her husband, Patton Oswalt, the book
                was completed by Michelle’s lead researcher and a close colleague.
                Utterly original and compelling, it is destined to become a true crime
                classic—and may at last unmask the Golden State Killer.
            </p>
        </div>
    },
    {
        title: "Bad Blood",
        author: "John Carreyrou",
        finished: 2018,
        audiobook: true,
        "tags": [
            "non-fiction",
            "true crime",
        ],
        goodreadsUrl: "https://www.goodreads.com/book/show/34397551-the-chickenshit-club?from_search=true",
        coverImg: "https://images.gr-assets.com/books/1499862781l/34397551.jpg",
        summary: <div>
            <p>
                From Pulitzer Prize–winning journalist Jesse Eisinger, “a fast moving, fly-on-the-wall,
                disheartening look at the deterioration of the Justice Department and the Securities and
                Exchange Commission…It is a book of superheroes” (San Franscisco Review of Books).
            </p>
            <p>
                Why were no bankers put in prison after the financial crisis of 2008? Why do CEOs seem
                to commit wrongdoing with impunity? The problem goes beyond banks deemed “Too Big to
                Fail” to almost every large corporation in America—to pharmaceutical companies and auto
                manufacturers and beyond. <i>The Chickenshit Club</i>—an inside reference to prosecutors too
                scared of failure and too daunted by legal impediments to do their jobs—explains why
                in “an absorbing financial history, a monumental work of journalism… a first-rate study
                of the federal bureaucracy” (<i>Bloomberg Businessweek</i>).
            </p>
            <p>
                Jesse Eisigner begins the story in the 1970s, when the government pioneered the notion
                that top corporate executives, not just seedy crooks, could commit heinous crimes and
                go to prison. He brings us to trading desks on Wall Street, to corporate boardrooms and
                the offices of prosecutors and FBI agents. These revealing looks provide context for the
                evolution of the Justice Department’s approach to pursuing corporate criminals through
                the early 2000s and into the Justice Department’s approach to pursuing corporate criminals
                through the early 2000s and into the Justice Department of today, including the
                prosecutorial fiascos, corporate lobbying, trial losses, and culture shifts that have
                stripped the government of the will and ability to prosecute top corporate executives.
            </p>
        </div>
    },
    {
        title: "Misery",
        author: "Stephen King",
        finished: 2018,
        "tags": [
            "fiction",
            "horror"
        ],
        goodreadsUrl: "https://www.goodreads.com/book/show/34397551-the-chickenshit-club?from_search=true",
        coverImg: "https://images.gr-assets.com/books/1499862781l/34397551.jpg",
        summary: <div>
            <p>
                From Pulitzer Prize–winning journalist Jesse Eisinger, “a fast moving, fly-on-the-wall,
                disheartening look at the deterioration of the Justice Department and the Securities and
                Exchange Commission…It is a book of superheroes” (San Franscisco Review of Books).
            </p>
            <p>
                Why were no bankers put in prison after the financial crisis of 2008? Why do CEOs seem
                to commit wrongdoing with impunity? The problem goes beyond banks deemed “Too Big to
                Fail” to almost every large corporation in America—to pharmaceutical companies and auto
                manufacturers and beyond. <i>The Chickenshit Club</i>—an inside reference to prosecutors too
                scared of failure and too daunted by legal impediments to do their jobs—explains why
                in “an absorbing financial history, a monumental work of journalism… a first-rate study
                of the federal bureaucracy” (<i>Bloomberg Businessweek</i>).
            </p>
            <p>
                Jesse Eisigner begins the story in the 1970s, when the government pioneered the notion
                that top corporate executives, not just seedy crooks, could commit heinous crimes and
                go to prison. He brings us to trading desks on Wall Street, to corporate boardrooms and
                the offices of prosecutors and FBI agents. These revealing looks provide context for the
                evolution of the Justice Department’s approach to pursuing corporate criminals through
                the early 2000s and into the Justice Department’s approach to pursuing corporate criminals
                through the early 2000s and into the Justice Department of today, including the
                prosecutorial fiascos, corporate lobbying, trial losses, and culture shifts that have
                stripped the government of the will and ability to prosecute top corporate executives.
            </p>
        </div>
    },
    {
        title: "The Stand",
        author: "Stephen King",
        finished: 2018,
        reread: true,
        "tags": [
            "fiction",
            "horror"
        ],
        goodreadsUrl: "https://www.goodreads.com/book/show/34397551-the-chickenshit-club?from_search=true",
        coverImg: "https://images.gr-assets.com/books/1499862781l/34397551.jpg",
        summary: <div>
            <p>
                From Pulitzer Prize–winning journalist Jesse Eisinger, “a fast moving, fly-on-the-wall,
                disheartening look at the deterioration of the Justice Department and the Securities and
                Exchange Commission…It is a book of superheroes” (San Franscisco Review of Books).
            </p>
            <p>
                Why were no bankers put in prison after the financial crisis of 2008? Why do CEOs seem
                to commit wrongdoing with impunity? The problem goes beyond banks deemed “Too Big to
                Fail” to almost every large corporation in America—to pharmaceutical companies and auto
                manufacturers and beyond. <i>The Chickenshit Club</i>—an inside reference to prosecutors too
                scared of failure and too daunted by legal impediments to do their jobs—explains why
                in “an absorbing financial history, a monumental work of journalism… a first-rate study
                of the federal bureaucracy” (<i>Bloomberg Businessweek</i>).
            </p>
            <p>
                Jesse Eisigner begins the story in the 1970s, when the government pioneered the notion
                that top corporate executives, not just seedy crooks, could commit heinous crimes and
                go to prison. He brings us to trading desks on Wall Street, to corporate boardrooms and
                the offices of prosecutors and FBI agents. These revealing looks provide context for the
                evolution of the Justice Department’s approach to pursuing corporate criminals through
                the early 2000s and into the Justice Department’s approach to pursuing corporate criminals
                through the early 2000s and into the Justice Department of today, including the
                prosecutorial fiascos, corporate lobbying, trial losses, and culture shifts that have
                stripped the government of the will and ability to prosecute top corporate executives.
            </p>
        </div>
    },
    {
        title: "Matilda",
        author: "Roald Dahl",
        finished: 2018,
        reread: true,
        "tags": [
            "fiction",
            "children's literature",
        ]
    },
    {
        title: "Stranger With My Face",
        author: "Lois Duncan",
        finished: 2018,
        reread: true,
        "tags": [
            "fiction",
            "horror",
        ]
    },
    {
        title: "Before the Fall",
        author: "Noah Hawley",
        finished: 2018,
        "tags": [
            "fiction",
            "mystery"
        ]
    },
    {
        foo: 1,
        title: "Altered Carbon",
        author: "Richard Morgan",
        finished: 2018,
        "tags": [
            "fiction",
            "sci-fi",
        ]
    },
    {
        title: "Interactive Data Visualization for the Web: An Introduction to Designing with D3",
        author: "Scott Murray",
        finished: 2018,
        "tags": [
            "non-fiction",
            "technology",
        ]
    },
    {
        title: "Trapped",
        author: "R. L. Stine",
        finished: 2018,
        reread: true,
        "tags": [
            "fiction",
            "horror",
        ]
    },
];

export default books;
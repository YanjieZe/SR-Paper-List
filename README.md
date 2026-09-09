# SR-Paper-List

Robot learning in **Science Robotics**, January 1, 2024 – September 9, 2026.

[**Browse the website →**](https://sr.yanjieze.com) · [Search & verification notes](SEARCH_NOTES.md) · [Structured data](papers.json)

**68 papers** · 52 research articles · 16 reviews / perspectives · **6 verified cover papers**

| Year | Papers |
|---|---:|
| 2026 | 21 |
| 2025 | 30 |
| 2024 | 17 |

## Scope

Research where learning supports robot action, perception, interaction, adaptation, or design, plus relevant reviews and perspectives. Editorials, research highlights, corrections, and hardware-only studies are excluded. This is a broad curated index, not a guarantee of exhaustive full-text screening. Dates are journal publication dates, not arXiv dates.

**Task/domain and learning method are separate, overlapping labels.** The sections below use each paper's primary domain; the website filters across every tag. BC means supervised action prediction from demonstrations. Retrieval-based imitation, motion imitation with RL, and policy distillation are not automatically labeled BC. Reviews / Perspectives is a browsing group, not a claim about the publisher's exact article subtype.

## 🌟 Cover papers

Cover badges require a publisher announcement or a reproduced journal cover with an explicit attribution by the author institution or project. Each badge links to its evidence. Other papers remain **not yet verified**, rather than being labeled non-cover. See the coverage notes for unresolved candidates.

- **[Agile perceptive multiskill locomotion for quadrupedal robots in the wild](https://doi.org/10.1126/scirobotics.adz7397)** — 2026-07-15; [cover evidence](https://kaist.ac.kr/newsen/html/news/?GotoPage=1&list_e_date=&list_s_date=&mng_no=64450&mode=V&skey=&sval=WWW).
- **[A careful examination of large behavior models for multitask dexterous manipulation](https://doi.org/10.1126/scirobotics.aea6201)** — 2026-04-15; [cover evidence](https://toyotaresearchinstitute.github.io/lbm1/).
- **[Learning realistic lip motions for humanoid face robots](https://doi.org/10.1126/scirobotics.adx3017)** — 2026-01-14; [cover evidence](https://www.engineering.columbia.edu/about/news/robot-learns-lip-sync).
- **[Learning a thousand tasks in a day](https://doi.org/10.1126/scirobotics.adv7594)** — 2025-11-12; [cover evidence](https://www.robot-learning.uk/learning-1000-tasks).
- **[SRT-H: A hierarchical framework for autonomous surgery via language-conditioned imitation learning](https://doi.org/10.1126/scirobotics.adt5254)** — 2025-07-09; [cover evidence](https://bsky.app/profile/science.org/post/3ltxbwuy3j62o).
- **[NeuralFeels with neural fields: Visuotactile perception for in-hand manipulation](https://doi.org/10.1126/scirobotics.adl0628)** — 2024-11-13; [cover evidence](https://www.ri.cmu.edu/cmu-and-partners-redefine-robotic-perception-with-neuralfeels/).

## Browse by domain

- [Aerial Robotics](#aerial-robotics) (5)
- [Control](#control) (2)
- [Dexterous Manipulation](#dexterous-manipulation) (4)
- [Field Robotics](#field-robotics) (1)
- [Human–Robot Interaction](#human-robot-interaction) (7)
- [Locomotion](#locomotion) (15)
- [Manipulation](#manipulation) (8)
- [Multi-Robot Systems](#multi-robot-systems) (3)
- [Navigation](#navigation) (4)
- [Perception](#perception) (3)
- [Robot Design](#robot-design) (1)
- [Soft Robotics](#soft-robotics) (2)
- [Surgical Robotics](#surgical-robotics) (7)
- [Wearable Robotics](#wearable-robotics) (6)

## Aerial Robotics

### [Precise aggressive aerial maneuvers with sensorimotor policies](https://doi.org/10.1126/scirobotics.aeb0180)

2026-06-10 · **Research Article** · Science Robotics 11(115)

Tianyue Wu, Guangtong Xu, Zihan Wang, Junxiao Lin, Tianyang Chen, Yuze Wu, Zhichao Han, Zhiyang Liu, Fei Gao

Learns vision-to-control policies for aggressive gap traversal, using planner initialization and simulation distillation.

**Domain:** Aerial Robotics · Navigation · Control  
**Method:** Reinforcement Learning · Policy Distillation · Hybrid Methods

[Paper](https://doi.org/10.1126/scirobotics.aeb0180)

### [RAPTOR: A foundation policy for quadrotor control](https://doi.org/10.1126/scirobotics.aec1481)

2026-05-13 · **Research Article** · Science Robotics 11(114)

Jonas Eschmann, Dario Albani, Giuseppe Loianno

Distills many specialized teachers into a recurrent quadrotor policy that adapts to unseen hardware.

**Domain:** Aerial Robotics · Control  
**Method:** Reinforcement Learning · Policy Distillation · Foundation Models

[Paper](https://doi.org/10.1126/scirobotics.aec1481) · [Project](https://raptor.rl.tools) · [Code](https://github.com/rl-tools/raptor) · [Open version](https://arxiv.org/abs/2509.11481)

### [Milliwatt ultrasound for navigation in visually degraded environments on palm-sized aerial robots](https://doi.org/10.1126/scirobotics.adz9609)

2026-03-25 · **Research Article** · Science Robotics 11(112)

Manoj Velmurugan, Phillip Brush, Colin Balfour, Richard J Przybyla, Nitin J Sanket

Uses learned ultrasound denoising to navigate small aerial robots through fog, darkness, and clutter.

**Domain:** Aerial Robotics · Navigation · Perception  
**Method:** Supervised Learning

[Paper](https://doi.org/10.1126/scirobotics.adz9609)

### [Optimality principles in spacecraft neural guidance and control](https://doi.org/10.1126/scirobotics.adi6421)

2024-06-19 · **Review / Perspective** · Science Robotics 9(91)

Dario Izzo, Emmanuel Blazquez, Robin Ferede, Sebastien Origer, Christophe De Wagter, Guido C H E de Croon

Reviews neural guidance and control networks that learn optimal actions for spacecraft and drone tasks.

**Domain:** Aerial Robotics · Control  
**Method:** Model-Based Learning · Supervised Learning

[Paper](https://doi.org/10.1126/scirobotics.adi6421)

### [Fully neuromorphic vision and control for autonomous drone flight](https://doi.org/10.1126/scirobotics.adi0591)

2024-05-15 · **Research Article** · Science Robotics 9(90)

F Paredes-Vallés, J J Hagenaars, J Dupeyroux, S Stroobants, Y Xu, G C H E de Croon

Trains an event-based spiking vision-to-control pipeline that transfers from simulation to onboard drone flight.

**Domain:** Aerial Robotics · Control · Perception  
**Method:** Neuromorphic Learning · Self-Supervised Learning · Evolutionary Learning

[Paper](https://doi.org/10.1126/scirobotics.adi0591)

## Control

### ["Data will solve robotics and automation: True or false?": A debate](https://doi.org/10.1126/scirobotics.aea7897)

2025-08-27 · **Review / Perspective** · Science Robotics 10(105)

Nancy M Amato, Seth Hutchinson, Animesh Garg, Aude Billard, Daniela Rus, Russ Tedrake, Frank Park, Ken Goldberg

Presents a debate on whether scaling data alone can solve robotics and automation.

**Domain:** Control · Manipulation  
**Method:** Foundation Models

[Paper](https://doi.org/10.1126/scirobotics.aea7897)

### [A neuromechanics solution for adjustable robot compliance and accuracy](https://doi.org/10.1126/scirobotics.adp2356)

2025-01-22 · **Research Article** · Science Robotics 10(98)

Ignacio Abadía, Alice Bruel, Grégoire Courtine, Auke J Ijspeert, Eduardo Ros, Niceto R Luque

Combines a muscle-inspired impedance model and adaptive cerebellar network to tune robot compliance and accuracy.

**Domain:** Control · Human–Robot Interaction  
**Method:** Adaptive Learning · Hybrid Methods

[Paper](https://doi.org/10.1126/scirobotics.adp2356)

## Dexterous Manipulation

### 🌟 [A careful examination of large behavior models for multitask dexterous manipulation](https://doi.org/10.1126/scirobotics.aea6201)

2026-04-15 · **Research Article** · Science Robotics 11(113)

Jose Barreiros, Andrew Beaulieu, Aditya Bhat, Rick Cory, Eric Cousineau, Hongkai Dai, Ching-Hsin Fang, Kunimatsu Hashimoto, Muhammad Zubair Irshad, Masha Itkina, Naveen Kuppuswamy, Kuan-Hui Lee, Katherine Liu, Dale McConachie, Ian McMahon, Haruki Nishimura, Calder Phillips-Grafflin, Charles Richter, Paarth Shah, Krishnan Srinivasan, Blake Wulfe, Chen Xu, Mengchao Zhang, Alex Alspach, Maya Angeles, Kushal Arora, Vitor Campagnolo Guizilini, Alejandro Castro, Dian Chen, Ting-Sheng Chu, Sam Creasey, Sean Curtis, Richard Denitto, Emma Dixon, Eric Dusel, Matthew Ferreira, Aimee Goncalves, Grant Gould, Damrong Guoy, Swati Gupta, Xuchen Han, Kyle Hatch, Brendan Hathaway, Allison Henry, Hillel Hochsztein, Phoebe Horgan, Shun Iwase, Donovon Jackson, Siddharth Karamcheti, Sedrick Keh, Joseph Masterjohn, Masayuki Masuda, Jean Mercat, Patrick Miller, Paul Mitiguy, Tony Nguyen, Jeremy Nimmer, Yuki Noguchi, Reko Ong, Aykut Onol, Owen Pfannenstiehl, Richard Poyner, Leticia Priebe Mendes Rocha, Gordon Richardson, Christopher Rodriguez, Derick Seale, Michael Sherman, Mariah Smith-Jones, David Tago, Pavel Tokmakov, Matthew Tran, Basile Van Hoorick, Igor Vasiljevic, Sergey Zakharov, Mark Zolotas, Rareș Ambruș, Kerri Fetzer-Borelli, Benjamin Burchfiel, Hadas Kress-Gazit, Siyuan Feng, Stacie Ford, Russ Tedrake

Evaluates multitask diffusion policies with controlled trials, showing benefits from pretraining scale and diversity.

**Domain:** Dexterous Manipulation · Manipulation  
**Method:** Behavior Cloning · Diffusion Models · Foundation Models

[Paper](https://doi.org/10.1126/scirobotics.aea6201) · [Project](https://toyotaresearchinstitute.github.io/lbm1/) · **[🌟 Cover Paper — evidence](https://toyotaresearchinstitute.github.io/lbm1/)**

### [Visual-tactile pretraining and online multitask learning for humanlike manipulation dexterity](https://doi.org/10.1126/scirobotics.ady2869)

2026-01-28 · **Research Article** · Science Robotics 11(110)

Qi Ye, Qingtao Liu, Siyun Wang, Jiaying Chen, Yu Cui, Ke Jin, Huajin Chen, Xuan Cai, Gaofeng Li, Jiming Chen

Combines human visual–tactile pretraining with online multitask learning for multifingered manipulation.

**Domain:** Dexterous Manipulation · Perception  
**Method:** Reinforcement Learning · Other Imitation Learning · Self-Supervised Learning

[Paper](https://doi.org/10.1126/scirobotics.ady2869)

### [Precise and dexterous robotic manipulation via human-in-the-loop reinforcement learning](https://doi.org/10.1126/scirobotics.ads5033)

2025-08-20 · **Research Article** · Science Robotics 10(105)

Jianlan Luo, Charles Xu, Jeffrey Wu, Sergey Levine

Combines demonstrations and human corrections with sample-efficient real-world learning for precise manipulation.

**Domain:** Dexterous Manipulation · Manipulation · Control  
**Method:** Reinforcement Learning · Human-in-the-Loop Learning

[Paper](https://doi.org/10.1126/scirobotics.ads5033) · [Project](https://hil-serl.github.io/) · [Code](https://github.com/rail-berkeley/hil-serl) · [Open version](https://hil-serl.github.io/static/hil-serl-paper.pdf)

### 🌟 [NeuralFeels with neural fields: Visuotactile perception for in-hand manipulation](https://doi.org/10.1126/scirobotics.adl0628)

2024-11-13 · **Research Article** · Science Robotics 9(96)

Sudharshan Suresh, Haozhi Qi, Tingfan Wu, Taosha Fan, Luis Pineda, Mike Lambeta, Jitendra Malik, Mrinal Kalakrishnan, Roberto Calandra, Michael Kaess, Joseph Ortiz, Mustafa Mukadam

Fuses touch, vision, and proprioception to reconstruct and track previously unseen objects during in-hand manipulation.

**Domain:** Dexterous Manipulation · Perception  
**Method:** Neural Fields · Self-Supervised Learning

[Paper](https://doi.org/10.1126/scirobotics.adl0628) · [Project](https://suddhu.github.io/neural-feels/) · [Code](https://github.com/facebookresearch/neuralfeels) · [Open version](https://arxiv.org/abs/2312.13469) · **[🌟 Cover Paper — evidence](https://www.ri.cmu.edu/cmu-and-partners-redefine-robotic-perception-with-neuralfeels/)**

## Field Robotics

### [Accelerating discovery in natural science laboratories with AI and robotics: Perspectives and challenges](https://doi.org/10.1126/scirobotics.adv7932)

2025-09-24 · **Review / Perspective** · Science Robotics 10(106)

Andrew I Cooper, Patrick Courtney, Kourosh Darvish, Moritz Eckhoff, Hatem Fakhruldeen, Andrea Gabrielli, Animesh Garg, Sami Haddadin, Kanako Harada, Jason Hein, Maria Hübner, Dennis Knobbe, Gabriella Pizzuto, Florian Shkurti, Ruja Shrestha, Kerstin Thurow, Rafael Vescovi, Birgit Vogel-Heuser, Ádám Wolf, Naruki Yoshikawa, Yan Zeng, Zhengxue Zhou, Henning Zwirnmann

Examines autonomy, reproducibility, and human collaboration challenges in AI-enabled laboratory robotics.

**Domain:** Field Robotics · Manipulation  
**Method:** Learning-Based Optimization

[Paper](https://doi.org/10.1126/scirobotics.adv7932)

## Human–Robot Interaction

### [Robot in a crib: How a playing robot helps us understand sensorimotor contingency learning](https://doi.org/10.1126/scirobotics.aed4106)

2026-08-26 · **Research Article** · Science Robotics 11(117)

Josua Spisak, Sergiu Tcaci Popescu, Lukas Rustler, Stefan Wermter, J Kevin O'Regan, Matej Hoffmann

Uses prediction and curiosity in an embodied humanoid to study how action–sensation relationships emerge.

**Domain:** Human–Robot Interaction · Control  
**Method:** Self-Supervised Learning · Developmental Learning

[Paper](https://doi.org/10.1126/scirobotics.aed4106)

### [From autonomy to alliance: Robotic foundation models must learn with us, not just for us](https://doi.org/10.1126/scirobotics.aea1822)

2026-04-22 · **Review / Perspective** · Science Robotics 11(113)

Sharmita Dey, Robert Riener, Strahinja Dosen, Stefano V Albrecht

Proposes collaborative robot foundation models that account for partners, social roles, and changing interaction norms.

**Domain:** Human–Robot Interaction · Multi-Robot Systems  
**Method:** Foundation Models

[Paper](https://doi.org/10.1126/scirobotics.aea1822)

### [Cross-robot behavior adaptation through intention alignment](https://doi.org/10.1126/scirobotics.adv2250)

2026-03-18 · **Research Article** · Science Robotics 11(112)

Xi Chen, Yuan Gao, Hangxin Liu, Fangkai Yang, Ali Ghadirzadeh, Jun Yang, Bin Liang, Chongjie Zhang, Tin Lun Lam, Song-Chun Zhu

Aligns language-annotated intentions to transfer demonstrated behavior across heterogeneous robots and environments.

**Domain:** Human–Robot Interaction · Multi-Robot Systems · Manipulation  
**Method:** Other Imitation Learning · Representation Learning

[Paper](https://doi.org/10.1126/scirobotics.adv2250)

### 🌟 [Learning realistic lip motions for humanoid face robots](https://doi.org/10.1126/scirobotics.adx3017)

2026-01-14 · **Research Article** · Science Robotics 11(110)

Yuhang Hu, Jiong Lin, Judah Allen Goldfeder, Philippe M Wyder, Yifeng Cao, Steven Tian, Yunzhe Wang, Jingran Wang, Mengmeng Wang, Jie Zeng, Cameron Mehlman, Yingke Wang, Delin Zeng, Boyuan Chen, Hod Lipson

Learns audio-conditioned lip trajectories for an expressive robotic face without hand-coded mouth movements.

**Domain:** Human–Robot Interaction · Control  
**Method:** Self-Supervised Learning

[Paper](https://doi.org/10.1126/scirobotics.adx3017) · [Project](https://www.engineering.columbia.edu/about/news/robot-learns-lip-sync) · [Open version](https://generalroboticslab.com/assets/files/papers/lip.pdf) · **[🌟 Cover Paper — evidence](https://www.engineering.columbia.edu/about/news/robot-learns-lip-sync)**

### [Development of compositionality through interactive learning of language and action of robots](https://doi.org/10.1126/scirobotics.adp0751)

2025-01-22 · **Research Article** · Science Robotics 10(98)

Prasanna Vijayaraghavan, Jeffrey Frederic Queißer, Sergio Verduzco Flores, Jun Tani

Integrates vision, proprioception, and language to learn compositional action–language representations.

**Domain:** Human–Robot Interaction · Manipulation  
**Method:** Developmental Learning · Representation Learning

[Paper](https://doi.org/10.1126/scirobotics.adp0751)

### [Intrinsic sense of touch for intuitive physical human-robot interaction](https://doi.org/10.1126/scirobotics.adn4008)

2024-08-21 · **Research Article** · Science Robotics 9(93)

Maged Iskandar, Alin Albu-Schäffer, Alexander Dietrich

Recognizes touch trajectories on a robot body as symbolic instructions using manifold learning and neural networks.

**Domain:** Human–Robot Interaction · Perception  
**Method:** Representation Learning · Supervised Learning

[Paper](https://doi.org/10.1126/scirobotics.adn4008)

### [Human-robot facial coexpression](https://doi.org/10.1126/scirobotics.adi4724)

2024-03-27 · **Research Article** · Science Robotics 9(88)

Yuhang Hu, Boyuan Chen, Jiong Lin, Yunzhe Wang, Yingke Wang, Cameron Mehlman, Hod Lipson

Learns to anticipate human smiles and control a robotic facial model for simultaneous coexpression.

**Domain:** Human–Robot Interaction · Control  
**Method:** Supervised Learning · Model-Based Learning

[Paper](https://doi.org/10.1126/scirobotics.adi4724)

## Locomotion

### [BeyondMimic: From motion tracking to versatile humanoid control via guided diffusion](https://doi.org/10.1126/scirobotics.adx8924)

2026-08-26 · **Research Article** · Science Robotics 11(117)

Qiayuan Liao, Takara E Truong, Xiaoyu Huang, Yuman Gao, Guy Tevet, Koushil Sreenath, C Karen Liu

Combines agile motion tracking with guided diffusion to compose humanoid skills for previously unseen objectives.

**Domain:** Locomotion · Control  
**Method:** Reinforcement Learning · Other Imitation Learning · Diffusion Models

[Paper](https://doi.org/10.1126/scirobotics.adx8924) · [Project](https://beyondmimic.github.io/) · [Code](https://github.com/HybridRobotics/whole_body_tracking) · [Open version](https://arxiv.org/abs/2508.08241)

### [Evolution of humanoid locomotion control](https://doi.org/10.1126/scirobotics.aed3973)

2026-08-19 · **Review / Perspective** · Science Robotics 11(117)

Yan Gu, Guanya Shi, Fan Shi, I-Chia Chang, Yen-Jen Wang, Qilong Cheng, Zachary Olkin, Ivan Lopez-Sanchez, Yunchu Feng, Jian Zhang, Aaron D Ames, Hao Su, Koushil Sreenath

Reviews the evolution of humanoid locomotion from model-based control to learning and generative approaches.

**Domain:** Locomotion · Control  
**Method:** Reinforcement Learning · Foundation Models · Hybrid Methods

[Paper](https://doi.org/10.1126/scirobotics.aed3973)

### [Learning vision-driven reactive soccer skills for humanoid robots](https://doi.org/10.1126/scirobotics.aed1152)

2026-08-19 · **Research Article** · Science Robotics 11(117)

Yushi Wang, Changsheng Luo, Penghui Chen, Jianran Liu, Weijian Sun, Tong Guo, Kechang Yang, Biao Hu, Yangang Zhang, Mingguo Zhao

Trains an onboard vision-driven soccer controller that remains reactive under perceptual noise and detection failures.

**Domain:** Locomotion · Perception · Control  
**Method:** Reinforcement Learning

[Paper](https://doi.org/10.1126/scirobotics.aed1152)

### [SONIC: Supersizing motion tracking for natural humanoid whole-body control](https://doi.org/10.1126/scirobotics.aed4592)

2026-08-12 · **Research Article** · Science Robotics 11(117)

Zhengyi Luo, Ye Yuan, Tingwu Wang, Chenran Li, Fernando Castañeda, Sirui Chen, Zi-Ang Cao, Jiefeng Li, David Minor, Qingwei Ben, Jinhyung Park, David Sami, Zi Wang, Xingye Da, Runyu Ding, Cyrus Hogg, Lina Song, Edy Lim, Eugene Jeong, Tairan He, Haoru Xue, Wenli Xiao, Simon Yuen, Jan Kautz, Yan Chang, Umar Iqbal, Linxi Jim Fan, Yuke Zhu

Scales motion-tracking data, model capacity, and compute into a generalist humanoid whole-body controller.

**Domain:** Locomotion · Control · Manipulation  
**Method:** Other Imitation Learning · Foundation Models

[Paper](https://doi.org/10.1126/scirobotics.aed4592) · [Project](https://nvlabs.github.io/GEAR-SONIC/) · [Code](https://github.com/NVlabs/GR00T-WholeBodyControl)

### [ZEST: Zero-shot embodied skill transfer for athletic robot control](https://doi.org/10.1126/scirobotics.aec7695)

2026-08-12 · **Research Article** · Science Robotics 11(117)

Jean Pierre Sleiman, He Li, Alphonsus Adu-Bredu, Robin Deits, Arun Kumar, Kevin Bergamin, Mohak Bhardwaj, Scott Biddlestone, Nicola Burger, Matthew A Estrada, Francesco Iacobelli, Twan Koolen, Alexander Lambert, Erica Lin, M Eva Mungai, Zach Nobles, Shane Rozen-Levy, Yuyao Shi, Jiashun Wang, Jakob Welner, Fangzhou Yu, Mike Zhang, Alfred Rizzi, Jessica Hodgins, Sylvain Bertrand, Yeuhi Abe, Scott Kuindersma, Farbod Farshidian

Transfers athletic motions from capture, video, and animation to different robot bodies without per-skill tuning.

**Domain:** Locomotion · Control  
**Method:** Reinforcement Learning · Other Imitation Learning

[Paper](https://doi.org/10.1126/scirobotics.aec7695) · [Open version](https://arxiv.org/abs/2602.00401)

### [Advances, challenges, and opportunities for legged robots](https://doi.org/10.1126/scirobotics.aee0787)

2026-07-29 · **Review / Perspective** · Science Robotics 11(116)

Jonas Frey, Matías Mattamala, Hae-Won Park, Mayank Mittal, Georg Martius, Maike Osborne, Robert Sparrow, Marco Hutter

Reviews capabilities and open challenges in legged hardware, autonomy, data, and deployment.

**Domain:** Locomotion · Control  
**Method:** Reinforcement Learning

[Paper](https://doi.org/10.1126/scirobotics.aee0787)

### [Bioinspired multimodal robotics](https://doi.org/10.1126/scirobotics.aea7639)

2026-07-22 · **Review / Perspective** · Science Robotics 11(116)

Ziyu Ren, Youning Duo, Haoyuan Xu, Yihui Zhang, Xingjian Liu, Jamie Paik, Auke Ijspeert, Li Wen

Reviews multimodal robot design and the transition toward learned planning and motion control.

**Domain:** Locomotion · Robot Design  
**Method:** Hybrid Methods

[Paper](https://doi.org/10.1126/scirobotics.aea7639)

### 🌟 [Agile perceptive multiskill locomotion for quadrupedal robots in the wild](https://doi.org/10.1126/scirobotics.adz7397)

2026-07-15 · **Research Article** · Science Robotics 11(116)

Jun-Gill Kang, Jaehyun Park, Tae-Gyu Song, Joon-Ha Kim, Seungwoo Hong, Hae-Won Park

Pretrains locomotion skills from optimized motions and learns perceptive transitions across challenging outdoor terrain.

**Domain:** Locomotion · Navigation · Control  
**Method:** Reinforcement Learning · Other Imitation Learning · Hybrid Methods

[Paper](https://doi.org/10.1126/scirobotics.adz7397) · [Project](https://www.dynamicrobot.kaist.ac.kr/publications) · **[🌟 Cover Paper — evidence](https://kaist.ac.kr/newsen/html/news/?GotoPage=1&list_e_date=&list_s_date=&mng_no=64450&mode=V&skey=&sval=WWW)**

### [Attention-based map encoding for learning generalized legged locomotion](https://doi.org/10.1126/scirobotics.adv3604)

2025-08-27 · **Research Article** · Science Robotics 10(105)

Junzhe He, Chong Zhang, Fabian Jenelten, Ruben Grandia, Moritz Bächer, Marco Hutter

Uses proprioception-conditioned map attention to learn robust, precise locomotion across sparse footholds.

**Domain:** Locomotion · Navigation · Control  
**Method:** Reinforcement Learning

[Paper](https://doi.org/10.1126/scirobotics.adv3604)

### [High-speed control and navigation for quadrupedal robots on complex and discrete terrain](https://doi.org/10.1126/scirobotics.ads6192)

2025-05-28 · **Research Article** · Science Robotics 10(102)

Hyeongjun Kim, Hyunsik Oh, Jeongsoo Park, Yunho Kim, Donghoon Youm, Moonkyu Jung, Minho Lee, Jemin Hwangbo

Combines optimized foothold planning with a learned tracker and an adaptive training terrain distribution.

**Domain:** Locomotion · Navigation · Control  
**Method:** Reinforcement Learning · Hybrid Methods

[Paper](https://doi.org/10.1126/scirobotics.ads6192)

### [Learning robust autonomous navigation and locomotion for wheeled-legged robots](https://doi.org/10.1126/scirobotics.adi9641)

2024-04-24 · **Research Article** · Science Robotics 9(89)

Joonho Lee, Marko Bjelonic, Alexander Reske, Lorenz Wellhausen, Takahiro Miki, Marco Hutter

Integrates learned wheeled-legged locomotion and hierarchical navigation for kilometer-scale urban missions.

**Domain:** Locomotion · Navigation · Control  
**Method:** Reinforcement Learning

[Paper](https://doi.org/10.1126/scirobotics.adi9641)

### [Real-world humanoid locomotion with reinforcement learning](https://doi.org/10.1126/scirobotics.adi9579)

2024-04-17 · **Research Article** · Science Robotics 9(89)

Ilija Radosavovic, Tete Xiao, Bike Zhang, Trevor Darrell, Jitendra Malik, Koushil Sreenath

Trains a transformer locomotion controller that adapts from observation–action history during real-world humanoid walking.

**Domain:** Locomotion · Control  
**Method:** Reinforcement Learning

[Paper](https://doi.org/10.1126/scirobotics.adi9579)

### [Learning agile soccer skills for a bipedal robot with deep reinforcement learning](https://doi.org/10.1126/scirobotics.adi8022)

2024-04-10 · **Research Article** · Science Robotics 9(89)

Tuomas Haarnoja, Ben Moran, Guy Lever, Sandy H Huang, Dhruva Tirumala, Jan Humplik, Markus Wulfmeier, Saran Tunyasuvunakool, Noah Y Siegel, Roland Hafner, Michael Bloesch, Kristian Hartikainen, Arunkumar Byravan, Leonard Hasenclever, Yuval Tassa, Fereshteh Sadeghi, Nathan Batchelor, Federico Casarini, Stefano Saliceti, Charles Game, Neil Sreendra, Kushal Patel, Marlon Gwira, Andrea Huber, Nicole Hurley, Francesco Nori, Raia Hadsell, Nicolas Heess

Learns agile bipedal soccer skills and tactical behaviors in simulation for zero-shot deployment on small humanoids.

**Domain:** Locomotion · Control  
**Method:** Reinforcement Learning

[Paper](https://doi.org/10.1126/scirobotics.adi8022)

### [ANYmal parkour: Learning agile navigation for quadrupedal robots](https://doi.org/10.1126/scirobotics.adi7566)

2024-03-13 · **Research Article** · Science Robotics 9(88)

David Hoeller, Nikita Rudin, Dhionis Sako, Marco Hutter

Combines learned perception, motor skills, and high-level selection to traverse parkour-like obstacles.

**Domain:** Locomotion · Navigation · Perception  
**Method:** Reinforcement Learning · Hierarchical Learning

[Paper](https://doi.org/10.1126/scirobotics.adi7566) · [Project](https://sites.google.com/leggedrobotics.com/agile-navigation) · [Open version](https://arxiv.org/abs/2306.14874)

### [DTC: Deep Tracking Control](https://doi.org/10.1126/scirobotics.adh5401)

2024-01-17 · **Research Article** · Science Robotics 9(86)

Fabian Jenelten, Junzhe He, Farbod Farshidian, Marco Hutter

Trains a robust tracking policy around optimized reference motions to improve precision on sparse footholds.

**Domain:** Locomotion · Control  
**Method:** Reinforcement Learning · Hybrid Methods

[Paper](https://doi.org/10.1126/scirobotics.adh5401) · [Open version](https://arxiv.org/abs/2309.15462)

## Manipulation

### [Performant robotic manipulation with real-world reinforcement learning](https://doi.org/10.1126/scirobotics.aed6267)

2026-07-22 · **Research Article** · Science Robotics 11(116)

Kun Lei, Huanyu Li, Dongjie Yu, Zhenyu Wei, Lingxiao Guo, Zhennan Jiang, Ziyu Wang, Shiyu Liang, Huazhe Xu

Improves diffusion visuomotor policies through offline and online reinforcement learning, with fast one-step execution.

**Domain:** Manipulation · Control  
**Method:** Reinforcement Learning · Behavior Cloning · Diffusion Models

[Paper](https://doi.org/10.1126/scirobotics.aed6267)

### [A retrieval-augmented framework enabling VLM spatial awareness for object-centric robot manipulation](https://doi.org/10.1126/scirobotics.aea2092)

2026-04-29 · **Research Article** · Science Robotics 11(113)

Kai Chen, Chengkun Li, Chang Tu, Jiahui Pan, Yiyao Ma, Wei Chen, Zhongxiang Zhou, Xuecheng Xu, Stephen James, Chi-Wing Fu, Rong Xiong, Pieter Abbeel, Yun-Hui Liu, Qi Dou

Grounds vision-language reasoning in object-centric geometry to execute spatially precise manipulation instructions.

**Domain:** Manipulation · Perception  
**Method:** Foundation Models · Retrieval-Based Learning

[Paper](https://doi.org/10.1126/scirobotics.aea2092)

### [Demonstrate once, execute on many: Kinematic intelligence for cross-robot skill transfer](https://doi.org/10.1126/scirobotics.aea1995)

2026-04-15 · **Research Article** · Science Robotics 11(113)

Sthithpragya Gupta, Durgesh Haribhau Salunkhe, Aude Billard

Embeds kinematic constraints in demonstration-derived dynamical policies for skill transfer across robot morphologies.

**Domain:** Manipulation · Control  
**Method:** Other Imitation Learning · Hybrid Methods

[Paper](https://doi.org/10.1126/scirobotics.aea1995)

### 🌟 [Learning a thousand tasks in a day](https://doi.org/10.1126/scirobotics.adv7594)

2025-11-12 · **Research Article** · Science Robotics 10(108)

Kamil Dreczkowski, Pietro Vitiello, Vitalis Vosylius, Edward Johns

Separates alignment and interaction, using trajectory retrieval to teach a robot many tasks from few demonstrations.

**Domain:** Manipulation  
**Method:** Other Imitation Learning · Retrieval-Based Learning

[Paper](https://doi.org/10.1126/scirobotics.adv7594) · [Project](https://www.robot-learning.uk/learning-1000-tasks) · [Code](https://github.com/kamil-dreczkowski/learning_thousand_tasks) · [Open version](https://arxiv.org/abs/2511.10110) · **[🌟 Cover Paper — evidence](https://www.robot-learning.uk/learning-1000-tasks)**

### [A review of learning-based dynamics models for robotic manipulation](https://doi.org/10.1126/scirobotics.adt1497)

2025-09-17 · **Review / Perspective** · Science Robotics 10(106)

Bo Ai, Stephen Tian, Haochen Shi, Yixuan Wang, Tobias Pfaff, Cheston Tan, Henrik I Christensen, Hao Su, Jiajun Wu, Yunzhu Li

Reviews learned interaction dynamics, state representations, uncertainty, and their use in manipulation planning.

**Domain:** Manipulation · Control  
**Method:** Model-Based Learning

[Paper](https://doi.org/10.1126/scirobotics.adt1497)

### [Learning contact-rich whole-body manipulation with example-guided reinforcement learning](https://doi.org/10.1126/scirobotics.ads6790)

2025-08-20 · **Research Article** · Science Robotics 10(105)

Jose A Barreiros, Aykut Özgün Önol, Mengchao Zhang, Sam Creasey, Aimee Goncalves, Andrew Beaulieu, Aditya Bhat, Kate M Tsui, Alex Alspach

Learns contact-rich whole-body object handling from example motions using a compliant humanoid upper body.

**Domain:** Manipulation · Control  
**Method:** Reinforcement Learning · Other Imitation Learning

[Paper](https://doi.org/10.1126/scirobotics.ads6790)

### [Learning coordinated badminton skills for legged manipulators](https://doi.org/10.1126/scirobotics.adu3922)

2025-05-28 · **Research Article** · Science Robotics 10(102)

Yuntao Ma, Andrei Cramariuc, Farbod Farshidian, Marco Hutter

Learns coordinated whole-body badminton skills while accounting for real-world visual perception uncertainty.

**Domain:** Manipulation · Locomotion · Control  
**Method:** Reinforcement Learning

[Paper](https://doi.org/10.1126/scirobotics.adu3922)

### [SimPLE, a visuotactile method learned in simulation to precisely pick, localize, regrasp, and place objects](https://doi.org/10.1126/scirobotics.adi8808)

2024-06-26 · **Research Article** · Science Robotics 9(91)

Maria Bauza, Antonia Bronars, Yifan Hou, Ian Taylor, Nikhil Chavan-Dafle, Alberto Rodriguez

Learns visuotactile pose estimation in simulation and combines it with grasp and regrasp planning for precise placement.

**Domain:** Manipulation · Perception  
**Method:** Supervised Learning · Hybrid Methods

[Paper](https://doi.org/10.1126/scirobotics.adi8808) · [Open version](https://arxiv.org/abs/2307.13133)

## Multi-Robot Systems

### [Extending robot minds through collective learning](https://doi.org/10.1126/scirobotics.adv4049)

2025-09-24 · **Review / Perspective** · Science Robotics 10(106)

Amanda Prorok

Argues for distributed robot learning through modular, interdependent systems rather than monolithic models.

**Domain:** Multi-Robot Systems  
**Method:** Foundation Models · Collective Learning

[Paper](https://doi.org/10.1126/scirobotics.adv4049)

### [RoboBallet: Planning for multirobot reaching with graph neural networks and reinforcement learning](https://doi.org/10.1126/scirobotics.ads1204)

2025-09-03 · **Research Article** · Science Robotics 10(106)

Matthew Lai, Keegan Go, Zhibin Li, Torsten Kröger, Stefan Schaal, Kelsey Allen, Jonathan Scholz

Learns graph-based coordination that jointly allocates tasks, schedules actions, and plans collision-free multiarm motion.

**Domain:** Multi-Robot Systems · Manipulation · Control  
**Method:** Reinforcement Learning · Graph Learning

[Paper](https://doi.org/10.1126/scirobotics.ads1204)

### [Counterfactual rewards promote collective transport using individually controlled swarm microrobots](https://doi.org/10.1126/scirobotics.ado5888)

2024-12-18 · **Research Article** · Science Robotics 9(97)

Veit-Lorenz Heuthe, Emanuele Panizon, Hongri Gu, Clemens Bechinger

Uses counterfactual rewards to assign credit when independently controlled microrobots collectively transport cargo.

**Domain:** Multi-Robot Systems · Manipulation  
**Method:** Reinforcement Learning

[Paper](https://doi.org/10.1126/scirobotics.ado5888)

## Navigation

### [Resilient odometry via hierarchical adaptation](https://doi.org/10.1126/scirobotics.adv1818)

2025-12-10 · **Research Article** · Science Robotics 10(109)

Shibo Zhao, Sifan Zhou, Yuchen Zhang, Ji Zhang, Chen Wang, Wenshan Wang, Sebastian Scherer

Integrates learned inertial odometry with hierarchical sensor adaptation for navigation under severe sensory degradation.

**Domain:** Navigation · Perception  
**Method:** Supervised Learning · Hybrid Methods

[Paper](https://doi.org/10.1126/scirobotics.adv1818)

### [A compact neuromorphic system for ultra-energy-efficient, on-device robot localization](https://doi.org/10.1126/scirobotics.ads3968)

2025-06-18 · **Research Article** · Science Robotics 10(103)

Adam D Hines, Michael Milford, Tobias Fischer

Combines event sensing and spiking networks for compact, low-energy visual place recognition on a robot.

**Domain:** Navigation · Perception  
**Method:** Neuromorphic Learning

[Paper](https://doi.org/10.1126/scirobotics.ads3968)

### [Hierarchically depicting vehicle trajectory with stability in complex environments](https://doi.org/10.1126/scirobotics.ads4551)

2025-06-18 · **Research Article** · Science Robotics 10(103)

Zhichao Han, Mengze Tian, Zaitian Gongye, Donglai Xue, Jiaxi Xing, Qianhao Wang, Yuman Gao, Jingping Wang, Chao Xu, Fei Gao

Combines learned path proposals with stable trajectory optimization to navigate complex environments efficiently.

**Domain:** Navigation · Control  
**Method:** Supervised Learning · Hybrid Methods

[Paper](https://doi.org/10.1126/scirobotics.ads4551)

### [Reinforcement learning-based framework for whale rendezvous via autonomous sensing robots](https://doi.org/10.1126/scirobotics.adn7299)

2024-10-30 · **Research Article** · Science Robotics 9(95)

Ninad Jadhav, Sushmita Bhattacharya, Daniel Vogt, Yaniv Aluma, Pernille Tønnesen, Akarsh Prabhakara, Swarun Kumar, Shane Gero, Robert J Wood, Stephanie Gil

Couples multiagent routing with radio-based sensing to improve autonomous rendezvous with sperm whales.

**Domain:** Navigation · Multi-Robot Systems  
**Method:** Reinforcement Learning · Hybrid Methods

[Paper](https://doi.org/10.1126/scirobotics.adn7299)

## Perception

### [Multimodal information structuring with single-layer soft skins and high-density electrical impedance tomography](https://doi.org/10.1126/scirobotics.adq2303)

2025-06-11 · **Research Article** · Science Robotics 10(103)

David Hardman, Thomas George Thuruthel, Fumiya Iida

Structures redundant electrical measurements from a soft skin into multimodal touch and environmental estimates.

**Domain:** Perception · Soft Robotics  
**Method:** Supervised Learning

[Paper](https://doi.org/10.1126/scirobotics.adq2303)

### [Autonomous tracking of honey bee behaviors over long-term periods with cooperating robots](https://doi.org/10.1126/scirobotics.adn6848)

2024-10-16 · **Research Article** · Science Robotics 9(95)

Jiří Ulrich, Martin Stefanec, Fatemeh Rekabi-Bana, Laurenz Alexander Fedotoff, Tomáš Rouček, Bilal Yağız Gündeğer, Mahmood Saadat, Jan Blaha, Jiří Janota, Daniel Nicolas Hofstadler, Kristina Žampachů, Erhan Ege Keyvan, Babür Erdem, Erol Şahin, Hande Alemdar, Ali Emre Turgut, Farshad Arvin, Thomas Schmickl, Tomáš Krajník

Combines autonomous robotic observation with behavioral analysis to track a honey-bee queen and colony interactions.

**Domain:** Perception · Field Robotics  
**Method:** Learning-Based Perception

[Paper](https://doi.org/10.1126/scirobotics.adn6848)

### [Stereoscopic artificial compound eyes for spatiotemporal perception in three-dimensional space](https://doi.org/10.1126/scirobotics.adl3606)

2024-05-15 · **Research Article** · Science Robotics 9(90)

Byungjoon Bae, Doeon Lee, Minseong Park, Yujia Mu, Yongmin Baek, Inbo Sim, Cong Shen, Kyusang Lee

Combines stereoscopic artificial compound eyes with edge learning for efficient three-dimensional object tracking.

**Domain:** Perception  
**Method:** Supervised Learning

[Paper](https://doi.org/10.1126/scirobotics.adl3606)

## Robot Design

### [Bioinspired design of a tissue-engineered ray with machine learning](https://doi.org/10.1126/scirobotics.adr6472)

2025-02-12 · **Research Article** · Science Robotics 10(99)

John F Zimmerman, Daniel J Drennan, James Ikeda, Qianru Jin, Herdeline Ann M Ardoña, Sean L Kim, Ryoma Ishii, Kevin Kit Parker

Uses machine-learning-directed geometry optimization to improve a tissue-engineered swimming robot.

**Domain:** Robot Design · Soft Robotics  
**Method:** Learning-Based Optimization

[Paper](https://doi.org/10.1126/scirobotics.adr6472) · [Open version](https://diseasebiophysics.seas.harvard.edu/sites/g/files/omnuum8351/files/2025-11/Bioinspired%20design%20of%20a%20tissue-engineered%20ray%20with%20machine%20learning.pdf)

## Soft Robotics

### [Metamaterial robotics](https://doi.org/10.1126/scirobotics.adx1519)

2025-11-19 · **Review / Perspective** · Science Robotics 10(108)

Xiaoyang Zheng, Yuhao Jiang, Mustafa Mete, Jingjing Li, Ikumu Watanabe, Takayuki Yamada, Jamie Paik

Reviews metamaterial robotics, including AI-supported design, modeling, and adaptive control.

**Domain:** Soft Robotics · Robot Design  
**Method:** Learning-Based Optimization

[Paper](https://doi.org/10.1126/scirobotics.adx1519)

### [Bridging hard and soft: Mechanical metamaterials enable rigid torque transmission in soft robots](https://doi.org/10.1126/scirobotics.ads0548)

2025-03-19 · **Research Article** · Science Robotics 10(100)

Molly Carton, Jakub F Kowalewski, Jiani Guo, Jacob F Alpert, Aman Garg, Daniel Revier, Jeffrey Ian Lipton

Pairs torque-transmitting metamaterials with learned inverse kinematics for forceful soft-arm manipulation.

**Domain:** Soft Robotics · Manipulation · Control  
**Method:** Supervised Learning

[Paper](https://doi.org/10.1126/scirobotics.ads0548)

## Surgical Robotics

### [Deep learning-based autonomous retinal vein cannulation in ex vivo porcine eyes](https://doi.org/10.1126/scirobotics.adw2969)

2025-12-17 · **Research Article** · Science Robotics 10(109)

Peiyao Zhang, Peter Gehlbach, Russell H Taylor, Iulian Iordachita, Marin Kobilarov

Uses learned motion and event predictors to automate retinal vein cannulation in ex vivo porcine eyes.

**Domain:** Surgical Robotics · Perception · Control  
**Method:** Supervised Learning

[Paper](https://doi.org/10.1126/scirobotics.adw2969)

### [AI search, physician removal: Bronchoscopy robot bridges collaboration in foreign body aspiration](https://doi.org/10.1126/scirobotics.adt5338)

2025-07-30 · **Research Article** · Science Robotics 10(104)

Lilu Liu, Jingyu Zhang, Fei Wang, Jiyu Yu, Yuxiang Cui, Zhibin Li, Jian Hu, Rong Xiong, Haojian Lu, Yue Wang

Combines learned perception and structured exploration for autonomous bronchial foreign-body search with remote physician removal.

**Domain:** Surgical Robotics · Navigation · Perception  
**Method:** Learning-Based Perception · Hybrid Methods

[Paper](https://doi.org/10.1126/scirobotics.adt5338)

### [The grand challenges of learning medical robot autonomy](https://doi.org/10.1126/scirobotics.adz8279)

2025-07-30 · **Review / Perspective** · Science Robotics 10(104)

Pierre E Dupont, Alperen Degirmenci

Identifies barriers to learning the perception, decision-making, and action needed for medical robot autonomy.

**Domain:** Surgical Robotics  
**Method:** Foundation Models · Reinforcement Learning

[Paper](https://doi.org/10.1126/scirobotics.adz8279) · [Open version](https://pmc.ncbi.nlm.nih.gov/articles/PMC12624563/)

### [Will your next surgeon be a robot? Autonomy and AI in robotic surgery](https://doi.org/10.1126/scirobotics.adt0187)

2025-07-23 · **Review / Perspective** · Science Robotics 10(104)

Samuel Schmidgall, Justin D Opfermann, Ji Woong Kim, Axel Krieger

Reviews the transition from surgeon-operated systems toward AI-enabled autonomous surgical robots.

**Domain:** Surgical Robotics  
**Method:** Foundation Models

[Paper](https://doi.org/10.1126/scirobotics.adt0187) · [Open version](https://pmc.ncbi.nlm.nih.gov/articles/PMC12836364/)

### [Surgical embodied intelligence for generalized task autonomy in laparoscopic robot-assisted surgery](https://doi.org/10.1126/scirobotics.adt3093)

2025-07-16 · **Research Article** · Science Robotics 10(104)

Yonghao Long, Anran Lin, Derek Hang Chun Kwok, Lin Zhang, Zhenya Yang, Kejian Shi, Lei Song, Jiawei Fu, Hongbin Lin, Wang Wei, Kai Chen, Xiangyu Chu, Yang Hu, Hon Chi Yip, Philip Wai Yan Chiu, Peter Kazanzides, Russell H Taylor, Yunhui Liu, Zihan Chen, Zerui Wang, Samuel Kwok Wai Au, Qi Dou

Provides a surgical simulation and learning pipeline that transfers trained task policies to real surgical robots.

**Domain:** Surgical Robotics · Manipulation · Control  
**Method:** Reinforcement Learning · Foundation Models · Hybrid Methods

[Paper](https://doi.org/10.1126/scirobotics.adt3093)

### 🌟 [SRT-H: A hierarchical framework for autonomous surgery via language-conditioned imitation learning](https://doi.org/10.1126/scirobotics.adt5254)

2025-07-09 · **Research Article** · Science Robotics 10(104)

Ji Woong Brian Kim, Juo-Tung Chen, Pascal Hansen, Lucy Xiaoyang Shi, Antony Goldenberg, Samuel Schmidgall, Paul Maria Scheikl, Anton Deguet, Brandon M White, De Ru Tsai, Richard Jaepyeong Cha, Jeffrey Jopling, Chelsea Finn, Axel Krieger

Pairs a language-level planner with learned low-level trajectories to execute and recover during surgical steps.

**Domain:** Surgical Robotics · Dexterous Manipulation  
**Method:** Behavior Cloning · Foundation Models

[Paper](https://doi.org/10.1126/scirobotics.adt5254) · [Project](https://h-surgical-robot-transformer.github.io/) · [Open version](https://arxiv.org/abs/2505.10251) · **[🌟 Cover Paper — evidence](https://bsky.app/profile/science.org/post/3ltxbwuy3j62o)**

### [The robot will see you now: Foundation models are the path forward for autonomous robotic surgery](https://doi.org/10.1126/scirobotics.adt0684)

2025-07-09 · **Review / Perspective** · Science Robotics 10(104)

Michael Yip

Examines the data requirements and prospects of foundation models for autonomous robotic surgery.

**Domain:** Surgical Robotics  
**Method:** Foundation Models

[Paper](https://doi.org/10.1126/scirobotics.adt0684)

## Wearable Robotics

### [Ultra-wideband radar to measure in vivo muscle forces](https://doi.org/10.1126/scirobotics.aed5865)

2026-07-29 · **Research Article** · Science Robotics 11(116)

Christopher S Bird, Antonio P L Bo, Wei Lu, Taylor J M Dick

Combines radar measurements with learned estimators of muscle force for assistive sensing applications.

**Domain:** Wearable Robotics · Perception  
**Method:** Supervised Learning

[Paper](https://doi.org/10.1126/scirobotics.aed5865)

### [Deep domain adaptation eliminates costly data required for task-agnostic wearable robotic control](https://doi.org/10.1126/scirobotics.ads8652)

2025-11-19 · **Research Article** · Science Robotics 10(108)

Keaton L Scherpereel, Matthew C Gombolay, Max K Shepherd, Carlos A Carrasquillo, Omer T Inan, Aaron J Young

Transfers accessible movement data into device-specific joint-moment estimators for task-agnostic exoskeleton assistance.

**Domain:** Wearable Robotics · Control  
**Method:** Domain Adaptation · Supervised Learning

[Paper](https://doi.org/10.1126/scirobotics.ads8652)

### [AI in therapeutic and assistive exoskeletons and exosuits: Influences on performance and autonomy](https://doi.org/10.1126/scirobotics.adt7329)

2025-07-30 · **Review / Perspective** · Science Robotics 10(104)

Herman van der Kooij, Edwin H F van Asseldonk, Massimo Sartori, Chiara Basla, Adrian Esser, Robert Riener

Reviews how machine learning supports intention recognition, assessment, and autonomous wearable assistance.

**Domain:** Wearable Robotics · Control  
**Method:** Reinforcement Learning · Supervised Learning

[Paper](https://doi.org/10.1126/scirobotics.adt7329)

### [The case against machine vision for the control of wearable robotics: Challenges for commercial adoption](https://doi.org/10.1126/scirobotics.adp5005)

2025-01-29 · **Review / Perspective** · Science Robotics 10(98)

Keya Ghonasgi, Kyle J Kaveny, David Langlois, Leifur D Sigurðarson, Tim A Swift, Jason Wheeler, Aaron J Young

Discusses practical barriers to deploying vision-based control in commercial wearable robots.

**Domain:** Wearable Robotics · Perception  
**Method:** Learning-Based Perception

[Paper](https://doi.org/10.1126/scirobotics.adp5005)

### [Wearable robots for the real world need vision](https://doi.org/10.1126/scirobotics.adj8812)

2024-05-22 · **Review / Perspective** · Science Robotics 9(90)

Letizia Gionfrida, Daekyum Kim, Davide Scaramuzza, Dario Farina, Robert D Howe

Discusses how visual information can support wearable robots in real-world environments.

**Domain:** Wearable Robotics · Perception  
**Method:** Learning-Based Perception

[Paper](https://doi.org/10.1126/scirobotics.adj8812)

### [Estimating human joint moments unifies exoskeleton control, reducing user effort](https://doi.org/10.1126/scirobotics.adi8852)

2024-03-20 · **Research Article** · Science Robotics 9(88)

Dean D Molinaro, Inseung Kang, Aaron J Young

Uses learned joint-moment estimates to adapt exoskeleton assistance across many movement conditions.

**Domain:** Wearable Robotics · Control  
**Method:** Supervised Learning

[Paper](https://doi.org/10.1126/scirobotics.adi8852)

## Maintain this index

1. Edit `papers.json`, preserving the DOI and source evidence.
2. Run `npm run generate` to regenerate this README.
3. Run `npm test`, `npm run typecheck`, and `npm run build`.
4. Commit the data and generated README, then publish a new Sites version. GitHub pushes do not automatically deploy the website.

The website imports the same data directly. No database, login, automated scraper, or scheduled update is required. Run `npm ci` and `npm run dev` for local development.

Independent research index maintained by Yanjie Ze; not affiliated with AAAS. Linked papers, projects, and code retain their respective rights and licenses. No paper PDFs are redistributed in this repository.

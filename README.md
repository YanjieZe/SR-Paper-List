<div align="center">

# SR-Paper-List

### Robot learning in *Science Robotics*

Every learning-based robotics paper the journal published between January 2020 and September 2026,
read, summarized, and tagged by task and by method.

[![Browse the index](https://img.shields.io/badge/browse%20the%20index-sr.yanjieze.com-007aff?style=for-the-badge&labelColor=1c1c1e)](https://sr.yanjieze.com)

![papers](https://img.shields.io/badge/papers-117-007aff?style=flat-square&labelColor=1c1c1e) ![research articles](https://img.shields.io/badge/research%20articles-95-8e8e93?style=flat-square&labelColor=1c1c1e) ![reviews](https://img.shields.io/badge/reviews-22-8e8e93?style=flat-square&labelColor=1c1c1e) ![verified covers](https://img.shields.io/badge/verified%20covers-6-ff9500?style=flat-square&labelColor=1c1c1e) ![updated](https://img.shields.io/badge/updated-2026--09--09-8e8e93?style=flat-square&labelColor=1c1c1e)

**[Website](https://sr.yanjieze.com)** · **[Structured data](papers.json)** · **[Search & verification notes](SEARCH_NOTES.md)** · **[Deployment](DEPLOYMENT.md)** · **[Suggest a paper](https://github.com/YanjieZe/SR-Paper-List/issues/new)**

</div>

---

## The shape of the field

Papers per year of publication.

```text
2026  ██████████████████········  21
2025  ██████████████████████████  30
2024  ███████████████···········  17
2023  ███████████···············  13
2022  ██████████████············  16
2021  ██████████················  11
2020  ████████··················   9
```

Task and domain tags, counted across every tag a paper carries.

```text
Control                  ██████████████████████████  57
Perception               ██████████████████████····  48
Manipulation             ███████████████···········  32
Navigation               ██████████················  23
Locomotion               ██████████················  22
Human–Robot Interaction  ███████···················  15
Aerial Robotics          ██████····················  13
Robot Design             █████·····················  10
Multi-Robot Systems      ████······················   9
Soft Robotics            ████······················   8
Wearable Robotics        ████······················   8
Dexterous Manipulation   ███·······················   7
Field Robotics           ███·······················   7
Surgical Robotics        ███·······················   7
```

Learning methods, counted the same way. A paper can hold several.

```text
Reinforcement Learning       ██████████████████████████  41
Supervised Learning          ████████████████████······  32
Hybrid Methods               ███████████···············  17
Learning-Based Perception    ███████████···············  17
Foundation Models            ████████··················  13
Other Imitation Learning     ████████··················  12
Neuromorphic Learning        ███████···················  11
Model-Based Learning         █████·····················   8
Representation Learning      █████·····················   8
Self-Supervised Learning     █████·····················   8
Learning-Based Optimization  ████······················   7
Policy Distillation          ████······················   6
Adaptive Learning            ███·······················   5
Behavior Cloning             ██························   3
Diffusion Models             ██························   3
Domain Adaptation            ██························   3
Human-in-the-Loop Learning   ██························   3
Collective Learning          █·························   2
Developmental Learning       █·························   2
Hierarchical Learning        █·························   2
Retrieval-Based Learning     █·························   2
```

<sub>Methods appearing once: Evolutionary Learning, Graph Learning, Neural Fields.</sub>

## 🌟 Cover papers

A cover badge needs a publisher announcement or a reproduced cover with explicit attribution from the author's institution or project page. Everything else stays **not yet verified** rather than being called a non-cover.

| Paper | Published | Evidence |
|---|---|---|
| [Agile perceptive multiskill locomotion for quadrupedal robots in the wild](https://doi.org/10.1126/scirobotics.adz7397) | `2026-07-15` | [source](https://kaist.ac.kr/newsen/html/news/?GotoPage=1&list_e_date=&list_s_date=&mng_no=64450&mode=V&skey=&sval=WWW) |
| [A careful examination of large behavior models for multitask dexterous manipulation](https://doi.org/10.1126/scirobotics.aea6201) | `2026-04-15` | [source](https://toyotaresearchinstitute.github.io/lbm1/) |
| [Learning realistic lip motions for humanoid face robots](https://doi.org/10.1126/scirobotics.adx3017) | `2026-01-14` | [source](https://www.engineering.columbia.edu/about/news/robot-learns-lip-sync) |
| [Learning a thousand tasks in a day](https://doi.org/10.1126/scirobotics.adv7594) | `2025-11-12` | [source](https://www.robot-learning.uk/learning-1000-tasks) |
| [SRT-H: A hierarchical framework for autonomous surgery via language-conditioned imitation learning](https://doi.org/10.1126/scirobotics.adt5254) | `2025-07-09` | [source](https://bsky.app/profile/science.org/post/3ltxbwuy3j62o) |
| [NeuralFeels with neural fields: Visuotactile perception for in-hand manipulation](https://doi.org/10.1126/scirobotics.adl0628) | `2024-11-13` | [source](https://www.ri.cmu.edu/cmu-and-partners-redefine-robotic-perception-with-neuralfeels/) |

## Scope

Research where learning supports robot action, perception, interaction, adaptation, or design, plus relevant reviews and perspectives. Editorials, research highlights, corrections, and hardware-only studies are excluded. This is a broad curated index, not a guarantee of exhaustive full-text screening. Dates are journal publication dates, not arXiv dates.

Task/domain and learning method are separate, overlapping labels. The index below files each paper under its primary domain; the website filters across every tag. BC means supervised action prediction from demonstrations — retrieval-based imitation, motion imitation with RL, and policy distillation are not automatically labeled BC. Reviews / Perspectives is a browsing group, not a claim about the publisher's exact article subtype.

## The index

Filed by primary domain, newest first. Expand a domain to read it, or [search the whole index on the website](https://sr.yanjieze.com).

- [Aerial Robotics](#aerial-robotics) (10)
- [Control](#control) (6)
- [Dexterous Manipulation](#dexterous-manipulation) (5)
- [Field Robotics](#field-robotics) (4)
- [Human–Robot Interaction](#humanrobot-interaction) (9)
- [Locomotion](#locomotion) (20)
- [Manipulation](#manipulation) (14)
- [Multi-Robot Systems](#multi-robot-systems) (4)
- [Navigation](#navigation) (8)
- [Perception](#perception) (16)
- [Robot Design](#robot-design) (4)
- [Soft Robotics](#soft-robotics) (3)
- [Surgical Robotics](#surgical-robotics) (7)
- [Wearable Robotics](#wearable-robotics) (7)

### Aerial Robotics

<details>
<summary><b>10 papers</b> — 2026–2021</summary>

#### [Precise aggressive aerial maneuvers with sensorimotor policies](https://doi.org/10.1126/scirobotics.aeb0180)

`2026-06-10` · Research Article · *Science Robotics* 11(115)

Tianyue Wu, Guangtong Xu, Zihan Wang, Junxiao Lin, Tianyang Chen, Yuze Wu, Zhichao Han, Zhiyang Liu, Fei Gao

Learns vision-to-control policies for aggressive gap traversal, using planner initialization and simulation distillation.

`Aerial Robotics` `Navigation` `Control` — Reinforcement Learning, Policy Distillation, Hybrid Methods

[Paper](https://doi.org/10.1126/scirobotics.aeb0180)

#### [RAPTOR: A foundation policy for quadrotor control](https://doi.org/10.1126/scirobotics.aec1481)

`2026-05-13` · Research Article · *Science Robotics* 11(114)

Jonas Eschmann, Dario Albani, Giuseppe Loianno

Distills many specialized teachers into a recurrent quadrotor policy that adapts to unseen hardware.

`Aerial Robotics` `Control` — Reinforcement Learning, Policy Distillation, Foundation Models

[Paper](https://doi.org/10.1126/scirobotics.aec1481) · [Project](https://raptor.rl.tools) · [Code](https://github.com/rl-tools/raptor) · [Open version](https://arxiv.org/abs/2509.11481)

#### [Milliwatt ultrasound for navigation in visually degraded environments on palm-sized aerial robots](https://doi.org/10.1126/scirobotics.adz9609)

`2026-03-25` · Research Article · *Science Robotics* 11(112)

Manoj Velmurugan, Phillip Brush, Colin Balfour, Richard J Przybyla, Nitin J Sanket

Uses learned ultrasound denoising to navigate small aerial robots through fog, darkness, and clutter.

`Aerial Robotics` `Navigation` `Perception` — Supervised Learning

[Paper](https://doi.org/10.1126/scirobotics.adz9609)

#### [Optimality principles in spacecraft neural guidance and control](https://doi.org/10.1126/scirobotics.adi6421)

`2024-06-19` · Review / Perspective · *Science Robotics* 9(91)

Dario Izzo, Emmanuel Blazquez, Robin Ferede, Sebastien Origer, Christophe De Wagter, Guido C H E de Croon

Reviews neural guidance and control networks that learn optimal actions for spacecraft and drone tasks.

`Aerial Robotics` `Control` — Model-Based Learning, Supervised Learning

[Paper](https://doi.org/10.1126/scirobotics.adi6421)

#### [Fully neuromorphic vision and control for autonomous drone flight](https://doi.org/10.1126/scirobotics.adi0591)

`2024-05-15` · Research Article · *Science Robotics* 9(90)

F Paredes-Vallés, J J Hagenaars, J Dupeyroux, S Stroobants, Y Xu, G C H E de Croon

Trains an event-based spiking vision-to-control pipeline that transfers from simulation to onboard drone flight.

`Aerial Robotics` `Control` `Perception` — Neuromorphic Learning, Self-Supervised Learning, Evolutionary Learning

[Paper](https://doi.org/10.1126/scirobotics.adi0591)

#### [Reaching the limit in autonomous racing: Optimal control versus reinforcement learning](https://doi.org/10.1126/scirobotics.adg1462)

`2023-09-13` · Research Article · *Science Robotics* 8(82)

Yunlong Song, Angel Romero, Matthias Müller, Vladlen Koltun, Davide Scaramuzza

Compares reinforcement learning against optimal control on drone racing and traces the learning advantage to optimizing the task objective directly rather than through a trajectory interface.

`Aerial Robotics` `Control` `Navigation` — Reinforcement Learning

[Paper](https://doi.org/10.1126/scirobotics.adg1462) · [Open version](https://arxiv.org/abs/2310.10943)

#### [Robust flight navigation out of distribution with liquid neural networks](https://doi.org/10.1126/scirobotics.adc8892)

`2023-04-19` · Research Article · *Science Robotics* 8(77)

Makram Chahine, Ramin Hasani, Patrick Kao, Aaron Ray, Ryan Shubert, Mathias Lechner, Alexander Amini, Daniela Rus

Trains continuous-time liquid networks by imitation so a drone's vision-based fly-to-target skill survives large scenery shifts.

`Aerial Robotics` `Navigation` `Perception` — Other Imitation Learning, Representation Learning

[Paper](https://doi.org/10.1126/scirobotics.adc8892) · [Code](https://github.com/makramchahine/drone_causality)

#### [Neural-Fly enables rapid learning for agile flight in strong winds](https://doi.org/10.1126/scirobotics.abm6597)

`2022-05-04` · Research Article · *Science Robotics* 7(66)

Michael O'Connell, Guanya Shi, Xichen Shi, Kamyar Azizzadenesheli, Anima Anandkumar, Yisong Yue, Soon-Jo Chung

Meta-learns a shared aerodynamic representation from twelve minutes of flight, then adapts a few coefficients online to track trajectories in gusty wind.

`Aerial Robotics` `Control` — Model-Based Learning, Adaptive Learning, Representation Learning

[Paper](https://doi.org/10.1126/scirobotics.abm6597) · [Code](https://github.com/aerorobotics/neural-fly) · [Open version](https://arxiv.org/abs/2205.06908)

#### [Learning high-speed flight in the wild](https://doi.org/10.1126/scirobotics.abg5810)

`2021-10-06` · Research Article · *Science Robotics* 6(59)

Antonio Loquercio, Elia Kaufmann, René Ranftl, Matthias Müller, Vladlen Koltun, Davide Scaramuzza

Maps noisy depth directly to collision-free trajectories, letting a quadrotor fly fast through forests without a separate mapping and planning stack.

`Aerial Robotics` `Navigation` `Perception` — Other Imitation Learning, Policy Distillation

[Paper](https://doi.org/10.1126/scirobotics.abg5810) · [Project](https://rpg.ifi.uzh.ch/AgileAutonomy.html) · [Code](https://github.com/uzh-rpg/agile_autonomy) · [Open version](https://arxiv.org/abs/2110.05113)

#### [An autonomous drone for search and rescue in forests using airborne optical sectioning](https://doi.org/10.1126/scirobotics.abg1188)

`2021-06-23` · Research Article · *Science Robotics* 6(55)

D C Schedl, I Kurmi, O Bimber

Runs deep person classification on computationally defocused thermal images onboard and resamples low-confidence spots, finding 38 of 42 hidden people in forest trials.

`Aerial Robotics` `Perception` `Field Robotics` — Supervised Learning, Learning-Based Perception

[Paper](https://doi.org/10.1126/scirobotics.abg1188) · [Code](https://github.com/JKU-ICG/AOS) · [Open version](https://arxiv.org/abs/2105.04328)

</details>

### Control

<details>
<summary><b>6 papers</b> — 2025–2020</summary>

#### ["Data will solve robotics and automation: True or false?": A debate](https://doi.org/10.1126/scirobotics.aea7897)

`2025-08-27` · Review / Perspective · *Science Robotics* 10(105)

Nancy M Amato, Seth Hutchinson, Animesh Garg, Aude Billard, Daniela Rus, Russ Tedrake, Frank Park, Ken Goldberg

Presents a debate on whether scaling data alone can solve robotics and automation.

`Control` `Manipulation` — Foundation Models

[Paper](https://doi.org/10.1126/scirobotics.aea7897)

#### [A neuromechanics solution for adjustable robot compliance and accuracy](https://doi.org/10.1126/scirobotics.adp2356)

`2025-01-22` · Research Article · *Science Robotics* 10(98)

Ignacio Abadía, Alice Bruel, Grégoire Courtine, Auke J Ijspeert, Eduardo Ros, Niceto R Luque

Combines a muscle-inspired impedance model and adaptive cerebellar network to tune robot compliance and accuracy.

`Control` `Human–Robot Interaction` — Adaptive Learning, Hybrid Methods

[Paper](https://doi.org/10.1126/scirobotics.adp2356)

#### [A cerebellar-based solution to the nondeterministic time delay problem in robotic control](https://doi.org/10.1126/scirobotics.abf2756)

`2021-09-08` · Research Article · *Science Robotics* 6(58)

Ignacio Abadía, Francisco Naveros, Eduardo Ros, Richard R Carrillo, Niceto R Luque

A spiking cerebellar model correlates past and present sensorimotor signals to absorb variable control-loop delays in compliant collaborative robots.

`Control` `Human–Robot Interaction` — Neuromorphic Learning, Adaptive Learning

[Paper](https://doi.org/10.1126/scirobotics.abf2756)

#### [Reinforcement learning with artificial microswimmers](https://doi.org/10.1126/scirobotics.abd9285)

`2021-03-17` · Research Article · *Science Robotics* 6(52)

S Muiños-Landin, A Fischer, V Holubec, F Cichos

Applies reinforcement learning to real thermophoretic microswimmers, which learn to navigate despite Brownian motion scrambling their heading.

`Control` `Robot Design` — Reinforcement Learning

[Paper](https://doi.org/10.1126/scirobotics.abd9285) · [Open version](https://arxiv.org/abs/1803.06425)

#### [A memristor-based hybrid analog-digital computing platform for mobile robotics](https://doi.org/10.1126/scirobotics.abb6938)

`2020-10-21` · Research Article · *Science Robotics* 5(47)

Buyun Chen, Hao Yang, Boxiang Song, Deming Meng, Xiaodong Yan, Yuanrui Li, Yunxiang Wang, Pan Hu, Tse-Hsien Ou, Mark Barnell, Qing Wu, Han Wang, Wei Wu

Tunes memristor conductances by model-free optimization to run sensor fusion and balance control an order of magnitude more efficiently than digital hardware.

`Control` `Perception` — Neuromorphic Learning, Learning-Based Optimization

[Paper](https://doi.org/10.1126/scirobotics.abb6938)

#### [An adaptive deep reinforcement learning framework enables curling robots with human-like performance in real-world conditions](https://doi.org/10.1126/scirobotics.abb9764)

`2020-09-30` · Research Article · *Science Robotics* 5(46)

Dong-Ok Won, Klaus-Robert Müller, Seong-Whan Lee

Extends deep reinforcement learning with temporal features that absorb ice nonstationarity, letting a curling robot win three of four matches against expert human teams.

`Control` `Perception` — Reinforcement Learning, Domain Adaptation

[Paper](https://doi.org/10.1126/scirobotics.abb9764)

</details>

### Dexterous Manipulation

<details>
<summary><b>5 papers</b> — 2026–2023</summary>

#### 🌟 [A careful examination of large behavior models for multitask dexterous manipulation](https://doi.org/10.1126/scirobotics.aea6201)

`2026-04-15` · Research Article · *Science Robotics* 11(113)

Jose Barreiros, Andrew Beaulieu, Aditya Bhat, Rick Cory, Eric Cousineau, Hongkai Dai, Ching-Hsin Fang, Kunimatsu Hashimoto, Muhammad Zubair Irshad, Masha Itkina, Naveen Kuppuswamy, Kuan-Hui Lee, Katherine Liu, Dale McConachie, Ian McMahon, Haruki Nishimura, Calder Phillips-Grafflin, Charles Richter, Paarth Shah, Krishnan Srinivasan, Blake Wulfe, Chen Xu, Mengchao Zhang, Alex Alspach, Maya Angeles, Kushal Arora, Vitor Campagnolo Guizilini, Alejandro Castro, Dian Chen, Ting-Sheng Chu, Sam Creasey, Sean Curtis, Richard Denitto, Emma Dixon, Eric Dusel, Matthew Ferreira, Aimee Goncalves, Grant Gould, Damrong Guoy, Swati Gupta, Xuchen Han, Kyle Hatch, Brendan Hathaway, Allison Henry, Hillel Hochsztein, Phoebe Horgan, Shun Iwase, Donovon Jackson, Siddharth Karamcheti, Sedrick Keh, Joseph Masterjohn, Masayuki Masuda, Jean Mercat, Patrick Miller, Paul Mitiguy, Tony Nguyen, Jeremy Nimmer, Yuki Noguchi, Reko Ong, Aykut Onol, Owen Pfannenstiehl, Richard Poyner, Leticia Priebe Mendes Rocha, Gordon Richardson, Christopher Rodriguez, Derick Seale, Michael Sherman, Mariah Smith-Jones, David Tago, Pavel Tokmakov, Matthew Tran, Basile Van Hoorick, Igor Vasiljevic, Sergey Zakharov, Mark Zolotas, Rareș Ambruș, Kerri Fetzer-Borelli, Benjamin Burchfiel, Hadas Kress-Gazit, Siyuan Feng, Stacie Ford, Russ Tedrake

Evaluates multitask diffusion policies with controlled trials, showing benefits from pretraining scale and diversity.

`Dexterous Manipulation` `Manipulation` — Behavior Cloning, Diffusion Models, Foundation Models

[Paper](https://doi.org/10.1126/scirobotics.aea6201) · [Project](https://toyotaresearchinstitute.github.io/lbm1/) · [**🌟 Cover evidence**](https://toyotaresearchinstitute.github.io/lbm1/)

#### [Visual-tactile pretraining and online multitask learning for humanlike manipulation dexterity](https://doi.org/10.1126/scirobotics.ady2869)

`2026-01-28` · Research Article · *Science Robotics* 11(110)

Qi Ye, Qingtao Liu, Siyun Wang, Jiaying Chen, Yu Cui, Ke Jin, Huajin Chen, Xuan Cai, Gaofeng Li, Jiming Chen

Combines human visual–tactile pretraining with online multitask learning for multifingered manipulation.

`Dexterous Manipulation` `Perception` — Reinforcement Learning, Other Imitation Learning, Self-Supervised Learning

[Paper](https://doi.org/10.1126/scirobotics.ady2869)

#### [Precise and dexterous robotic manipulation via human-in-the-loop reinforcement learning](https://doi.org/10.1126/scirobotics.ads5033)

`2025-08-20` · Research Article · *Science Robotics* 10(105)

Jianlan Luo, Charles Xu, Jeffrey Wu, Sergey Levine

Combines demonstrations and human corrections with sample-efficient real-world learning for precise manipulation.

`Dexterous Manipulation` `Manipulation` `Control` — Reinforcement Learning, Human-in-the-Loop Learning

[Paper](https://doi.org/10.1126/scirobotics.ads5033) · [Project](https://hil-serl.github.io/) · [Code](https://github.com/rail-berkeley/hil-serl) · [Open version](https://hil-serl.github.io/static/hil-serl-paper.pdf)

#### 🌟 [NeuralFeels with neural fields: Visuotactile perception for in-hand manipulation](https://doi.org/10.1126/scirobotics.adl0628)

`2024-11-13` · Research Article · *Science Robotics* 9(96)

Sudharshan Suresh, Haozhi Qi, Tingfan Wu, Taosha Fan, Luis Pineda, Mike Lambeta, Jitendra Malik, Mrinal Kalakrishnan, Roberto Calandra, Michael Kaess, Joseph Ortiz, Mustafa Mukadam

Fuses touch, vision, and proprioception to reconstruct and track previously unseen objects during in-hand manipulation.

`Dexterous Manipulation` `Perception` — Neural Fields, Self-Supervised Learning

[Paper](https://doi.org/10.1126/scirobotics.adl0628) · [Project](https://suddhu.github.io/neural-feels/) · [Code](https://github.com/facebookresearch/neuralfeels) · [Open version](https://arxiv.org/abs/2312.13469) · [**🌟 Cover evidence**](https://www.ri.cmu.edu/cmu-and-partners-redefine-robotic-perception-with-neuralfeels/)

#### [Visual dexterity: In-hand reorientation of novel and complex object shapes](https://doi.org/10.1126/scirobotics.adc9244)

`2023-11-22` · Research Article · *Science Robotics* 8(84)

Tao Chen, Megha Tippur, Siyang Wu, Vikash Kumar, Edward Adelson, Pulkit Agrawal

Trains an in-hand reorientation policy in simulation that turns unseen object shapes to arbitrary orientations from a single depth camera.

`Dexterous Manipulation` `Manipulation` — Reinforcement Learning

[Paper](https://doi.org/10.1126/scirobotics.adc9244) · [Project](https://taochenshh.github.io/projects/visual-dexterity) · [Open version](https://arxiv.org/abs/2211.11744)

</details>

### Field Robotics

<details>
<summary><b>4 papers</b> — 2025–2021</summary>

#### [Accelerating discovery in natural science laboratories with AI and robotics: Perspectives and challenges](https://doi.org/10.1126/scirobotics.adv7932)

`2025-09-24` · Review / Perspective · *Science Robotics* 10(106)

Andrew I Cooper, Patrick Courtney, Kourosh Darvish, Moritz Eckhoff, Hatem Fakhruldeen, Andrea Gabrielli, Animesh Garg, Sami Haddadin, Kanako Harada, Jason Hein, Maria Hübner, Dennis Knobbe, Gabriella Pizzuto, Florian Shkurti, Ruja Shrestha, Kerstin Thurow, Rafael Vescovi, Birgit Vogel-Heuser, Ádám Wolf, Naruki Yoshikawa, Yan Zeng, Zhengxue Zhou, Henning Zwirnmann

Examines autonomy, reproducibility, and human collaboration challenges in AI-enabled laboratory robotics.

`Field Robotics` `Manipulation` — Learning-Based Optimization

[Paper](https://doi.org/10.1126/scirobotics.adv7932)

#### [A framework for robotic excavation and dry stone construction using on-site materials](https://doi.org/10.1126/scirobotics.abp9758)

`2023-11-22` · Research Article · *Science Robotics* 8(84)

Ryan Luke Johns, Martin Wermelinger, Ruben Mascaro, Dominic Jud, Ilmar Hurkxkens, Lauren Vasey, Margarita Chli, Fabio Gramazio, Matthias Kohler, Marco Hutter

Learns stone detection and segmentation from real and simulated data, then plans stable dry-stone walls an excavator builds from on-site rubble.

`Field Robotics` `Manipulation` `Perception` — Supervised Learning, Learning-Based Perception, Hybrid Methods

[Paper](https://doi.org/10.1126/scirobotics.abp9758)

#### [Dynamic robotic tracking of underwater targets using reinforcement learning](https://doi.org/10.1126/scirobotics.ade7811)

`2023-07-26` · Research Article · *Science Robotics* 8(80)

I Masmitja, M Martin, T O'Reilly, B Kieft, N Palomeras, J Navarro, K Katija

Uses reinforcement learning to steer an underwater vehicle that keeps a tagged, moving target in range without an analytic path planner.

`Field Robotics` `Navigation` `Control` — Reinforcement Learning

[Paper](https://doi.org/10.1126/scirobotics.ade7811) · [Open version](https://hdl.handle.net/2117/393215)

#### [An autonomous excavator system for material loading tasks](https://doi.org/10.1126/scirobotics.abc3164)

`2021-06-23` · Research Article · *Science Robotics* 6(55)

Liangjun Zhang, Jinxin Zhao, Pinxin Long, Liyang Wang, Lingfeng Qian, Feixiang Lu, Xibin Song, Dinesh Manocha

Combines learned material and object recognition with optimization-based task and motion planning for continuous excavator loading.

`Field Robotics` `Manipulation` `Perception` — Learning-Based Perception, Supervised Learning, Hybrid Methods

[Paper](https://doi.org/10.1126/scirobotics.abc3164)

</details>

### Human–Robot Interaction

<details>
<summary><b>9 papers</b> — 2026–2020</summary>

#### [Robot in a crib: How a playing robot helps us understand sensorimotor contingency learning](https://doi.org/10.1126/scirobotics.aed4106)

`2026-08-26` · Research Article · *Science Robotics* 11(117)

Josua Spisak, Sergiu Tcaci Popescu, Lukas Rustler, Stefan Wermter, J Kevin O'Regan, Matej Hoffmann

Uses prediction and curiosity in an embodied humanoid to study how action–sensation relationships emerge.

`Human–Robot Interaction` `Control` — Self-Supervised Learning, Developmental Learning

[Paper](https://doi.org/10.1126/scirobotics.aed4106)

#### [From autonomy to alliance: Robotic foundation models must learn with us, not just for us](https://doi.org/10.1126/scirobotics.aea1822)

`2026-04-22` · Review / Perspective · *Science Robotics* 11(113)

Sharmita Dey, Robert Riener, Strahinja Dosen, Stefano V Albrecht

Proposes collaborative robot foundation models that account for partners, social roles, and changing interaction norms.

`Human–Robot Interaction` `Multi-Robot Systems` — Foundation Models

[Paper](https://doi.org/10.1126/scirobotics.aea1822)

#### [Cross-robot behavior adaptation through intention alignment](https://doi.org/10.1126/scirobotics.adv2250)

`2026-03-18` · Research Article · *Science Robotics* 11(112)

Xi Chen, Yuan Gao, Hangxin Liu, Fangkai Yang, Ali Ghadirzadeh, Jun Yang, Bin Liang, Chongjie Zhang, Tin Lun Lam, Song-Chun Zhu

Aligns language-annotated intentions to transfer demonstrated behavior across heterogeneous robots and environments.

`Human–Robot Interaction` `Multi-Robot Systems` `Manipulation` — Other Imitation Learning, Representation Learning

[Paper](https://doi.org/10.1126/scirobotics.adv2250)

#### 🌟 [Learning realistic lip motions for humanoid face robots](https://doi.org/10.1126/scirobotics.adx3017)

`2026-01-14` · Research Article · *Science Robotics* 11(110)

Yuhang Hu, Jiong Lin, Judah Allen Goldfeder, Philippe M Wyder, Yifeng Cao, Steven Tian, Yunzhe Wang, Jingran Wang, Mengmeng Wang, Jie Zeng, Cameron Mehlman, Yingke Wang, Delin Zeng, Boyuan Chen, Hod Lipson

Learns audio-conditioned lip trajectories for an expressive robotic face without hand-coded mouth movements.

`Human–Robot Interaction` `Control` — Self-Supervised Learning

[Paper](https://doi.org/10.1126/scirobotics.adx3017) · [Project](https://www.engineering.columbia.edu/about/news/robot-learns-lip-sync) · [Open version](https://generalroboticslab.com/assets/files/papers/lip.pdf) · [**🌟 Cover evidence**](https://www.engineering.columbia.edu/about/news/robot-learns-lip-sync)

#### [Development of compositionality through interactive learning of language and action of robots](https://doi.org/10.1126/scirobotics.adp0751)

`2025-01-22` · Research Article · *Science Robotics* 10(98)

Prasanna Vijayaraghavan, Jeffrey Frederic Queißer, Sergio Verduzco Flores, Jun Tani

Integrates vision, proprioception, and language to learn compositional action–language representations.

`Human–Robot Interaction` `Manipulation` — Developmental Learning, Representation Learning

[Paper](https://doi.org/10.1126/scirobotics.adp0751)

#### [Intrinsic sense of touch for intuitive physical human-robot interaction](https://doi.org/10.1126/scirobotics.adn4008)

`2024-08-21` · Research Article · *Science Robotics* 9(93)

Maged Iskandar, Alin Albu-Schäffer, Alexander Dietrich

Recognizes touch trajectories on a robot body as symbolic instructions using manifold learning and neural networks.

`Human–Robot Interaction` `Perception` — Representation Learning, Supervised Learning

[Paper](https://doi.org/10.1126/scirobotics.adn4008)

#### [Human-robot facial coexpression](https://doi.org/10.1126/scirobotics.adi4724)

`2024-03-27` · Research Article · *Science Robotics* 9(88)

Yuhang Hu, Boyuan Chen, Jiong Lin, Yunzhe Wang, Yingke Wang, Cameron Mehlman, Hod Lipson

Learns to anticipate human smiles and control a robotic facial model for simultaneous coexpression.

`Human–Robot Interaction` `Control` — Supervised Learning, Model-Based Learning

[Paper](https://doi.org/10.1126/scirobotics.adi4724)

#### [In situ bidirectional human-robot value alignment](https://doi.org/10.1126/scirobotics.abm4183)

`2022-07-13` · Research Article · *Science Robotics* 7(68)

Luyao Yuan, Xiaofeng Gao, Zilong Zheng, Mark Edmonds, Ying Nian Wu, Federico Rossano, Hongjing Lu, Yixin Zhu, Song-Chun Zhu

Robots infer user goal priorities from in-task feedback while explaining their own reasoning, so both sides converge on shared values.

`Human–Robot Interaction` `Multi-Robot Systems` — Human-in-the-Loop Learning, Model-Based Learning

[Paper](https://doi.org/10.1126/scirobotics.abm4183) · [Project](https://yzhu.io/publication/teaming2022scirob/)

#### [Modeling engagement in long-term, in-home socially assistive robot interventions for children with autism spectrum disorders](https://doi.org/10.1126/scirobotics.aaz3791)

`2020-02-26` · Research Article · *Science Robotics* 5(39)

Shomik Jain, Balasubramanian Thiagarajan, Zhonghao Shi, Caitlyn Clabaugh, Maja J Matarić

Trains generalized and per-child engagement classifiers from month-long in-home sessions, reaching about 90 percent AUROC despite high variance across users.

`Human–Robot Interaction` — Supervised Learning

[Paper](https://doi.org/10.1126/scirobotics.aaz3791) · [Open version](https://arxiv.org/abs/2002.02453)

</details>

### Locomotion

<details>
<summary><b>20 papers</b> — 2026–2020</summary>

#### [BeyondMimic: From motion tracking to versatile humanoid control via guided diffusion](https://doi.org/10.1126/scirobotics.adx8924)

`2026-08-26` · Research Article · *Science Robotics* 11(117)

Qiayuan Liao, Takara E Truong, Xiaoyu Huang, Yuman Gao, Guy Tevet, Koushil Sreenath, C Karen Liu

Combines agile motion tracking with guided diffusion to compose humanoid skills for previously unseen objectives.

`Locomotion` `Control` — Reinforcement Learning, Other Imitation Learning, Diffusion Models

[Paper](https://doi.org/10.1126/scirobotics.adx8924) · [Project](https://beyondmimic.github.io/) · [Code](https://github.com/HybridRobotics/whole_body_tracking) · [Open version](https://arxiv.org/abs/2508.08241)

#### [Evolution of humanoid locomotion control](https://doi.org/10.1126/scirobotics.aed3973)

`2026-08-19` · Review / Perspective · *Science Robotics* 11(117)

Yan Gu, Guanya Shi, Fan Shi, I-Chia Chang, Yen-Jen Wang, Qilong Cheng, Zachary Olkin, Ivan Lopez-Sanchez, Yunchu Feng, Jian Zhang, Aaron D Ames, Hao Su, Koushil Sreenath

Reviews the evolution of humanoid locomotion from model-based control to learning and generative approaches.

`Locomotion` `Control` — Reinforcement Learning, Foundation Models, Hybrid Methods

[Paper](https://doi.org/10.1126/scirobotics.aed3973)

#### [Learning vision-driven reactive soccer skills for humanoid robots](https://doi.org/10.1126/scirobotics.aed1152)

`2026-08-19` · Research Article · *Science Robotics* 11(117)

Yushi Wang, Changsheng Luo, Penghui Chen, Jianran Liu, Weijian Sun, Tong Guo, Kechang Yang, Biao Hu, Yangang Zhang, Mingguo Zhao

Trains an onboard vision-driven soccer controller that remains reactive under perceptual noise and detection failures.

`Locomotion` `Perception` `Control` — Reinforcement Learning

[Paper](https://doi.org/10.1126/scirobotics.aed1152)

#### [SONIC: Supersizing motion tracking for natural humanoid whole-body control](https://doi.org/10.1126/scirobotics.aed4592)

`2026-08-12` · Research Article · *Science Robotics* 11(117)

Zhengyi Luo, Ye Yuan, Tingwu Wang, Chenran Li, Fernando Castañeda, Sirui Chen, Zi-Ang Cao, Jiefeng Li, David Minor, Qingwei Ben, Jinhyung Park, David Sami, Zi Wang, Xingye Da, Runyu Ding, Cyrus Hogg, Lina Song, Edy Lim, Eugene Jeong, Tairan He, Haoru Xue, Wenli Xiao, Simon Yuen, Jan Kautz, Yan Chang, Umar Iqbal, Linxi Jim Fan, Yuke Zhu

Scales motion-tracking data, model capacity, and compute into a generalist humanoid whole-body controller.

`Locomotion` `Control` `Manipulation` — Other Imitation Learning, Foundation Models

[Paper](https://doi.org/10.1126/scirobotics.aed4592) · [Project](https://nvlabs.github.io/GEAR-SONIC/) · [Code](https://github.com/NVlabs/GR00T-WholeBodyControl)

#### [ZEST: Zero-shot embodied skill transfer for athletic robot control](https://doi.org/10.1126/scirobotics.aec7695)

`2026-08-12` · Research Article · *Science Robotics* 11(117)

Jean Pierre Sleiman, He Li, Alphonsus Adu-Bredu, Robin Deits, Arun Kumar, Kevin Bergamin, Mohak Bhardwaj, Scott Biddlestone, Nicola Burger, Matthew A Estrada, Francesco Iacobelli, Twan Koolen, Alexander Lambert, Erica Lin, M Eva Mungai, Zach Nobles, Shane Rozen-Levy, Yuyao Shi, Jiashun Wang, Jakob Welner, Fangzhou Yu, Mike Zhang, Alfred Rizzi, Jessica Hodgins, Sylvain Bertrand, Yeuhi Abe, Scott Kuindersma, Farbod Farshidian

Transfers athletic motions from capture, video, and animation to different robot bodies without per-skill tuning.

`Locomotion` `Control` — Reinforcement Learning, Other Imitation Learning

[Paper](https://doi.org/10.1126/scirobotics.aec7695) · [Open version](https://arxiv.org/abs/2602.00401)

#### [Advances, challenges, and opportunities for legged robots](https://doi.org/10.1126/scirobotics.aee0787)

`2026-07-29` · Review / Perspective · *Science Robotics* 11(116)

Jonas Frey, Matías Mattamala, Hae-Won Park, Mayank Mittal, Georg Martius, Maike Osborne, Robert Sparrow, Marco Hutter

Reviews capabilities and open challenges in legged hardware, autonomy, data, and deployment.

`Locomotion` `Control` — Reinforcement Learning

[Paper](https://doi.org/10.1126/scirobotics.aee0787)

#### [Bioinspired multimodal robotics](https://doi.org/10.1126/scirobotics.aea7639)

`2026-07-22` · Review / Perspective · *Science Robotics* 11(116)

Ziyu Ren, Youning Duo, Haoyuan Xu, Yihui Zhang, Xingjian Liu, Jamie Paik, Auke Ijspeert, Li Wen

Reviews multimodal robot design and the transition toward learned planning and motion control.

`Locomotion` `Robot Design` — Hybrid Methods

[Paper](https://doi.org/10.1126/scirobotics.aea7639)

#### 🌟 [Agile perceptive multiskill locomotion for quadrupedal robots in the wild](https://doi.org/10.1126/scirobotics.adz7397)

`2026-07-15` · Research Article · *Science Robotics* 11(116)

Jun-Gill Kang, Jaehyun Park, Tae-Gyu Song, Joon-Ha Kim, Seungwoo Hong, Hae-Won Park

Pretrains locomotion skills from optimized motions and learns perceptive transitions across challenging outdoor terrain.

`Locomotion` `Navigation` `Control` — Reinforcement Learning, Other Imitation Learning, Hybrid Methods

[Paper](https://doi.org/10.1126/scirobotics.adz7397) · [Project](https://www.dynamicrobot.kaist.ac.kr/publications) · [**🌟 Cover evidence**](https://kaist.ac.kr/newsen/html/news/?GotoPage=1&list_e_date=&list_s_date=&mng_no=64450&mode=V&skey=&sval=WWW)

#### [Attention-based map encoding for learning generalized legged locomotion](https://doi.org/10.1126/scirobotics.adv3604)

`2025-08-27` · Research Article · *Science Robotics* 10(105)

Junzhe He, Chong Zhang, Fabian Jenelten, Ruben Grandia, Moritz Bächer, Marco Hutter

Uses proprioception-conditioned map attention to learn robust, precise locomotion across sparse footholds.

`Locomotion` `Navigation` `Control` — Reinforcement Learning

[Paper](https://doi.org/10.1126/scirobotics.adv3604)

#### [High-speed control and navigation for quadrupedal robots on complex and discrete terrain](https://doi.org/10.1126/scirobotics.ads6192)

`2025-05-28` · Research Article · *Science Robotics* 10(102)

Hyeongjun Kim, Hyunsik Oh, Jeongsoo Park, Yunho Kim, Donghoon Youm, Moonkyu Jung, Minho Lee, Jemin Hwangbo

Combines optimized foothold planning with a learned tracker and an adaptive training terrain distribution.

`Locomotion` `Navigation` `Control` — Reinforcement Learning, Hybrid Methods

[Paper](https://doi.org/10.1126/scirobotics.ads6192)

#### [Learning robust autonomous navigation and locomotion for wheeled-legged robots](https://doi.org/10.1126/scirobotics.adi9641)

`2024-04-24` · Research Article · *Science Robotics* 9(89)

Joonho Lee, Marko Bjelonic, Alexander Reske, Lorenz Wellhausen, Takahiro Miki, Marco Hutter

Integrates learned wheeled-legged locomotion and hierarchical navigation for kilometer-scale urban missions.

`Locomotion` `Navigation` `Control` — Reinforcement Learning

[Paper](https://doi.org/10.1126/scirobotics.adi9641)

#### [Real-world humanoid locomotion with reinforcement learning](https://doi.org/10.1126/scirobotics.adi9579)

`2024-04-17` · Research Article · *Science Robotics* 9(89)

Ilija Radosavovic, Tete Xiao, Bike Zhang, Trevor Darrell, Jitendra Malik, Koushil Sreenath

Trains a transformer locomotion controller that adapts from observation–action history during real-world humanoid walking.

`Locomotion` `Control` — Reinforcement Learning

[Paper](https://doi.org/10.1126/scirobotics.adi9579)

#### [Learning agile soccer skills for a bipedal robot with deep reinforcement learning](https://doi.org/10.1126/scirobotics.adi8022)

`2024-04-10` · Research Article · *Science Robotics* 9(89)

Tuomas Haarnoja, Ben Moran, Guy Lever, Sandy H Huang, Dhruva Tirumala, Jan Humplik, Markus Wulfmeier, Saran Tunyasuvunakool, Noah Y Siegel, Roland Hafner, Michael Bloesch, Kristian Hartikainen, Arunkumar Byravan, Leonard Hasenclever, Yuval Tassa, Fereshteh Sadeghi, Nathan Batchelor, Federico Casarini, Stefano Saliceti, Charles Game, Neil Sreendra, Kushal Patel, Marlon Gwira, Andrea Huber, Nicole Hurley, Francesco Nori, Raia Hadsell, Nicolas Heess

Learns agile bipedal soccer skills and tactical behaviors in simulation for zero-shot deployment on small humanoids.

`Locomotion` `Control` — Reinforcement Learning

[Paper](https://doi.org/10.1126/scirobotics.adi8022)

#### [ANYmal parkour: Learning agile navigation for quadrupedal robots](https://doi.org/10.1126/scirobotics.adi7566)

`2024-03-13` · Research Article · *Science Robotics* 9(88)

David Hoeller, Nikita Rudin, Dhionis Sako, Marco Hutter

Combines learned perception, motor skills, and high-level selection to traverse parkour-like obstacles.

`Locomotion` `Navigation` `Perception` — Reinforcement Learning, Hierarchical Learning

[Paper](https://doi.org/10.1126/scirobotics.adi7566) · [Project](https://sites.google.com/leggedrobotics.com/agile-navigation) · [Open version](https://arxiv.org/abs/2306.14874)

#### [DTC: Deep Tracking Control](https://doi.org/10.1126/scirobotics.adh5401)

`2024-01-17` · Research Article · *Science Robotics* 9(86)

Fabian Jenelten, Junzhe He, Farbod Farshidian, Marco Hutter

Trains a robust tracking policy around optimized reference motions to improve precision on sparse footholds.

`Locomotion` `Control` — Reinforcement Learning, Hybrid Methods

[Paper](https://doi.org/10.1126/scirobotics.adh5401) · [Open version](https://arxiv.org/abs/2309.15462)

#### [Learning quadrupedal locomotion on deformable terrain](https://doi.org/10.1126/scirobotics.ade2256)

`2023-01-25` · Research Article · *Science Robotics* 8(74)

Suyoung Choi, Gwanghyeon Ji, Jeongsoo Park, Hyeongjun Kim, Juhyeok Mun, Jeong Hyun Lee, Jemin Hwangbo

Adds a fast granular-media simulator to reinforcement learning and identifies terrain properties online so a quadruped runs on sand as well as asphalt.

`Locomotion` `Control` — Reinforcement Learning, Adaptive Learning

[Paper](https://doi.org/10.1126/scirobotics.ade2256)

#### [From motor control to team play in simulated humanoid football](https://doi.org/10.1126/scirobotics.abo0235)

`2022-08-31` · Research Article · *Science Robotics* 7(69)

Siqi Liu, Guy Lever, Zhe Wang, Josh Merel, S M Ali Eslami, Daniel Hennes, Wojciech M Czarnecki, Yuval Tassa, Shayegan Omidshafiei, Abbas Abdolmaleki, Noah Y Siegel, Leonard Hasenclever, Luke Marris, Saran Tunyasuvunakool, H Francis Song, Markus Wulfmeier, Paul Muller, Tuomas Haarnoja, Brendan Tracey, Karl Tuyls, Thore Graepel, Nicolas Heess

Trains simulated humanoids end to end from joint torques to team play, integrating motor control with long-horizon multi-agent decisions.

`Locomotion` `Multi-Robot Systems` `Control` — Reinforcement Learning, Policy Distillation

[Paper](https://doi.org/10.1126/scirobotics.abo0235) · [Open version](https://arxiv.org/abs/2105.12196)

#### [Learning robust perceptive locomotion for quadrupedal robots in the wild](https://doi.org/10.1126/scirobotics.abk2822)

`2022-01-19` · Research Article · *Science Robotics* 7(62)

Takahiro Miki, Joonho Lee, Jemin Hwangbo, Lorenz Wellhausen, Vladlen Koltun, Marco Hutter

Trains a quadruped to fuse exteroception with proprioception and fall back on feel when the depth map is wrong, unlocking fast travel in snow and vegetation.

`Locomotion` `Perception` `Control` — Reinforcement Learning, Policy Distillation

[Paper](https://doi.org/10.1126/scirobotics.abk2822) · [Open version](https://arxiv.org/abs/2201.08117)

#### [Multi-expert learning of adaptive legged locomotion](https://doi.org/10.1126/scirobotics.abb2174)

`2020-12-16` · Research Article · *Science Robotics* 5(49)

Chuanyu Yang, Kai Yuan, Qiuguo Zhu, Wanming Yu, Zhibin Li

Blends pretrained expert networks through a gating network to synthesize new locomotion skills online as conditions change.

`Locomotion` `Control` — Reinforcement Learning, Hierarchical Learning

[Paper](https://doi.org/10.1126/scirobotics.abb2174) · [Open version](https://arxiv.org/abs/2012.05810)

#### [Learning quadrupedal locomotion over challenging terrain](https://doi.org/10.1126/scirobotics.abc5986)

`2020-10-21` · Research Article · *Science Robotics* 5(47)

Joonho Lee, Jemin Hwangbo, Lorenz Wellhausen, Vladlen Koltun, Marco Hutter

Trains a blind proprioceptive policy in simulation that transfers zero-shot to mud, snow and running water.

`Locomotion` `Control` — Reinforcement Learning, Policy Distillation

[Paper](https://doi.org/10.1126/scirobotics.abc5986) · [Open version](https://arxiv.org/abs/2010.11251)

</details>

### Manipulation

<details>
<summary><b>14 papers</b> — 2026–2020</summary>

#### [Performant robotic manipulation with real-world reinforcement learning](https://doi.org/10.1126/scirobotics.aed6267)

`2026-07-22` · Research Article · *Science Robotics* 11(116)

Kun Lei, Huanyu Li, Dongjie Yu, Zhenyu Wei, Lingxiao Guo, Zhennan Jiang, Ziyu Wang, Shiyu Liang, Huazhe Xu

Improves diffusion visuomotor policies through offline and online reinforcement learning, with fast one-step execution.

`Manipulation` `Control` — Reinforcement Learning, Behavior Cloning, Diffusion Models

[Paper](https://doi.org/10.1126/scirobotics.aed6267)

#### [A retrieval-augmented framework enabling VLM spatial awareness for object-centric robot manipulation](https://doi.org/10.1126/scirobotics.aea2092)

`2026-04-29` · Research Article · *Science Robotics* 11(113)

Kai Chen, Chengkun Li, Chang Tu, Jiahui Pan, Yiyao Ma, Wei Chen, Zhongxiang Zhou, Xuecheng Xu, Stephen James, Chi-Wing Fu, Rong Xiong, Pieter Abbeel, Yun-Hui Liu, Qi Dou

Grounds vision-language reasoning in object-centric geometry to execute spatially precise manipulation instructions.

`Manipulation` `Perception` — Foundation Models, Retrieval-Based Learning

[Paper](https://doi.org/10.1126/scirobotics.aea2092)

#### [Demonstrate once, execute on many: Kinematic intelligence for cross-robot skill transfer](https://doi.org/10.1126/scirobotics.aea1995)

`2026-04-15` · Research Article · *Science Robotics* 11(113)

Sthithpragya Gupta, Durgesh Haribhau Salunkhe, Aude Billard

Embeds kinematic constraints in demonstration-derived dynamical policies for skill transfer across robot morphologies.

`Manipulation` `Control` — Other Imitation Learning, Hybrid Methods

[Paper](https://doi.org/10.1126/scirobotics.aea1995)

#### 🌟 [Learning a thousand tasks in a day](https://doi.org/10.1126/scirobotics.adv7594)

`2025-11-12` · Research Article · *Science Robotics* 10(108)

Kamil Dreczkowski, Pietro Vitiello, Vitalis Vosylius, Edward Johns

Separates alignment and interaction, using trajectory retrieval to teach a robot many tasks from few demonstrations.

`Manipulation` — Other Imitation Learning, Retrieval-Based Learning

[Paper](https://doi.org/10.1126/scirobotics.adv7594) · [Project](https://www.robot-learning.uk/learning-1000-tasks) · [Code](https://github.com/kamil-dreczkowski/learning_thousand_tasks) · [Open version](https://arxiv.org/abs/2511.10110) · [**🌟 Cover evidence**](https://www.robot-learning.uk/learning-1000-tasks)

#### [A review of learning-based dynamics models for robotic manipulation](https://doi.org/10.1126/scirobotics.adt1497)

`2025-09-17` · Review / Perspective · *Science Robotics* 10(106)

Bo Ai, Stephen Tian, Haochen Shi, Yixuan Wang, Tobias Pfaff, Cheston Tan, Henrik I Christensen, Hao Su, Jiajun Wu, Yunzhu Li

Reviews learned interaction dynamics, state representations, uncertainty, and their use in manipulation planning.

`Manipulation` `Control` — Model-Based Learning

[Paper](https://doi.org/10.1126/scirobotics.adt1497)

#### [Learning contact-rich whole-body manipulation with example-guided reinforcement learning](https://doi.org/10.1126/scirobotics.ads6790)

`2025-08-20` · Research Article · *Science Robotics* 10(105)

Jose A Barreiros, Aykut Özgün Önol, Mengchao Zhang, Sam Creasey, Aimee Goncalves, Andrew Beaulieu, Aditya Bhat, Kate M Tsui, Alex Alspach

Learns contact-rich whole-body object handling from example motions using a compliant humanoid upper body.

`Manipulation` `Control` — Reinforcement Learning, Other Imitation Learning

[Paper](https://doi.org/10.1126/scirobotics.ads6790)

#### [Learning coordinated badminton skills for legged manipulators](https://doi.org/10.1126/scirobotics.adu3922)

`2025-05-28` · Research Article · *Science Robotics* 10(102)

Yuntao Ma, Andrei Cramariuc, Farbod Farshidian, Marco Hutter

Learns coordinated whole-body badminton skills while accounting for real-world visual perception uncertainty.

`Manipulation` `Locomotion` `Control` — Reinforcement Learning

[Paper](https://doi.org/10.1126/scirobotics.adu3922)

#### [SimPLE, a visuotactile method learned in simulation to precisely pick, localize, regrasp, and place objects](https://doi.org/10.1126/scirobotics.adi8808)

`2024-06-26` · Research Article · *Science Robotics* 9(91)

Maria Bauza, Antonia Bronars, Yifan Hou, Ian Taylor, Nikhil Chavan-Dafle, Alberto Rodriguez

Learns visuotactile pose estimation in simulation and combines it with grasp and regrasp planning for precise placement.

`Manipulation` `Perception` — Supervised Learning, Hybrid Methods

[Paper](https://doi.org/10.1126/scirobotics.adi8808) · [Open version](https://arxiv.org/abs/2307.13133)

#### [Efficient multitask learning with an embodied predictive model for door opening and entry with whole-body control](https://doi.org/10.1126/scirobotics.aax8177)

`2022-04-06` · Research Article · *Science Robotics* 7(65)

Hiroshi Ito, Kenjiro Yamamoto, Hiroki Mori, Tetsuya Ogata

Switches between predictive modules by prediction error so a whole-body robot opens and passes through doors with little task-specific engineering.

`Manipulation` `Control` `Navigation` — Reinforcement Learning, Model-Based Learning

[Paper](https://doi.org/10.1126/scirobotics.aax8177)

#### [Learning garment manipulation policies toward robot-assisted dressing](https://doi.org/10.1126/scirobotics.abm6010)

`2022-04-06` · Research Article · *Science Robotics* 7(65)

Fan Zhang, Yiannis Demiris

Learns in simulation to unfold a hospital gown into a dressable configuration, then transfers the deformable-object policy to a real dressing pipeline.

`Manipulation` `Human–Robot Interaction` `Wearable Robotics` — Reinforcement Learning, Learning-Based Perception

[Paper](https://doi.org/10.1126/scirobotics.abm6010) · [Code](https://github.com/fan6zh/robot_dressing)

#### [Learning where to trust unreliable models in an unstructured world for deformable object manipulation](https://doi.org/10.1126/scirobotics.abd8170)

`2021-05-12` · Research Article · *Science Robotics* 6(54)

P Mitrano, D McConachie, D Berenson

Learns a dynamics model for rope manipulation plus a classifier that says when that model should not be trusted during planning.

`Manipulation` `Control` — Model-Based Learning, Supervised Learning

[Paper](https://doi.org/10.1126/scirobotics.abd8170) · [Code](https://github.com/UM-ARM-Lab/unreliable-deform-manipulation)

#### [Modeling, learning, perception, and control methods for deformable object manipulation](https://doi.org/10.1126/scirobotics.abd8803)

`2021-05-12` · Review / Perspective · *Science Robotics* 6(54)

Hang Yin, Anastasia Varava, Danica Kragic

Surveys over a hundred studies on deformable object manipulation, using a learning perspective to unify analytical and data-driven approaches.

`Manipulation` `Perception` `Control` — Supervised Learning, Reinforcement Learning, Learning-Based Perception

[Paper](https://doi.org/10.1126/scirobotics.abd8803)

#### [Toward next-generation learned robot manipulation](https://doi.org/10.1126/scirobotics.abd9461)

`2021-05-12` · Review / Perspective · *Science Robotics* 6(54)

Jinda Cui, Jeff Trinkle

Organizes learned manipulation research around the kinds of variation robots meet in human environments and what adaptability each method buys.

`Manipulation` `Dexterous Manipulation` — Reinforcement Learning, Other Imitation Learning, Adaptive Learning

[Paper](https://doi.org/10.1126/scirobotics.abd9461)

#### [Deep learning can accelerate grasp-optimized motion planning](https://doi.org/10.1126/scirobotics.abd7710)

`2020-11-18` · Research Article · *Science Robotics* 5(48)

Jeffrey Ichnowski, Yahav Avigal, Vishal Satish, Ken Goldberg, Ken Goldberg

Warm-starts a trajectory optimizer with an approximate network prediction, cutting compute for warehouse pick motions while keeping feasibility.

`Manipulation` `Control` — Supervised Learning, Learning-Based Optimization

[Paper](https://doi.org/10.1126/scirobotics.abd7710) · [Project](https://berkeleyautomation.github.io/dj-gomp/)

</details>

### Multi-Robot Systems

<details>
<summary><b>4 papers</b> — 2025–2023</summary>

#### [Extending robot minds through collective learning](https://doi.org/10.1126/scirobotics.adv4049)

`2025-09-24` · Review / Perspective · *Science Robotics* 10(106)

Amanda Prorok

Argues for distributed robot learning through modular, interdependent systems rather than monolithic models.

`Multi-Robot Systems` — Foundation Models, Collective Learning

[Paper](https://doi.org/10.1126/scirobotics.adv4049)

#### [RoboBallet: Planning for multirobot reaching with graph neural networks and reinforcement learning](https://doi.org/10.1126/scirobotics.ads1204)

`2025-09-03` · Research Article · *Science Robotics* 10(106)

Matthew Lai, Keegan Go, Zhibin Li, Torsten Kröger, Stefan Schaal, Kelsey Allen, Jonathan Scholz

Learns graph-based coordination that jointly allocates tasks, schedules actions, and plans collision-free multiarm motion.

`Multi-Robot Systems` `Manipulation` `Control` — Reinforcement Learning, Graph Learning

[Paper](https://doi.org/10.1126/scirobotics.ads1204)

#### [Counterfactual rewards promote collective transport using individually controlled swarm microrobots](https://doi.org/10.1126/scirobotics.ado5888)

`2024-12-18` · Research Article · *Science Robotics* 9(97)

Veit-Lorenz Heuthe, Emanuele Panizon, Hongri Gu, Clemens Bechinger

Uses counterfactual rewards to assign credit when independently controlled microrobots collectively transport cargo.

`Multi-Robot Systems` `Manipulation` — Reinforcement Learning

[Paper](https://doi.org/10.1126/scirobotics.ado5888)

#### [Morphological computation and decentralized learning in a swarm of sterically interacting robots](https://doi.org/10.1126/scirobotics.abo6140)

`2023-02-22` · Research Article · *Science Robotics* 8(75)

Matan Yah Ben Zion, Jeremy Fersula, Nicolas Bredeche, Olivier Dauchot

Encodes a force-orientation response in a printed exoskeleton so dense swarms compute through collisions and adapt without a central controller.

`Multi-Robot Systems` `Robot Design` `Locomotion` — Collective Learning

[Paper](https://doi.org/10.1126/scirobotics.abo6140) · [Open version](https://arxiv.org/abs/2111.06953)

</details>

### Navigation

<details>
<summary><b>8 papers</b> — 2025–2021</summary>

#### [Resilient odometry via hierarchical adaptation](https://doi.org/10.1126/scirobotics.adv1818)

`2025-12-10` · Research Article · *Science Robotics* 10(109)

Shibo Zhao, Sifan Zhou, Yuchen Zhang, Ji Zhang, Chen Wang, Wenshan Wang, Sebastian Scherer

Integrates learned inertial odometry with hierarchical sensor adaptation for navigation under severe sensory degradation.

`Navigation` `Perception` — Supervised Learning, Hybrid Methods

[Paper](https://doi.org/10.1126/scirobotics.adv1818)

#### [A compact neuromorphic system for ultra-energy-efficient, on-device robot localization](https://doi.org/10.1126/scirobotics.ads3968)

`2025-06-18` · Research Article · *Science Robotics* 10(103)

Adam D Hines, Michael Milford, Tobias Fischer

Combines event sensing and spiking networks for compact, low-energy visual place recognition on a robot.

`Navigation` `Perception` — Neuromorphic Learning

[Paper](https://doi.org/10.1126/scirobotics.ads3968)

#### [Hierarchically depicting vehicle trajectory with stability in complex environments](https://doi.org/10.1126/scirobotics.ads4551)

`2025-06-18` · Research Article · *Science Robotics* 10(103)

Zhichao Han, Mengze Tian, Zaitian Gongye, Donglai Xue, Jiaxi Xing, Qianhao Wang, Yuman Gao, Jingping Wang, Chao Xu, Fei Gao

Combines learned path proposals with stable trajectory optimization to navigate complex environments efficiently.

`Navigation` `Control` — Supervised Learning, Hybrid Methods

[Paper](https://doi.org/10.1126/scirobotics.ads4551)

#### [Reinforcement learning-based framework for whale rendezvous via autonomous sensing robots](https://doi.org/10.1126/scirobotics.adn7299)

`2024-10-30` · Research Article · *Science Robotics* 9(95)

Ninad Jadhav, Sushmita Bhattacharya, Daniel Vogt, Yaniv Aluma, Pernille Tønnesen, Akarsh Prabhakara, Swarun Kumar, Shane Gero, Robert J Wood, Stephanie Gil

Couples multiagent routing with radio-based sensing to improve autonomous rendezvous with sperm whales.

`Navigation` `Multi-Robot Systems` — Reinforcement Learning, Hybrid Methods

[Paper](https://doi.org/10.1126/scirobotics.adn7299)

#### [Neuromorphic sequence learning with an event camera on routes through vegetation](https://doi.org/10.1126/scirobotics.adg3679)

`2023-09-27` · Research Article · *Science Robotics* 8(82)

Le Zhu, Michael Mangan, Barbara Webb

Runs an insect-brain-inspired spatiotemporal memory over event-camera sequences so a ground robot can recall routes through moving vegetation.

`Navigation` `Perception` `Field Robotics` — Neuromorphic Learning, Representation Learning

[Paper](https://doi.org/10.1126/scirobotics.adg3679)

#### [Navigating to objects in the real world](https://doi.org/10.1126/scirobotics.adf6991)

`2023-06-28` · Research Article · *Science Robotics* 8(79)

Theophile Gervet, Soumith Chintala, Dhruv Batra, Jitendra Malik, Devendra Singh Chaplot

Benchmarks classical, modular-learning and end-to-end semantic navigation across six unseen homes and finds modular learning transfers best to hardware.

`Navigation` `Perception` — Reinforcement Learning, Learning-Based Perception, Hybrid Methods

[Paper](https://doi.org/10.1126/scirobotics.adf6991) · [Project](https://theophilegervet.github.io/projects/real-world-object-navigation/) · [Open version](https://arxiv.org/abs/2212.00922)

#### [Insect-inspired AI for autonomous robots](https://doi.org/10.1126/scirobotics.abl6334)

`2022-06-15` · Review / Perspective · *Science Robotics* 7(67)

G C H E de Croon, J J G Dupeyroux, S B Fuller, J A R Marshall

Argues that insect intelligence — embodiment, sensorimotor coordination, swarming — is a resource-efficient alternative to mainstream AI for small robots.

`Navigation` `Perception` `Aerial Robotics` — Neuromorphic Learning, Learning-Based Perception

[Paper](https://doi.org/10.1126/scirobotics.abl6334)

#### [A seasonally invariant deep transform for visual terrain-relative navigation](https://doi.org/10.1126/scirobotics.abf3320)

`2021-06-23` · Research Article · *Science Robotics* 6(55)

Anthony T Fragoso, Connor T Lee, Austin S McCoy, Soon-Jo Chung

Learns a transform that strips seasonal appearance from aerial imagery so classical geometric registration still localizes under snow or new foliage.

`Navigation` `Perception` `Aerial Robotics` — Supervised Learning, Domain Adaptation

[Paper](https://doi.org/10.1126/scirobotics.abf3320)

</details>

### Perception

<details>
<summary><b>16 papers</b> — 2025–2020</summary>

#### [Multimodal information structuring with single-layer soft skins and high-density electrical impedance tomography](https://doi.org/10.1126/scirobotics.adq2303)

`2025-06-11` · Research Article · *Science Robotics* 10(103)

David Hardman, Thomas George Thuruthel, Fumiya Iida

Structures redundant electrical measurements from a soft skin into multimodal touch and environmental estimates.

`Perception` `Soft Robotics` — Supervised Learning

[Paper](https://doi.org/10.1126/scirobotics.adq2303)

#### [Autonomous tracking of honey bee behaviors over long-term periods with cooperating robots](https://doi.org/10.1126/scirobotics.adn6848)

`2024-10-16` · Research Article · *Science Robotics* 9(95)

Jiří Ulrich, Martin Stefanec, Fatemeh Rekabi-Bana, Laurenz Alexander Fedotoff, Tomáš Rouček, Bilal Yağız Gündeğer, Mahmood Saadat, Jan Blaha, Jiří Janota, Daniel Nicolas Hofstadler, Kristina Žampachů, Erhan Ege Keyvan, Babür Erdem, Erol Şahin, Hande Alemdar, Ali Emre Turgut, Farshad Arvin, Thomas Schmickl, Tomáš Krajník

Combines autonomous robotic observation with behavioral analysis to track a honey-bee queen and colony interactions.

`Perception` `Field Robotics` — Learning-Based Perception

[Paper](https://doi.org/10.1126/scirobotics.adn6848)

#### [Stereoscopic artificial compound eyes for spatiotemporal perception in three-dimensional space](https://doi.org/10.1126/scirobotics.adl3606)

`2024-05-15` · Research Article · *Science Robotics* 9(90)

Byungjoon Bae, Doeon Lee, Minseong Park, Yujia Mu, Yongmin Baek, Inbo Sim, Cong Shen, Kyusang Lee

Combines stereoscopic artificial compound eyes with edge learning for efficient three-dimensional object tracking.

`Perception` — Supervised Learning

[Paper](https://doi.org/10.1126/scirobotics.adl3606)

#### [Ajna: Generalized deep uncertainty for minimal perception on parsimonious robots](https://doi.org/10.1126/scirobotics.add5139)

`2023-08-16` · Research Article · *Science Robotics* 8(81)

Nitin J Sanket, Chahat Deep Singh, Cornelia Fermüller, Yiannis Aloimonos

Adds distribution-free aleatoric uncertainty to any perception network with a loss-function change small enough to run onboard a lightweight robot.

`Perception` `Aerial Robotics` — Learning-Based Perception, Supervised Learning

[Paper](https://doi.org/10.1126/scirobotics.add5139) · [Code](https://github.com/prgumd/ajna)

#### [Brain-inspired multimodal hybrid neural network for robot place recognition](https://doi.org/10.1126/scirobotics.abm6996)

`2023-05-10` · Research Article · *Science Robotics* 8(78)

Fangwen Yu, Yujie Wu, Yujie Wu, Songchen Ma, Mingkun Xu, Hongyi Li, Huanyu Qu, Chenhang Song, Taoyi Wang, Rong Zhao, Luping Shi

Fuses conventional and event sensors in a hybrid neural network modeled on place, head-direction and time cells for robust place recognition.

`Perception` `Navigation` — Neuromorphic Learning, Representation Learning

[Paper](https://doi.org/10.1126/scirobotics.abm6996) · [Code](https://github.com/cognav/NeuroGPR)

#### [Neuromorphic computing hardware and neural architectures for robotics](https://doi.org/10.1126/scirobotics.abl8419)

`2022-06-29` · Review / Perspective · *Science Robotics* 7(67)

Yulia Sandamirskaya, Mohsen Kaboli, Jorg Conradt, Tansu Celikel

Viewpoint on how neuroscience findings could reshape on-chip neural computation for robots.

`Perception` `Control` — Neuromorphic Learning

[Paper](https://doi.org/10.1126/scirobotics.abl8419)

#### [Neuromorphic computing chip with spatiotemporal elasticity for multi-intelligent-tasking robots](https://doi.org/10.1126/scirobotics.abk2948)

`2022-06-15` · Research Article · *Science Robotics* 7(67)

Songchen Ma, Jing Pei, Weihao Zhang, Guanrui Wang, Dahu Feng, Fangwen Yu, Chenhang Song, Huanyu Qu, Cheng Ma, Mingsheng Lu, Faqiang Liu, Wenhao Zhou, Yujie Wu, Yujie Wu, Yihan Lin, Hongyi Li, Taoyi Wang, Jiuru Song, Xue Liu, Guoqi Li, Rong Zhao, Luping Shi

A neuromorphic chip that runs several cross-paradigm neural models concurrently, allocating compute and execution time per robotic task.

`Perception` `Control` — Neuromorphic Learning

[Paper](https://doi.org/10.1126/scirobotics.abk2948)

#### [A biomimetic elastomeric robot skin using electrical impedance and acoustic tomography for tactile sensing](https://doi.org/10.1126/scirobotics.abm7187)

`2022-06-08` · Research Article · *Science Robotics* 7(67)

K Park, H Yuk, M Yang, J Cho, H Lee, J Kim

Reconstructs multimodal touch from electrical impedance and acoustic tomography through deep networks on a repairable hydrogel-elastomer skin.

`Perception` `Human–Robot Interaction` `Soft Robotics` — Learning-Based Perception, Supervised Learning

[Paper](https://doi.org/10.1126/scirobotics.abm7187)

#### [Haptic perception using optoelectronic robotic flesh for embodied artificially intelligent agents](https://doi.org/10.1126/scirobotics.abi6745)

`2022-06-08` · Research Article · *Science Robotics* 7(67)

Jose A Barreiros, Artemis Xu, Sofya Pugach, Narahari Iyengar, Graeme Troxell, Alexander Cornwell, Samantha Hong, Bart Selman, Robert F Shepherd

Encodes force and temperature into light inside a stretchable elastomer, then infers haptic maps from the camera image with machine learning.

`Perception` `Soft Robotics` — Learning-Based Perception, Supervised Learning

[Paper](https://doi.org/10.1126/scirobotics.abi6745)

#### [Neuro-inspired electronic skin for robots](https://doi.org/10.1126/scirobotics.abl7344)

`2022-06-08` · Review / Perspective · *Science Robotics* 7(67)

Fengyuan Liu, Sweety Deswal, Adamos Christou, Yulia Sandamirskaya, Mohsen Kaboli, Ravinder Dahiya

Reviews hardware building blocks for electronic skin that senses and processes touch the way peripheral nerves do.

`Perception` `Robot Design` — Neuromorphic Learning

[Paper](https://doi.org/10.1126/scirobotics.abl7344)

#### [Printed synaptic transistor-based electronic skin for robots to feel and learn](https://doi.org/10.1126/scirobotics.abl7286)

`2022-06-01` · Research Article · *Science Robotics* 7(67)

Fengyuan Liu, Sweety Deswal, Adamos Christou, Mahdieh Shojaei Baghini, Radu Chirila, Dhayalan Shakthivel, Moupali Chakraborty, Ravinder Dahiya

Prints a uniform synaptic transistor array whose short- and long-term plasticity supports in-hardware learning on robot skin.

`Perception` `Robot Design` — Neuromorphic Learning

[Paper](https://doi.org/10.1126/scirobotics.abl7286) · [Open version](https://zenodo.org/records/7032526)

#### [Guiding the design of superresolution tactile skins with taxel value isolines theory](https://doi.org/10.1126/scirobotics.abm0608)

`2022-02-23` · Research Article · *Science Robotics* 7(63)

Huanbo Sun, Georg Martius

Predicts achievable tactile superresolution before a sensor is built, pairing an isoline theory with learned contact inference.

`Perception` `Manipulation` — Supervised Learning, Learning-Based Perception

[Paper](https://doi.org/10.1126/scirobotics.abm0608)

#### [Coherent, super-resolved radar beamforming using self-supervised learning](https://doi.org/10.1126/scirobotics.abk0431)

`2021-12-15` · Research Article · *Science Robotics* 6(61)

Itai Orr, Moshik Cohen, Harel Damari, Meir Halachmi, Mark Raifel, Zeev Zalevsky

Quadruples automotive radar angular resolution by training a network self-supervised on complex range-Doppler data, with no extra antennas.

`Perception` `Navigation` — Self-Supervised Learning

[Paper](https://doi.org/10.1126/scirobotics.abk0431) · [Open version](https://arxiv.org/abs/2106.13085)

#### [Soft magnetic skin for super-resolution tactile sensing with force self-decoupling](https://doi.org/10.1126/scirobotics.abc8801)

`2021-02-24` · Research Article · *Science Robotics* 6(51)

Youcan Yan, Zhe Hu, Zhengbao Yang, Wenzhen Yuan, Chaoyang Song, Jia Pan, Yajing Shen

Decouples normal and shear force in a single magnetic film unit and uses deep learning for a sixtyfold gain in contact-position accuracy.

`Perception` `Manipulation` — Supervised Learning, Learning-Based Perception

[Paper](https://doi.org/10.1126/scirobotics.abc8801)

#### [Heterogeneous sensing in a multifunctional soft sensor for human-robot interfaces](https://doi.org/10.1126/scirobotics.abc6878)

`2020-12-16` · Research Article · *Science Robotics* 5(49)

Taekyoung Kim, Sudong Lee, Taehwa Hong, Gyowook Shin, Taehwan Kim, Yong-Lae Park

Separates stretch, bend and compression in one compact soft sensor by training a neural network on optical, microfluidic and piezoresistive channels.

`Perception` `Human–Robot Interaction` `Soft Robotics` — Supervised Learning

[Paper](https://doi.org/10.1126/scirobotics.abc6878)

#### [Skin-inspired quadruple tactile sensors integrated on a robot hand enable object recognition](https://doi.org/10.1126/scirobotics.abc8134)

`2020-12-16` · Research Article · *Science Robotics* 5(49)

Guozhen Li, Shiqiang Liu, Liangqi Wang, Rong Zhu

Combines pressure, thermal-conductivity and temperature channels with machine learning so a gripper identifies object material and sorts waste at 94 percent accuracy.

`Perception` `Manipulation` — Supervised Learning

[Paper](https://doi.org/10.1126/scirobotics.abc8134)

</details>

### Robot Design

<details>
<summary><b>4 papers</b> — 2025–2022</summary>

#### [Bioinspired design of a tissue-engineered ray with machine learning](https://doi.org/10.1126/scirobotics.adr6472)

`2025-02-12` · Research Article · *Science Robotics* 10(99)

John F Zimmerman, Daniel J Drennan, James Ikeda, Qianru Jin, Herdeline Ann M Ardoña, Sean L Kim, Ryoma Ishii, Kevin Kit Parker

Uses machine-learning-directed geometry optimization to improve a tissue-engineered swimming robot.

`Robot Design` `Soft Robotics` — Learning-Based Optimization

[Paper](https://doi.org/10.1126/scirobotics.adr6472) · [Open version](https://diseasebiophysics.seas.harvard.edu/sites/g/files/omnuum8351/files/2025-11/Bioinspired%20design%20of%20a%20tissue-engineered%20ray%20with%20machine%20learning.pdf)

#### [Machine learning-driven self-discovery of the robot body morphology](https://doi.org/10.1126/scirobotics.adh0972)

`2023-12-13` · Research Article · *Science Robotics* 8(85)

Fernando Díaz Ledezma, Sami Haddadin

Infers a robot's own kinematic structure from unlabeled proprioceptive signals using mutual-information graphs.

`Robot Design` `Perception` `Control` — Self-Supervised Learning, Representation Learning

[Paper](https://doi.org/10.1126/scirobotics.adh0972)

#### [Mechanical neural networks: Architected materials that learn behaviors](https://doi.org/10.1126/scirobotics.abq7278)

`2022-10-19` · Research Article · *Science Robotics* 7(71)

Ryan H Lee, Erwin A B Mulder, Jonathan B Hopkins

Builds lattices whose beam stiffnesses are tuned like network weights, letting the material itself learn several mechanical behaviors at once.

`Robot Design` `Control` — Learning-Based Optimization

[Paper](https://doi.org/10.1126/scirobotics.abq7278)

#### [Fully body visual self-modeling of robot morphologies](https://doi.org/10.1126/scirobotics.abn1944)

`2022-07-13` · Research Article · *Science Robotics* 7(68)

Boyuan Chen, Robert Kwiatkowski, Carl Vondrick, Hod Lipson

Learns a query-driven occupancy self-model from interaction data, covering the robot's whole body rather than only end-effector kinematics.

`Robot Design` `Perception` `Manipulation` — Self-Supervised Learning, Model-Based Learning

[Paper](https://doi.org/10.1126/scirobotics.abn1944) · [Project](https://robot-morphology.cs.columbia.edu/) · [Code](https://github.com/BoyuanChen/visual-selfmodeling)

</details>

### Soft Robotics

<details>
<summary><b>3 papers</b> — 2025–2020</summary>

#### [Metamaterial robotics](https://doi.org/10.1126/scirobotics.adx1519)

`2025-11-19` · Review / Perspective · *Science Robotics* 10(108)

Xiaoyang Zheng, Yuhao Jiang, Mustafa Mete, Jingjing Li, Ikumu Watanabe, Takayuki Yamada, Jamie Paik

Reviews metamaterial robotics, including AI-supported design, modeling, and adaptive control.

`Soft Robotics` `Robot Design` — Learning-Based Optimization

[Paper](https://doi.org/10.1126/scirobotics.adx1519)

#### [Bridging hard and soft: Mechanical metamaterials enable rigid torque transmission in soft robots](https://doi.org/10.1126/scirobotics.ads0548)

`2025-03-19` · Research Article · *Science Robotics* 10(100)

Molly Carton, Jakub F Kowalewski, Jiani Guo, Jacob F Alpert, Aman Garg, Daniel Revier, Jeffrey Ian Lipton

Pairs torque-transmitting metamaterials with learned inverse kinematics for forceful soft-arm manipulation.

`Soft Robotics` `Manipulation` `Control` — Supervised Learning

[Paper](https://doi.org/10.1126/scirobotics.ads0548)

#### [Electronic skins and machine learning for intelligent soft robots](https://doi.org/10.1126/scirobotics.aaz9239)

`2020-04-22` · Review / Perspective · *Science Robotics* 5(41)

Benjamin Shih, Dylan Shah, Jinxing Li, Thomas G Thuruthel, Yong-Lae Park, Fumiya Iida, Zhenan Bao, Rebecca Kramer-Bottiglio, Michael T Tolley

Reviews how stretchable sensor arrays and machine learning together give soft robots usable touch and proprioception.

`Soft Robotics` `Perception` — Supervised Learning, Learning-Based Perception

[Paper](https://doi.org/10.1126/scirobotics.aaz9239)

</details>

### Surgical Robotics

<details>
<summary><b>7 papers</b> — 2025–2025</summary>

#### [Deep learning-based autonomous retinal vein cannulation in ex vivo porcine eyes](https://doi.org/10.1126/scirobotics.adw2969)

`2025-12-17` · Research Article · *Science Robotics* 10(109)

Peiyao Zhang, Peter Gehlbach, Russell H Taylor, Iulian Iordachita, Marin Kobilarov

Uses learned motion and event predictors to automate retinal vein cannulation in ex vivo porcine eyes.

`Surgical Robotics` `Perception` `Control` — Supervised Learning

[Paper](https://doi.org/10.1126/scirobotics.adw2969)

#### [AI search, physician removal: Bronchoscopy robot bridges collaboration in foreign body aspiration](https://doi.org/10.1126/scirobotics.adt5338)

`2025-07-30` · Research Article · *Science Robotics* 10(104)

Lilu Liu, Jingyu Zhang, Fei Wang, Jiyu Yu, Yuxiang Cui, Zhibin Li, Jian Hu, Rong Xiong, Haojian Lu, Yue Wang

Combines learned perception and structured exploration for autonomous bronchial foreign-body search with remote physician removal.

`Surgical Robotics` `Navigation` `Perception` — Learning-Based Perception, Hybrid Methods

[Paper](https://doi.org/10.1126/scirobotics.adt5338)

#### [The grand challenges of learning medical robot autonomy](https://doi.org/10.1126/scirobotics.adz8279)

`2025-07-30` · Review / Perspective · *Science Robotics* 10(104)

Pierre E Dupont, Alperen Degirmenci

Identifies barriers to learning the perception, decision-making, and action needed for medical robot autonomy.

`Surgical Robotics` — Foundation Models, Reinforcement Learning

[Paper](https://doi.org/10.1126/scirobotics.adz8279) · [Open version](https://pmc.ncbi.nlm.nih.gov/articles/PMC12624563/)

#### [Will your next surgeon be a robot? Autonomy and AI in robotic surgery](https://doi.org/10.1126/scirobotics.adt0187)

`2025-07-23` · Review / Perspective · *Science Robotics* 10(104)

Samuel Schmidgall, Justin D Opfermann, Ji Woong Kim, Axel Krieger

Reviews the transition from surgeon-operated systems toward AI-enabled autonomous surgical robots.

`Surgical Robotics` — Foundation Models

[Paper](https://doi.org/10.1126/scirobotics.adt0187) · [Open version](https://pmc.ncbi.nlm.nih.gov/articles/PMC12836364/)

#### [Surgical embodied intelligence for generalized task autonomy in laparoscopic robot-assisted surgery](https://doi.org/10.1126/scirobotics.adt3093)

`2025-07-16` · Research Article · *Science Robotics* 10(104)

Yonghao Long, Anran Lin, Derek Hang Chun Kwok, Lin Zhang, Zhenya Yang, Kejian Shi, Lei Song, Jiawei Fu, Hongbin Lin, Wang Wei, Kai Chen, Xiangyu Chu, Yang Hu, Hon Chi Yip, Philip Wai Yan Chiu, Peter Kazanzides, Russell H Taylor, Yunhui Liu, Zihan Chen, Zerui Wang, Samuel Kwok Wai Au, Qi Dou

Provides a surgical simulation and learning pipeline that transfers trained task policies to real surgical robots.

`Surgical Robotics` `Manipulation` `Control` — Reinforcement Learning, Foundation Models, Hybrid Methods

[Paper](https://doi.org/10.1126/scirobotics.adt3093)

#### 🌟 [SRT-H: A hierarchical framework for autonomous surgery via language-conditioned imitation learning](https://doi.org/10.1126/scirobotics.adt5254)

`2025-07-09` · Research Article · *Science Robotics* 10(104)

Ji Woong Brian Kim, Juo-Tung Chen, Pascal Hansen, Lucy Xiaoyang Shi, Antony Goldenberg, Samuel Schmidgall, Paul Maria Scheikl, Anton Deguet, Brandon M White, De Ru Tsai, Richard Jaepyeong Cha, Jeffrey Jopling, Chelsea Finn, Axel Krieger

Pairs a language-level planner with learned low-level trajectories to execute and recover during surgical steps.

`Surgical Robotics` `Dexterous Manipulation` — Behavior Cloning, Foundation Models

[Paper](https://doi.org/10.1126/scirobotics.adt5254) · [Project](https://h-surgical-robot-transformer.github.io/) · [Open version](https://arxiv.org/abs/2505.10251) · [**🌟 Cover evidence**](https://bsky.app/profile/science.org/post/3ltxbwuy3j62o)

#### [The robot will see you now: Foundation models are the path forward for autonomous robotic surgery](https://doi.org/10.1126/scirobotics.adt0684)

`2025-07-09` · Review / Perspective · *Science Robotics* 10(104)

Michael Yip

Examines the data requirements and prospects of foundation models for autonomous robotic surgery.

`Surgical Robotics` — Foundation Models

[Paper](https://doi.org/10.1126/scirobotics.adt0684)

</details>

### Wearable Robotics

<details>
<summary><b>7 papers</b> — 2026–2023</summary>

#### [Ultra-wideband radar to measure in vivo muscle forces](https://doi.org/10.1126/scirobotics.aed5865)

`2026-07-29` · Research Article · *Science Robotics* 11(116)

Christopher S Bird, Antonio P L Bo, Wei Lu, Taylor J M Dick

Combines radar measurements with learned estimators of muscle force for assistive sensing applications.

`Wearable Robotics` `Perception` — Supervised Learning

[Paper](https://doi.org/10.1126/scirobotics.aed5865)

#### [Deep domain adaptation eliminates costly data required for task-agnostic wearable robotic control](https://doi.org/10.1126/scirobotics.ads8652)

`2025-11-19` · Research Article · *Science Robotics* 10(108)

Keaton L Scherpereel, Matthew C Gombolay, Max K Shepherd, Carlos A Carrasquillo, Omer T Inan, Aaron J Young

Transfers accessible movement data into device-specific joint-moment estimators for task-agnostic exoskeleton assistance.

`Wearable Robotics` `Control` — Domain Adaptation, Supervised Learning

[Paper](https://doi.org/10.1126/scirobotics.ads8652)

#### [AI in therapeutic and assistive exoskeletons and exosuits: Influences on performance and autonomy](https://doi.org/10.1126/scirobotics.adt7329)

`2025-07-30` · Review / Perspective · *Science Robotics* 10(104)

Herman van der Kooij, Edwin H F van Asseldonk, Massimo Sartori, Chiara Basla, Adrian Esser, Robert Riener

Reviews how machine learning supports intention recognition, assessment, and autonomous wearable assistance.

`Wearable Robotics` `Control` — Reinforcement Learning, Supervised Learning

[Paper](https://doi.org/10.1126/scirobotics.adt7329)

#### [The case against machine vision for the control of wearable robotics: Challenges for commercial adoption](https://doi.org/10.1126/scirobotics.adp5005)

`2025-01-29` · Review / Perspective · *Science Robotics* 10(98)

Keya Ghonasgi, Kyle J Kaveny, David Langlois, Leifur D Sigurðarson, Tim A Swift, Jason Wheeler, Aaron J Young

Discusses practical barriers to deploying vision-based control in commercial wearable robots.

`Wearable Robotics` `Perception` — Learning-Based Perception

[Paper](https://doi.org/10.1126/scirobotics.adp5005)

#### [Wearable robots for the real world need vision](https://doi.org/10.1126/scirobotics.adj8812)

`2024-05-22` · Review / Perspective · *Science Robotics* 9(90)

Letizia Gionfrida, Daekyum Kim, Davide Scaramuzza, Dario Farina, Robert D Howe

Discusses how visual information can support wearable robots in real-world environments.

`Wearable Robotics` `Perception` — Learning-Based Perception

[Paper](https://doi.org/10.1126/scirobotics.adj8812)

#### [Estimating human joint moments unifies exoskeleton control, reducing user effort](https://doi.org/10.1126/scirobotics.adi8852)

`2024-03-20` · Research Article · *Science Robotics* 9(88)

Dean D Molinaro, Inseung Kang, Aaron J Young

Uses learned joint-moment estimates to adapt exoskeleton assistance across many movement conditions.

`Wearable Robotics` `Control` — Supervised Learning

[Paper](https://doi.org/10.1126/scirobotics.adi8852)

#### [User preference optimization for control of ankle exoskeletons using sample efficient active learning](https://doi.org/10.1126/scirobotics.adg3705)

`2023-10-18` · Research Article · *Science Robotics* 8(83)

Ung Hee Lee, Varun S Shetty, Patrick W Franks, Jie Tan, Georgios Evangelopoulos, Sehoon Ha, Elliott J Rouse

Ranks candidate exoskeleton controller settings with a neural network pretrained on preference data, tuning four parameters to what wearers actually prefer.

`Wearable Robotics` `Human–Robot Interaction` `Control` — Human-in-the-Loop Learning, Learning-Based Optimization, Supervised Learning

[Paper](https://doi.org/10.1126/scirobotics.adg3705)

</details>

## Maintain this index

1. Edit `papers.json`, preserving the DOI and source evidence.
2. Run `npm run generate` to regenerate this README.
3. Run `npm test`, `npm run typecheck`, and `npm run build`.
4. Commit the data and generated README, then publish a new Sites version. GitHub pushes do not automatically deploy the website.

The website imports the same data directly. No database, login, automated scraper, or scheduled update is required. Run `npm ci` and `npm run dev` for local development.

---

<div align="center">
<sub>Independent research index maintained by <a href="https://yanjieze.com">Yanjie Ze</a>. Not affiliated with AAAS.<br>
Linked papers, projects, and code retain their respective rights and licenses. No paper PDFs are redistributed here.</sub>
</div>

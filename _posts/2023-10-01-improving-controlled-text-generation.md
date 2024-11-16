---
layout: post
title: "Improving Controlled Text Generation via Neuron-level Control Codes"
date: 2023-10-01
---

---

##Abstract:

Task-specific text generation is a highly desired feature for language models, as it allows the production of text completions that are either broadly or subtly aligned with specific objectives. By design, many neural networks switch between multiple behaviors during inference - for example, when selecting a target language in many-to-many translation systems. Such task-specific information is usually presented to the network as an augmentation of its input data. In this work, we explore an alternate approach: transmitting task information directly to each neuron in the network. This removes the need for task information to propagate forward during training, a particularly critical advantage in low-resource settings where maximum benefit must be extracted from each training example. To test this approach, we train over 160 language models from scratch with a large variety of architectures and configurations. Our results show that models with neuron-level augmentation can experience increased learning speed, improved final generation accuracy, and even novel learning capabilities, with larger benefits as network depth increases.

[PDF](/_pdfs/Improving_Controlled_Text_Generation_via_Neuron_level_Control_Codes.pdf)
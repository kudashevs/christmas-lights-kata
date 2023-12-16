import {LightsGrid} from './LightsGrid';

describe('LightsGrid acceptance part 1', () => {
  it('can count the first part given instructions', () => {
    const grid = new LightsGrid();
    grid.turnOn(887, 9, 959, 629);
    grid.turnOn(454, 398, 844, 448);
    grid.turnOff(539, 243, 559, 965);
    grid.turnOff(370, 819, 676, 868);
    grid.turnOff(145, 40, 370, 997);
    grid.turnOff(301, 3, 808, 453);
    grid.turnOn(351, 678, 951, 908);
    grid.toggle(720, 196, 897, 994);
    grid.toggle(831, 394, 904, 860);

    expect(grid.countLit()).toBe(230022);
  });

  it('can count the Advent of Code example', () => {
    const grid = new LightsGrid();
    grid.turnOn(887, 9, 959, 629);
    grid.turnOn(454, 398, 844, 448);
    grid.turnOff(539, 243, 559, 965);
    grid.turnOff(370, 819, 676, 868);
    grid.turnOff(145, 40, 370, 997);
    grid.turnOff(301, 3, 808, 453);
    grid.turnOn(351, 678, 951, 908);
    grid.toggle(720, 196, 897, 994);
    grid.toggle(831, 394, 904, 860);
    grid.toggle(753, 664, 970, 926);
    grid.turnOff(150, 300, 213, 740);
    grid.turnOn(141, 242, 932, 871);
    grid.toggle(294, 259, 474, 326);
    grid.toggle(678, 333, 752, 957);
    grid.toggle(393, 804, 510, 976);
    grid.turnOff(6, 964, 411, 976);
    grid.turnOff(33, 572, 978, 590);
    grid.turnOn(579, 693, 650, 978);
    grid.turnOn(150, 20, 652, 719);
    grid.turnOff(782, 143, 808, 802);
    grid.turnOff(240, 377, 761, 468);
    grid.turnOff(899, 828, 958, 967);
    grid.turnOn(613, 565, 952, 659);
    grid.turnOn(295, 36, 964, 978);
    grid.toggle(846, 296, 969, 528);
    grid.turnOff(211, 254, 529, 491);
    grid.turnOff(231, 594, 406, 794);
    grid.turnOff(169, 791, 758, 942);
    grid.turnOn(955, 440, 980, 477);
    grid.toggle(944, 498, 995, 928);
    grid.turnOn(519, 391, 605, 718);
    grid.toggle(521, 303, 617, 366);
    grid.turnOff(524, 349, 694, 791);
    grid.toggle(391, 87, 499, 792);
    grid.toggle(562, 527, 668, 935);
    grid.turnOff(68, 358, 857, 453);
    grid.toggle(815, 811, 889, 828);
    grid.turnOff(666, 61, 768, 87);
    grid.turnOn(27, 501, 921, 952);
    grid.turnOn(953, 102, 983, 471);
    grid.turnOn(277, 552, 451, 723);
    grid.turnOff(64, 253, 655, 960);
    grid.turnOn(47, 485, 734, 977);
    grid.turnOff(59, 119, 699, 734);
    grid.toggle(407, 898, 493, 955);
    grid.toggle(912, 966, 949, 991);
    grid.turnOn(479, 990, 895, 990);
    grid.toggle(390, 589, 869, 766);
    grid.toggle(593, 903, 926, 943);
    grid.toggle(358, 439, 870, 528);
    grid.turnOff(649, 410, 652, 875);
    grid.turnOn(629, 834, 712, 895);
    grid.toggle(254, 555, 770, 901);
    grid.toggle(641, 832, 947, 850);
    grid.turnOn(268, 448, 743, 777);
    grid.turnOff(512, 123, 625, 874);
    grid.turnOff(498, 262, 930, 811);
    grid.turnOff(835, 158, 886, 242);
    grid.toggle(546, 310, 607, 773);
    grid.turnOn(501, 505, 896, 909);
    grid.turnOff(666, 796, 817, 924);
    grid.toggle(987, 789, 993, 809);
    grid.toggle(745, 8, 860, 693);
    grid.toggle(181, 983, 731, 988);
    grid.turnOn(826, 174, 924, 883);
    grid.turnOn(239, 228, 843, 993);
    grid.turnOn(205, 613, 891, 667);
    grid.toggle(867, 873, 984, 896);
    grid.turnOn(628, 251, 677, 681);
    grid.toggle(276, 956, 631, 964);
    grid.turnOn(78, 358, 974, 713);
    grid.turnOn(521, 360, 773, 597);
    grid.turnOff(963, 52, 979, 502);
    grid.turnOn(117, 151, 934, 622);
    grid.toggle(237, 91, 528, 164);
    grid.turnOn(944, 269, 975, 453);
    grid.toggle(979, 460, 988, 964);
    grid.turnOff(440, 254, 681, 507);
    grid.toggle(347, 100, 896, 785);
    grid.turnOff(329, 592, 369, 985);
    grid.turnOn(931, 960, 979, 985);
    grid.toggle(703, 3, 776, 36);
    grid.toggle(798, 120, 908, 550);
    grid.turnOff(186, 605, 914, 709);
    grid.turnOff(921, 725, 979, 956);
    grid.toggle(167, 34, 735, 249);
    grid.turnOn(726, 781, 987, 936);
    grid.toggle(720, 336, 847, 756);
    grid.turnOn(171, 630, 656, 769);
    grid.turnOff(417, 276, 751, 500);
    grid.toggle(559, 485, 584, 534);
    grid.turnOn(568, 629, 690, 873);
    grid.toggle(248, 712, 277, 988);
    grid.toggle(345, 594, 812, 723);
    grid.turnOff(800, 108, 834, 618);
    grid.turnOff(967, 439, 986, 869);
    grid.turnOn(842, 209, 955, 529);
    grid.turnOn(132, 653, 357, 696);
    grid.turnOn(817, 38, 973, 662);
    grid.turnOff(569, 816, 721, 861);
    grid.turnOn(568, 429, 945, 724);
    grid.turnOn(77, 458, 844, 685);
    grid.turnOff(138, 78, 498, 851);
    grid.turnOn(136, 21, 252, 986);
    grid.turnOff(2, 460, 863, 472);
    grid.turnOn(172, 81, 839, 332);
    grid.turnOn(123, 216, 703, 384);
    grid.turnOff(879, 644, 944, 887);
    grid.toggle(227, 491, 504, 793);
    grid.toggle(580, 418, 741, 479);
    grid.toggle(65, 276, 414, 299);
    grid.toggle(482, 486, 838, 931);
    grid.turnOff(557, 768, 950, 927);
    grid.turnOff(615, 617, 955, 864);
    grid.turnOn(859, 886, 923, 919);
    grid.turnOn(391, 330, 499, 971);
    grid.toggle(521, 835, 613, 847);
    grid.turnOn(822, 787, 989, 847);
    grid.turnOn(192, 142, 357, 846);
    grid.turnOff(564, 945, 985, 945);
    grid.turnOff(479, 361, 703, 799);
    grid.toggle(56, 481, 489, 978);
    grid.turnOff(632, 991, 774, 998);
    grid.toggle(723, 526, 945, 792);
    grid.turnOn(344, 149, 441, 640);
    grid.toggle(568, 927, 624, 952);
    grid.turnOn(621, 784, 970, 788);
    grid.toggle(665, 783, 795, 981);
    grid.toggle(386, 610, 817, 730);
    grid.toggle(440, 399, 734, 417);
    grid.toggle(939, 201, 978, 803);
    grid.turnOff(395, 883, 554, 929);
    grid.turnOn(340, 309, 637, 561);
    grid.turnOff(875, 147, 946, 481);
    grid.turnOff(945, 837, 957, 922);
    grid.turnOff(429, 982, 691, 991);
    grid.toggle(227, 137, 439, 822);
    grid.toggle(4, 848, 7, 932);
    grid.turnOff(545, 146, 756, 943);
    grid.turnOn(763, 863, 937, 994);
    grid.turnOn(232, 94, 404, 502);
    grid.turnOff(742, 254, 930, 512);
    grid.turnOn(91, 931, 101, 942);
    grid.toggle(585, 106, 651, 425);
    grid.turnOn(506, 700, 567, 960);
    grid.turnOff(548, 44, 718, 352);
    grid.turnOff(194, 827, 673, 859);
    grid.turnOff(6, 645, 509, 764);
    grid.turnOff(13, 230, 821, 361);
    grid.turnOn(734, 629, 919, 631);
    grid.toggle(788, 552, 957, 972);
    grid.toggle(244, 747, 849, 773);
    grid.turnOff(162, 553, 276, 887);
    grid.turnOff(569, 577, 587, 604);
    grid.turnOff(799, 482, 854, 956);
    grid.turnOn(744, 535, 909, 802);
    grid.toggle(330, 641, 396, 986);
    grid.turnOff(927, 458, 966, 564);
    grid.toggle(984, 486, 986, 913);
    grid.toggle(519, 682, 632, 708);
    grid.turnOn(984, 977, 989, 986);
    grid.toggle(766, 423, 934, 495);
    grid.turnOn(17, 509, 947, 718);
    grid.turnOn(413, 783, 631, 903);
    grid.turnOn(482, 370, 493, 688);
    grid.turnOn(433, 859, 628, 938);
    grid.turnOff(769, 549, 945, 810);
    grid.turnOn(178, 853, 539, 941);
    grid.turnOff(203, 251, 692, 433);
    grid.turnOff(525, 638, 955, 794);
    grid.turnOn(169, 70, 764, 939);
    grid.toggle(59, 352, 896, 404);
    grid.toggle(143, 245, 707, 320);
    grid.turnOff(103, 35, 160, 949);
    grid.toggle(496, 24, 669, 507);
    grid.turnOff(581, 847, 847, 903);
    grid.turnOn(689, 153, 733, 562);
    grid.turnOn(821, 487, 839, 699);
    grid.turnOn(837, 627, 978, 723);
    grid.toggle(96, 748, 973, 753);
    grid.toggle(99, 818, 609, 995);
    grid.turnOn(731, 193, 756, 509);
    grid.turnOff(622, 55, 813, 365);
    grid.turnOn(456, 490, 576, 548);
    grid.turnOn(48, 421, 163, 674);
    grid.turnOff(853, 861, 924, 964);
    grid.turnOff(59, 963, 556, 987);
    grid.turnOn(458, 710, 688, 847);
    grid.toggle(12, 484, 878, 562);
    grid.turnOff(241, 964, 799, 983);
    grid.turnOff(434, 299, 845, 772);
    grid.toggle(896, 725, 956, 847);
    grid.turnOn(740, 289, 784, 345);
    grid.turnOff(395, 840, 822, 845);
    grid.turnOn(955, 224, 996, 953);
    grid.turnOff(710, 186, 957, 722);
    grid.turnOff(485, 949, 869, 985);
    grid.turnOn(848, 209, 975, 376);
    grid.toggle(221, 241, 906, 384);
    grid.turnOn(588, 49, 927, 496);
    grid.turnOn(273, 332, 735, 725);
    grid.turnOn(505, 962, 895, 962);
    grid.toggle(820, 112, 923, 143);
    grid.turnOn(919, 792, 978, 982);
    grid.toggle(489, 461, 910, 737);
    grid.turnOff(202, 642, 638, 940);
    grid.turnOff(708, 953, 970, 960);
    grid.toggle(437, 291, 546, 381);
    grid.turnOn(409, 358, 837, 479);
    grid.turnOff(756, 279, 870, 943);
    grid.turnOff(154, 657, 375, 703);
    grid.turnOff(524, 622, 995, 779);
    grid.toggle(514, 221, 651, 850);
    grid.toggle(808, 464, 886, 646);
    grid.toggle(483, 537, 739, 840);
    grid.toggle(654, 769, 831, 825);
    grid.turnOff(326, 37, 631, 69);
    grid.turnOff(590, 570, 926, 656);
    grid.turnOff(881, 913, 911, 998);
    grid.turnOn(996, 102, 998, 616);
    grid.turnOff(677, 503, 828, 563);
    grid.turnOn(860, 251, 877, 441);
    grid.turnOff(964, 100, 982, 377);
    grid.toggle(888, 403, 961, 597);
    grid.turnOff(632, 240, 938, 968);
    grid.toggle(731, 176, 932, 413);
    grid.turnOn(5, 498, 203, 835);
    grid.turnOn(819, 352, 929, 855);
    grid.toggle(393, 813, 832, 816);
    grid.toggle(725, 689, 967, 888);
    grid.turnOn(968, 950, 969, 983);
    grid.turnOff(152, 628, 582, 896);
    grid.turnOff(165, 844, 459, 935);
    grid.turnOff(882, 741, 974, 786);
    grid.turnOff(283, 179, 731, 899);
    grid.toggle(197, 366, 682, 445);
    grid.turnOn(106, 309, 120, 813);
    grid.toggle(950, 387, 967, 782);
    grid.turnOff(274, 603, 383, 759);
    grid.turnOff(155, 665, 284, 787);
    grid.toggle(551, 871, 860, 962);
    grid.turnOff(30, 826, 598, 892);
    grid.toggle(76, 552, 977, 888);
    grid.turnOn(938, 180, 994, 997);
    grid.toggle(62, 381, 993, 656);
    grid.toggle(625, 861, 921, 941);
    grid.turnOn(685, 311, 872, 521);
    grid.turnOn(124, 934, 530, 962);
    grid.turnOn(606, 379, 961, 867);
    grid.turnOff(792, 735, 946, 783);
    grid.turnOn(417, 480, 860, 598);
    grid.toggle(178, 91, 481, 887);
    grid.turnOff(23, 935, 833, 962);
    grid.toggle(317, 14, 793, 425);
    grid.turnOn(986, 89, 999, 613);
    grid.turnOff(359, 201, 560, 554);
    grid.turnOff(729, 494, 942, 626);
    grid.turnOn(204, 143, 876, 610);
    grid.toggle(474, 97, 636, 542);
    grid.turnOff(902, 924, 976, 973);
    grid.turnOff(389, 442, 824, 638);
    grid.turnOff(622, 863, 798, 863);
    grid.turnOn(840, 622, 978, 920);
    grid.toggle(567, 374, 925, 439);
    grid.turnOff(643, 319, 935, 662);
    grid.toggle(185, 42, 294, 810);
    grid.turnOn(47, 124, 598, 880);
    grid.toggle(828, 303, 979, 770);
    grid.turnOff(174, 272, 280, 311);
    grid.turnOff(540, 50, 880, 212);
    grid.turnOn(141, 994, 221, 998);
    grid.turnOn(476, 695, 483, 901);
    grid.turnOn(960, 216, 972, 502);
    grid.toggle(752, 335, 957, 733);
    grid.turnOff(419, 713, 537, 998);
    grid.toggle(772, 846, 994, 888);
    grid.turnOn(881, 159, 902, 312);
    grid.turnOff(537, 651, 641, 816);
    grid.toggle(561, 947, 638, 965);
    grid.turnOn(368, 458, 437, 612);
    grid.turnOn(290, 149, 705, 919);
    grid.turnOn(711, 918, 974, 945);
    grid.toggle(916, 242, 926, 786);
    grid.toggle(522, 272, 773, 314);
    grid.turnOn(432, 897, 440, 954);
    grid.turnOff(132, 169, 775, 380);
    grid.toggle(52, 205, 693, 747);
    grid.toggle(926, 309, 976, 669);
    grid.turnOff(838, 342, 938, 444);
    grid.turnOn(144, 431, 260, 951);
    grid.toggle(780, 318, 975, 495);
    grid.turnOff(185, 412, 796, 541);
    grid.turnOn(879, 548, 892, 860);
    grid.turnOn(294, 132, 460, 338);
    grid.turnOn(823, 500, 899, 529);
    grid.turnOff(225, 603, 483, 920);
    grid.toggle(717, 493, 930, 875);
    grid.toggle(534, 948, 599, 968);
    grid.turnOn(522, 730, 968, 950);
    grid.turnOff(102, 229, 674, 529);

    expect(grid.countLit()).toBe(377891);
  });
});
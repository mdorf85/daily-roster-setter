// BN  |  Andrew Bogut GS - C      Injured   |  Sac    10:30pm | 102   - | 39%|



// active = game today

// 0) Click Swap Mode radio button (for insurance).
// 1) Find first active bench player.
    //   A. If Injured SKIP PLAYER
// 2) Do one of these:
    //   A. Put in Empty Matching Position Slot
    //   B. Put in Empty Utility Slot
    //   C. Replace player in Matching Position Slot ONLY IF startPlayer.status == empty
    //   D. Replace player in Utility Slot ONLY IF startPlayer.status == empty
    //   E. Replace player in Matching Position Slot ONLY IF benchPlayer.startPct > startPlayer.startPct
    //   F. Replace player in Utility Slot ONLY IF benchPlayer.startPct > startPlayer.startPct
// 3) Move on to next active bench player and repeat step 2 UNTIL all bench players looped through once.
// 4) Loop once more through active bench players comparing startPct to Utility starting players and replace as needed.
// 5) Click Save Changes.


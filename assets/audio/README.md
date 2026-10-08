# Portfolio Quest background music

`portfolio-quest.wav` is an original procedural composition created for the Rusdany Maestro Portfolio Quest website during this project. Its melody and arrangement were composed for this task; no soundtrack, recording, music sample, or third-party melody was imported.

- **Length:** 32 seconds, 16 bars, 120 BPM, C major.
- **Format:** 44.1 kHz, stereo, 16-bit PCM WAV.
- **Arrangement:** band-limited pulse lead and arpeggios, triangle bass and harmony, gently synthesized kick, snare, and hi-hat.
- **Loop:** the turnaround returns to the opening harmony; circular echo tails cross the loop boundary without an abrupt fade or cut.
- **Playback:** start only after the visitor's Start gesture. A browser volume of `0.22` is recommended for background listening, with an accessible mute toggle.
- **Rendering:** short attack and release envelopes prevent note-edge clicks, and the mastered peak is approximately 68% of full scale with no clipped samples.

The local authoring script is `D:/web/tmp/qa/create_chiptune.py`; it is not required by the website. It uses NumPy and Python's standard `wave` module and prints verification metadata after writing and reopening the WAV file.

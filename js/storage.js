var oldSongs = {};
var songs = {};

const song_mml = {
  '夜的鋼琴曲5': `
    MML@t97v13r1r1r1r1r1r1r2>f8r1r1r4.f4.g8r2f2f8r1r4.d+2r2c4.g8g8r4.<a+2>f8r1r1r4.c2r2c2f8r1r1r4.c2r2c2f8r1r1r2.g8r2f2f8r1r4.d+2r4.c8c4.g8g8r4.<a+2>f8r1r1r4>c8c2r4.c8c2r1r1r4.<c8c2r4.c8c2g8r4.g2r1r2<g4.>g8g8r4.f2f8r1r4.d+2r4.c8c4.g8g8r4.<a+2>f8r1r1r4.c2r2c2f8r1r1r4.c2r2c2f8r1r1r4.f4.g8r2f2f8r1r4.d+2r4.c8c4.g8g8r4.<a+2>f8r1r1r4>c8c2r4.c8c2r1r1r4.<c8c2r4.c8c2g8r2g2.&g8r1g4.g8g8r4.f2f8r1r4f8d+2r4.c8c4.g8g8r4.<a+2>f8r1r1r4c8c4.r1r1r1r1r1r2r8<d+1,
    t97v13r2c8d8d+8g8>c2<c8d8d+8g8>c2f8d+8d8d+8c1r2<c8d8d+8g8>c2<c8d8d+8g8>c2<a+8>d+8d8d+8c1r2<g8a+8>c8g8<a+4.a+8>f8g8f8d+8<a+2a+8>g8a+8g8<a+4.g8a+8g8a+8>f8<g2c8d8d+8g8d+4.>c8c8f8g8f8<f2a+8>d+8d8d+8c1r2<c8d8d+8g8d+2c8d8d+8g8d+2a+8>d+8d8d+8c1<d+2c8d8d+8g8d+2c8d8d+8g8d+2a+8>d+8d8d+8c1<d+2g8a+8>c8g8f4.c8f8g8f8d+8<a+2a+8>g8a+8g8<a+4.g8a+8g8a+8>f8<g2d+8f8g8d+8d+4.>c8c8f8g8f8<f2a+8>d+8d8d+8c1<d+2>d+8f8g8d+8d+2d+8f8g8d+8d+2d+8f8g8>d+8c1<<d+2d+8f8g8d+8d+2d+8f8g8d+8d+2a+8>f8g8a+8<a+2r8g4g8>f8<g8>g8<g8>c8d8d+8g8<d+4.>c8c8f8g8a+8<a+2a+8>g8a+8g8<a+4.g8a+8g8a+8>f8<g2d+8f8g8d+8d+4.>c8c8f8g8f8<f2a+8>d+8d8d+8c1<d+2c8d8d+8g8d+2c8d8d+8g8d+2a+8>d+8d8d+4c2.&c8<d+2c8d8d+8g8d+2c8d8d+8g8d+2a+8>d+8d8d+4c2.&c8<d+2g8a+8>c8g8<a+4.a+8>f8g8f8d+8<a+2a+8>g8a+8g8<a+4.g8a+8g8a+8>f8<g2d+8f8g8d+8d+4.>c8c8f8g8f8<f2a+8>d+8d8d+4c2.&c8<d+2>d+8f8g8d+8d+2d+8f8g8d+8d+2d+8f8g8>d+4c2.&c8<<d+2d+8f8g8d+8d+2d+8f8g8d+8d+2a+8>f8g8a+4<a+2.&a+8>f8<g8>g8<g8>c8d8d+8g8d+4.c8c8f8g8a+8<a+2a+8>g8a+8g8<a+4.g8a+8g8a+8a+8g2d+8f8g8d+8d+4.>c8c8f8g8f8<f2a+8>d+8d8d+4c2.&c8<d+2d+8f8g8d+8d+4.>g8g8f8g8f8d2f4.d+8c1d+4d4<a+8g8f8g8c1d4d+4f4g4c1,
    t97v13r1o2g+8>d+8a+8>c8d+2<<a+8>f8a+8>d8f2<c8g8>d8d+8g2<c8g8>d8d+8g2<<g+8>d+8a+8>c8d+2<<a+8>f8>c8d8f2<c8g8>d8d+8g2<c8g8>d8d+8g4d4<<g+8>d+8a+8>c8d+4<g+4<a+8>f8>c8d8f8d8<a+4<g8>d8g8a+8>d4<g4c8g8a+8>c8d+2<<g+8>d+8a+8>c8d+4<g+4<a+8>f8a+8>d8f2<c8g8>d8d+8g2<c8g8>d8d+8g2<<g+8>d+8a+8>c8d+4<g+4<a+8>f8a+8>d8f4d4<c8g8>d8d+8g8d8d+8g8<c8g8>d8d+4.<g4<g+8>d+8a+8>c8d+4<g+4<a+8>f8a+8>d8f4d4<c8g8>d8d+8g8d8d+8g8<c8g8>d8d+4.d4<<g+8>d+8g+8>c8d+4<g+4<a+8>f8>c8d8f8d8<a+4<g8>d8g8a+8>d4<g4c8g8a+8>c8d+4<g+4<g+8>d+8g+8>c8d+4<g+4<a+8>f8>c8d8f4d4<c8g8>d8d+8g8d8d+8g8<c8g8>d8d+8d+4d4<<g+8>d+8a+8>c8d+4<g+4<a+8>f8>c8d8f4d4<c8g8>d8d+8g8d8d+8g8<c8g8>d8d+8d+4d4<<g+8>d+8a+8>c8d+4<g+4<a+8>f8a+8>d8f4d4<d+8a+8>f8g8a+8<a+8>d+8<a+8d+8a+8>d+8<a+8d+8a+8>d+4<<g+8>d+8a+8>c8d+4<g+4<a+8>f8>c8d8f8d8<a+4<g8>d8g8a+8>d4<g4c8g8a+8>c8d+4<g+4<g+8>d+8a+8>c8d+4<g+4<a+8>f8a+8>d8f4d4<c8g8>d8d+8g4.d+8<c8g8>d8d+8d+4d4<<g+8>d+8a+8>c8d+4<g+4<a+8>f8a+8>d8f4d4<c8g8>d8d+8g8d8d+8g8<c8g8>d8d+8d+4d4<<g+8>d+8a+8>c8d+4<g+4<a+8>f8a+8>d8f4d4<c8g8>d8d+8g8d8d+8g8<c8g8>d8d+8d+4d4<<g+8>d+8a+8>c8d+4<g+4<a+8>f8a+8>d8f8d8<a+4<g8>d8g8a+8>d4<g4c8g8a+8>c8d+4<g+4<g+8>d+8a+8>c8d+4<g+4<a+8>f8a+8>d8f4d4<c8g8>d8d+8g8d8d+8g8<c8g8>d8d+8d+4d4<<g+8>d+8a+8>c8d+4<g+4<a+8>f8a+8>d8f4d4<c8g8>d8d+8g8d8d+8g8<c8g8>d8d+8d+4d4<<g+8>d+8a+8>c8d+4<g+4<a+8>f8a+8>d8f4d4<d+8a+8>f8g8a+8g8d+8g8<d+8a+8>d+8<a+8d+8a+8>d+4<<g+8>d+8a+8>c8d+4<g+4<a+8>f8>c8d8f8d8<a+8<g+8g8>d8g8a+8>d4<g4c8g8a+8>c8d+4<g+4<g+8>d+8g+8>c8d+4<g+4<a+8>f8a+8>d8f4d4<c8g8>d8d+8g8d8d+8g8<c8g8>d8d+2&d+8<<g+8>d+8g+8>c8d+4<g+4<a+8>f8a+8>d8f2<c8g8>d8d+8g8d8d+8g8<<a+8>g8a+8g2&g8<g+8>d+8a+8>c8d+8<d+8g+8>c8<<a+8>f8a+8f4f4.<c1,
    t97v13r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1<c1,
    t97v13r1r1r1r1r1r1r1r1r1r1r1r1r1r1>d2r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r2d2r1r1r1r1r1r1r1r1r1r1r2c4.r1r1r1r1r2r8d2r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r2d2r1r1r1r1r1r1r1r1r1r1r2>c4.r1r1r1r1r2r8<d2r1r1r1r1r1r1r1r1r2<g1
    t97v13r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1>c1
  `,
  '夜的鋼琴曲4': `
    MML@t105r1r1r2>a4.r1r1r1r1r1r1r1r2r8a4.r1r1r1r2.r8a+4b1r1r1r1r2a4.r1r1r1r1r2r8<a4>c+4r1r1r2>d4r1r1r1r1r4<b2.r1r1r1r1r1r1r1r1r1r1r1r2.f+4r4f+2.r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r2.f+4.r1r1r1r1r8g+2.<f+4r2.g4b1,
    t105r8>f+8>d8<f+8>d2r8<f+8>c+8<f+8>c+2r8<f+8b8>c+8<f+4.>c+8<f+2.<a4r8>b8>f+8<b8>e2r8<b8>e8<b8>d2r8<f+8>d8e8f+4.<b8>c+2r8<<f+8a8>c+8r8f+8>d8<f+8>d2r8<f+8>c+8<f+8>c+2r8<f+8b8>c+8<f+4.>e8f+2.<c+4r8b8>f+8<b8>e2r8<b8>e8<b8>d2r8<f+8>e8d8c+4<f+4f+1r2.<b4>f+8>d4<f+8>d4r8d32c+32<b32a32f+8>c+4<f+8>c+4r8d32.c+32<b32.f+8b4>c+8<f+4.>c+8<f+2.c+4b8>f+4<b8>e4r8e32.d32c+32.<b8>e4<b8>d2<f+4.>f+8e8d8c+8<b8>c+4.<<f+8f+4f+4>f+8>d4<f+8>d4r8d32c+32<b32a32f+8>c+4<f+8>c+4r8d32.c+32<b32.f+8b4>c+8<f+4>a4d8f+2&f+8<c+4b8>f+4<b8>e4r8e32.d32c+32.<b8>e4<b8>d2e8<b8g8e8>f+8e8<a+8>c+8<f+2.r8d16e16f+8e8f+8b4.r8d16e16f+8e8f+8>c+2&c+8r8<e16f+16g8>f+8e8f+8c+8<a8f+2.r8d16e16f+8e8f+8b8b4r8>d32.c+32<b32.a8f+8e8f+8d2e8f+8g8b8>e8f+8g8f+8c+4<a+4f+4e4c+4<a+4g4f+4>d+8b4d+8b4r8b32a+32g+32f+32d+8a+4d+8a+4r8b32a+32g+32f+32d+8g+4a+8d+4>c+4<d+2.<a+4>g+8>d+4<g+8>c+4r8c+32.<b32a+32.g+8>c+4<g+8b2>d+8d8d+8<a+8>c+8<b8a+8b8g+2.r8<b16>c+16d+8c+8d+8g+4.r8<b16>c+16d+8c+8d+8a+2&a+8r8c+16d+16e8>d+8c+8d+8<a+8f+8d+2.r8<b16>c+16d+8c+8d+8g+8g+4r8b32.a+32g+32.f+8d+8c+8d+8<b2>c+8d+8e8g+8>c+8d+8e8d+8<a+4g4d+4c+4<a+4g4d+4c+4>d+8b4d+8b4r8b32a+32g+32f+32d+8a+4d+8a+4r8b32a+32g+32f+32d+8g+4a+8d+4.>f+8d+2.<<a+4>g+8>d+4<g+8>c+4r8c+32.<b32a+32.g+8>c+4<g+8b2>e8d+8<b8g+8>c+4<a+4d+2.<d+4d+8>d+8c+8<b8a+4d+4g+1,
    t105r1r1r2o6d4.r1r1r1r1r1r1r1r2r8d4.r1r1r1r1r1r1r1r1r2r8d4.r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r2r8<b4r4a+2.r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r2.b4.,
    t105r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1o6d+2.,
    t105r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1o2g+1,
    t105o2b8>f+8>c+8d8f+4<b4<a8>f+8a8>c+8f+4c+4<<g8>d8b4<a8>e8>c+4<d8a8>c+8f+4<a4.e8b8>f+8g8b4e4<<b8>f+8>c+8d8f+4<b4c+8g8b8>e8g8e8c+4<<f+8>c+8f+8a+8>c+4<a+4<b8>f+8>c+8d8f+8d8<b4<a8>f+8a8>c+8f+8c+8<a4<g8>d8b4<a8>e8>c+4<d8a8>c+8f+8a8<a8>c+8<a8e8b8>f+8g8b8g8e4<<b8>f+8>c+8d8f+8d8<b4c+8g8b4<f+8>c+8a+4<b8>f+8>c+8d8f+8<f+8>c+8d8<<b8>f+8>c+8d8f+8<f+8b4<b8>f+8>c+8d8f+8d8<b4<a8>f+8a8>c+8f+8c+8<a4<g8>d8g4<a8>e8>c+4<d8a8>c+8f+8a8<a8>c+4<e8b8>f+8g8b8g8e4<<b8>f+8>c+8d8f+8d8<b4c+8g8b8>e8g8e8c+4<<f+8>c+8f+8a+8>c+8<a+8f+4<b8>f+8>c+8d8f+8d8<b4<a8>f+8a8>c+8f+8c+8<a4<g8>d8g4<a8>e8>c+4<d8a8>c+8f+8a8<a8>c+4<e8b8>f+8g8b8g8e4<<b8>f+8>c+8d8f+8d8<b4c+8g8b4<f+8>c+8a+4<b8>f+8>c+8d8f+8<f+8b4<g8>d8a8b8>d8<b8g4<f+8>c+8f+8a8>c+8<a8f+4<e8b8>g4<a8>e8>c+4<d8a8>c+8f+8a8<a8d4<g8>d8a8b8>d8<b8g4<f+8>c+8a4<b8>f+8>d8<f+8c+8g8b8>e8g8e8c+4<<f+8>c+8f+8a8>c+8<a8f+4<f+8>c+8f+8a+8>c+8<a+8f+4<g+8>d+8a+8b8>d+8<b8g+4<f+8>d+8f+8a+8>d+8<a+8f+4<e8b8>g+4<f+8>c+8a+4<b8>f+8a+8>d+8f+8<f+8a+8f+8c+8g+8>d+8e8g+8e8c+4<<g+8>d+8a+8b8>d+8<b8g+4<a+8>e8>c+4<<d+8a+8>g4<g+8>d+8a+8b8>d+8<d+8g+4<e8b8>f+8g+8b8g+8e4<d+8a+8>d+8f+8a+8f+8d+4<c+8g+8>e4<f+8>c+8a+4<b8>f+8a+8>d+8f+8<f+8<b4e8b8>f+8g+8b8g+8e4<d+8a+8>f+4<g+8>d+8b8d+8<a+8>e8g+8>c+8e8c+8<a+4<d+8a+8>d+8g8a+8g8d+4<d+8a+8>d+8g8a+8g8d+4<g+8>d+8a+8b8>d+8<b8g+4<f+8>d+8f+8a+8>d+8<a+8f+4<e8b8>g+8<b8f+8>c+8a+4<b8>f+8a+8>d+8f+8<f+8a+8f+8c+8g+8>d+8e8g+8e8c+4<<g+8>d+8b4<f8b8>f4<a+8>e8g+4<d+8a+8>g4<g+8>d+8a+8b8>d+8<d+8g+8d+8<a+8>e8g+4<d+8a+8>g4<<g+1
  `,
  '夜的鋼琴曲-億': `
    MML@t67>b4<b4>b4<b4>b4f+4d4<b4>b4<b4>b4<b4>f+4d4c+4<b8>f+8e4d4c+4d8c+8<b4>f+2<b8>f+8e4d4c+4d8c+8<b4>d2b8>f+8e4d4c+4d8c+8<b4>f+2<b8>f+8e4d4c+4<f+4b2r4b8f+8d4>d8c+8<a4f+8e8d4f+2b8f+8d4>d8c+8<b4a8f+8e4f+2<b8b8b4>d4c+4d8c+8<b4>f+2b8f+8d4b8f+8c+4d8c+8<b2r4b8>f+8<b4>d4c+4d8c+8<b4>f+2<b8>f+8<b4>d4c+4d8c+8<b4>d2b8>f+8e4d4c+4d8c+8<b4>f+2<b8>f+8e4d4c+4<a8f+8b8f+8e8f+8<b4>b8f+8d4>d8c+8<a4f+8e8d4f+2b8f+8d4d8>c+8<b4a8f+8e4f+2<b8b8b4a4a4>d8c+8<b4>f+2f+8>f+16<f+16>e4d4c+4<f+4b2.<b8>f+8<b4>b8f+8<b4>c+8d8c+4d8<b8b4b8>f+8<b4>f+8e8<b8>f+8e8d8<a8a8a2>f+8>f+8<f+8f+8>c+8d8c+4<a8f+8f+8>c+8<b8>c+8<f+4f+8a8<b4b4b8>e1&e1&e4.d4f+2b8f+8d4d8>c+8<b4a8f+8e1&e4<a4a4a8>c+8<b4>f+2f+8>f+8e4d4c+4<a4b2.r8f+8r4d4c+4<a4b2.>b8f+8d8<b8f+8b8f+4f+4b1,
    r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r2.r8>f+8e4r1r1r1r2.e4r1r2.e4r1r1r1r1r1r1r1r1>d8r1r2<f+8e4d4c+4r1r1r1r4e4r4e4f+8r1r8e4r4d8r4.e8f+8f+2r4>e8d8r2.<a8r1r8f+4r8f+8a8d8<b2.>b8f+8d4d8>c+8<a4f+8e1&e1&e4a8f+2<b8>f+8e1&e1&e1&e1&e4r1r1r4d4c+4,
    r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r2>b8r1r1r4.>d8r1r1r1r8d8r1r2.r8d8r1r2.r8<d4c+4d8,
    o2g8>d8b4<a8>e8>c+4<<b8>f+8>c+8<f+8>d2<<g8>d8b4<a8>e8>c+4<<b8>f+8>c+2.<<g8>d8b4<a8>e8>c+4<<b8>f+8>c+8d8f+2<<g8>d8b4<a8>e8>c+4<<b8>f+8>c+8<f+8b4f+4<g8>d8b4<a8>e8>c+4<<b8>f+8>c+8d8f+4c+4<<g8>d8b8d8<a8>e8a8e8<b8>f+8b8>c+8d8&d32.<f+8&f+32b8&b32.<g8>d8b4<a8>e8>c+4<<b8>f+8>c+8d8f+4c+4<<g8>d8b8d8<a8>e8>c+4<d8a8>e8<a8>f+8<a8>d4<<g8>d8b4<a8>e8>c+4<<b8>f+8>c+8d8f+4c+4<<g8>d8b4<a8>e8>c+4<<b8>f+8b8>c+8d8&d32.<f+8&f+32b8&b32.<g8>d8b4<a8>e8>c+4<<b8>f+8>c+8<f+8b8f+8<a4g8>d8b4<a8>e8>c+4<<b8>f+8>c+8d8f+4c+4<<g8>d8b4<a8>e8>c+4<<b8>f+8>c+8d8f+4c+4<<g8>d8b8d8<a8>e8a4<b8>f+8>c+8<f+8<a8>f+8a4<g8>d8b4<a8>e8>c+4<<b8>f+8>c+8d8f+8d8c+4<<g8>d8b4<a8>e8>c+4<d8a8>e8<a8>f+8<a8>d4<<g8>d8b4<a8>e8>c+4<<b8>f+8b8>c+8d8c+4.<<g8>d8b4<a8>e8a4<b8>f+8>c+8d8f+8<f+8>c+4<<g8>d8b4<a8>e8>c+4<<b8>f+8>c+8<f+8>d8<f+8>c+4<<g8>d8b8d8<a8>e8>c+4<d8a8>d8<a8>f+8<a8>d4<<g8>d8b8d8<a8>e8a4<b8>f+8<a4g+2g8>d8b4<a8>e8>c+4<<b8>f+8>c+8d8f+8<f+8<a4g8>d8b4<a8>e8>c+4<<b8>f+8>c+8d8f+4c+4<<g8>d8b4<a8>e8>c+4<d8a8>e8f+8a8f+8d4<<g8>d8b4<a8>e8>c+4<<b8>f+8>c+8d8f+4c+4<<g8>d8b4<a8>e8>c+4<<b8>f+8>c+8d8f+8<f+8>f+4<<g8>d8b4<a8>e8>c+4<<b8>f+8>c+8d8f+8<f+8b4<g8>d8g4<a8>e8a4<b1
  `,
  'windy hill': `
    MML@t74>a8.&a32r32b16.&b64r64a16b16a16b16a16f+16e8.&e32r32e16f+16a16.&a64r64e16.&e64r64e16f+16e16f+16e16d16<b8.&b32r32>f+16.&f+64r64a16.&a64r64b16.&b64r64a16b16f+16.&f+64r64>d16.&d64r64c+16.&c+64r64d16c+16<b16.&b64r64a16.&a64r64f+4&f+16.r32e16.&e64r64f+8.&f+32r32a8.&a32r32b16.&b64r64a16b16a16b16a16f+16e8.&e32r32e16f+16a16.&a64r64e16.&e64r64e16f+16e16f+16e16d16<b8.&b32r32>f+16.&f+64r64a16.&a64r64b16.&b64r64a16b16a16.&a64r64f+16.&f+64r64e16.&e64r64f+16e16d16.&d64r64<a16.&a64r64b2&b8.&b64r32.>f+16.&f+64r64a16.&a64r64b16.&b64r64a16b16a16b16a16f+16e8.&e32r32e16f+16a16.&a64r64e16.&e64r64e16f+16e16f+16e16d16<b8.&b32r32>f+16.&f+64r64a16.&a64r64b16.&b64r64a16b16f+16.&f+64r64>d16.&d64r64c+16.&c+64r64d16c+16<b16.&b64r64a16.&a64r64f+4&f+16.r32e16.&e64r64f+8.&f+32r32a8.&a32r32b16.&b64r64a16b16a16b16a16f+16e8.&e32r32e16f+16a16.&a64r64e16.&e64r64e16f+16e16f+16e16d16<b8.&b32r32>f+16.&f+64r64a16.&a64r64b16.&b64r64a16b16a16.&a64r64f+16.&f+64r64e16.&e64r64f+16e16d16.&d64r64<a16.&a64r64b4.&b16&b64r32.>>d8.&d32r32c+8.&c+32r32<b8.&b32r32a16.&a64r64f+16.&f+64r64e8.&e32r32d8.&d32r32f+2&f+8.&f+64r32.c+16.&c+64r64d16.&d64r64<b8.&b32r32>d8.&d32r32c+8.&c+32r32<b16.&b64r64a16.&a64r64f+4.&f+16&f+64r8r32.b16.&b64r64>c+16.&c+64r64d16.&d64r64<b8.&b32r32>f+8.&f+32r32e8.&e32r32d16.&d64r64c+16.&c+64r64d8.&d32r32c+8.&c+32r32<b16.&b64r64a16.&a64r64f+16.&f+64r64a16.&a64r64b8.&b32r32>f+8.&f+32r32<b4&b16.r32a8.&a32.r64b2&b16&b64r32.>d8.&d32r32<b8.&b32r32a16.&a64r64f+16.&f+64r64e16.&e64r64f+16e16d16.&d64r64e16.&e64r64f+2&f+8.&f+64r32.c+16.&c+64r64d16.&d64r64<b8.&b32r32>d16.&d64r64e16.&e64r64c+16.&c+64r64d16c+16d16.&d64r64a16.&a64r64f+2&f+8.&f+64r32.>c+16.&c+64r64d16.&d64r64<b8.&b32r32>f+8.&f+32r32<b4&b16.r32a16.&a64r64b8.&b32r32a8.&a32r32f+8.&f+32r32f+16.&f+64r64a16.&a64r64b16.&b64r64a16b16g16.&g64r64f+16.&f+64r64e8.&e32r32f+16.&f+64r64a16.&a64r64b2&b8.&b64r32.>f+16.&f+64r64a16.&a64r64b16.&b64r64a16b16a16b16a16f+16e8.&e32r32e16f+16a16.&a64r64e16.&e64r64e16f+16e16f+16e16d16<b8.&b32r32>f+16.&f+64r64a16.&a64r64b16.&b64r64a16b16f+16.&f+64r64>d16.&d64r64c+16.&c+64r64d16c+16<b16.&b64r64a16.&a64r64f+4&f+16.r32e16.&e64r64f+8.&f+32r32a8.&a32r32b16.&b64r64a16b16a16b16a16f+16e8.&e32r32e16f+16a16.&a64r64e16.&e64r64e16f+16e16f+16e16d16<b8.&b32r32>f+16.&f+64r64a16.&a64r64b16.&b64r64a16b16a16.&a64r64f+16.&f+64r64e16.&e64r64f+16e16d16.&d64r64<a16.&a64r64b2&b8.&b64r32.>f+16.&f+64r64a16.&a64r64b16.&b64r64a16b16a16b16a16f+16e8.&e32r32e16f+16a16.&a64r64e16.&e64r64e16f+16e16f+16e16d16<b8.&b32r32>f+16.&f+64r64a16.&a64r64b16.&b64r64a16b16f+16.&f+64r64>d16.&d64r64c+16.&c+64r64d16c+16<b16.&b64r64a16.&a64r64f+4&f+16.r32e16.&e64r64f+8.&f+32r32a8.&a32r32b16.&b64r64a16b16a16b16a16f+16e8.&e32r32e16f+16a16.&a64r64e16.&e64r64e16f+16e16f+16e16d16<b8.&b32r32>f+16.&f+64r64a16.&a64r64b16.&b64r64a16b16a16.&a64r64f+16.&f+64r64e16.&e64r64f+16e16d16.&d64r64<a16.&a64r64b2&b8.&b64r32.>f+16.&f+64r64a16.&a64r8r64d8.&d32r32c+16.&c+64r64e8.&e32r32c+16.&c+64r64<b16.&b64r8r64a16.&a64r64b16.&b64r64>c+16.&c+64r64d4.&d16&d64r8r32.d16.&d64r64d16.&d64r64c+16.&c+64r64e8&e32.r64c+8&c+32.r64<b16.&b64r64a2&a8.&a64r8r32.>c+16.&c+64r8r64d16.&d64r64d16.&d64r64c+16.&c+64r64e8.&e32r32d16.&d64r64e16.&e64r8r64f+16.&f+64r64e16.&e64r64f+16.&f+64r64d8.&d32r32e16.&e64r64f+16.&f+64r64d2&d16.r32<b16.&b64r64>d16.&d64r64e16.&e64r64f+16.&f+64r64e2&e16&e64r8r32.d16.&d64r64f+16.&f+64r64a16.&a64r64b8&b32.r64a16.&a64r64f+16.&f+64r64e4&e16.r32e16f+16a16e8&e32.r64f+16.&f+64r64<a16.&a64r64b4&b16.r32>d16f+16a16b16.&b64r64a16b16f+16.&f+64r64>d16.&d64r64c+16.&c+64r64d16c+16<b16.&b64r64a16.&a64r64f+4.&f+16&f+64r8r32.e16.&e64r64f+16.&f+64r64a16.&a64r64b8&b32.r64a16.&a64r64f+16.&f+64r64e4&e16.r32e16f+16a16e8&e32.r64f+16.&f+64r64a16.&a64r64d4&d16.r32e16f+16a16b16.&b64r64a16b16a16.&a64r64f+16.&f+64r64e16.&e64r64f+16e16d16.&d64r64<a16.&a64r64b2&b8.&b64r32.>f+16.&f+64r64a16.&a64r64b16.&b64r64a16b16a16b16a16f+16e8.&e32r32e16f+16a16.&a64r64e16.&e64r64e16f+16e16f+16e16d16<b8.&b32r32>f+16.&f+64r64a16.&a64r64b16.&b64r64a16b16f+16.&f+64r64>d16.&d64r64c+16.&c+64r64d16c+16<b16.&b64r64a16.&a64r64f+4&f+16.r32e16.&e64r64f+8.&f+32r32a8.&a32r32b16.&b64r64a16b16a16b16a16f+16e8.&e32r32e16f+16a16.&a64r64e16.&e64r64e16f+16e16f+16e16d16<b8.&b32r32>f+16.&f+64r64a16.&a64r64b16.&b64r64a16b16a16.&a64r64f+16.&f+64r64e16.&e64r64f+16e16d16.&d64r64<a16.&a64r64b2&b8.&b64r32.>f+16.&f+64r64a16.&a64r64b16.&b64r64a16b16a16b16a16f+16e8.&e32r32e16f+16a16.&a64r64e16.&e64r64e16f+16e16f+16e16d16<b8.&b32r32>f+16.&f+64r64a16.&a64r64b16.&b64r64a16b16f+16.&f+64r64>d16.&d64r64c+16.&c+64r64d16c+16<b16.&b64r64a16.&a64r64f+4&f+16.r32e16.&e64r64f+8.&f+32r32a8.&a32r32b16.&b64r64a16b16a16b16a16f+16e8.&e32r32e16f+16a16.&a64r64e16.&e64r64e16f+16e16f+16e16d16<b8.&b32r32>f+16.&f+64r64a16.&a64r64b16.&b64r64a16b16a16.&a64r64f+16.&f+64r64e16.&e64r64f+16e16d16.&d64r64<a16.&a64r64b2&b8.&b64r32.>f+16.&f+64r64a16.&a64r64b16.&b64r64a16b16a16b16a16f+16e8.&e32r32e16f+16a16.&a64r64e16.&e64r64e16f+16e16f+16e16d16<b8.&b32r32>f+16.&f+64r64a16.&a64r64b16.&b64r64a16b16f+16.&f+64r64>d16.&d64r64c+16.&c+64r64d16c+16<b16.&b64r64a16.&a64r64f+4&f+16.r32e16.&e64r64f+8.&f+32r32a8.&a32r32b16.&b64r64a16b16a16b16a16f+16e8.&e32r32e16f+16a16.&a64r64e16.&e64r64e16f+16e16f+16e16d16<b8.&b32r32>f+16.&f+64r64a16.&a64r64b16.&b64r64a16b16a16.&a64r64f+16.&f+64r64e16.&e64r64f+16e16d16.&d64r64<a16.&a64r64b2&b8.&b64r32.>f+16.&f+64r64a16.&a64r64b16.&b64r64a16b16a16b16a16f+16e8.&e32r32e16f+16a16.&a64r64e16.&e64r64e16f+16e16f+16e16d16<b8.&b32r32>f+16.&f+64r64a16.&a64r64b16.&b64r64a16b16f+16.&f+64r64>d16.&d64r64c+16.&c+64r64d16c+16<b16.&b64r64a16.&a64r64f+4&f+16.r32e16.&e64r64f+8.&f+32r32a8.&a32r32b16.&b64r64a16b16a16b16a16f+16e8.&e32r32e16f+16a16.&a64r64e16.&e64r64e16f+16e16f+16e16d16<b8.&b32r32>c+16.&c+64r64d16.&d64r64b16.&b64r64a16b16a16.&a64r64f+16.&f+64r64e16.&e64r64f+16e16d16.&d64r64<a16.&a64r64b1&b2.&b8.&b64,
    r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r2.b8.&b32r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r4r32>f+16.&f+64r64a16.&a64,
    r4o2b16.&b64r4.r64>c+16.&c+64r4.r64<a16.&a64r4.r64>d16.&d64r4.r64<b16.&b64r4.r64>c+16.&c+64r4.r64<f+16.&f+64r4.r64>f+16.&f+64r64d16.&d64r64f+16.&f+64r64a16.&a64r64<b16.&b64r4.r64>c+16.&c+64r4.r64<a16.&a64r4.r64>d16.&d64r4.r64<b16.&b64r4.r64>c+16.&c+64r1r4.r64<b16.&b64r4.r64>c+16.&c+64r4.r64<a16.&a64r4.r64>d16.&d64r1r4.r64<f+16.&f+64r4.r64>f+16.&f+64r8r64f+16.&f+64r1r1r1r1r1r1r1r1r1r1r1r1r1r1r8r64<b16.&b64r64>d16.&d64r64d8.&d32r32c+16.&c+64r1r1r2r64d8.&d32r2r8r32<b16.&b64r4.r64>c+16.&c+64r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r2.r8r64f+8.&f+32r32d8.&d32,
    r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r4.<g16.&g64r64g8.&g32r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r32a8.&a32r32b8.&b32,r4o2g16.&g64r64>d16.&d64r64b8.&b32r32<a16.&a64r64>e16.&e64r64a8.&a32r32<f+16.&f+64r64>c+16.&c+64r64f+8.&f+32r32<b16.&b64r64>f+16.&f+64r64b8.&b32r32<g16.&g64r64>d16.&d64r64g8.&g32r32<a16.&a64r64>e16.&e64r64a8.&a32r32<d16.&d64r64a16.&a64r64>d16.&d64r64e16.&e64r64d16.&d64r64<a16.&a64r64>d16.&d64r64f+16.&f+64r64<g16.&g64r64>d16.&d64r64g8.&g32r32<a16.&a64r64>e16.&e64r64>c+8.&c+32r32<<f+16.&f+64r64>c+16.&c+64r64a8.&a32r32<b16.&b64r64>f+16.&f+64r64>d8.&d32r32<<g16.&g64r64>d16.&d64r64g8.&g32r32<a16.&a64r64>e16.&e64r64a8.&a32r32<b16.&b64r64>f+16.&f+64r64b16.&b64r64>c+16.&c+64r64d16.&d64r64<f+16.&f+64r64b16.&b64r64>c+16.&c+64r64<<g16.&g64r64>d16.&d64r64g16.&g64r64b16.&b64r64<a16.&a64r64>e16.&e64r64>c+16.&c+64r64<e16.&e64r64<f+16.&f+64r64>c+16.&c+64r64a16.&a64r64c+16.&c+64r64<b16.&b64r64>f+16.&f+64r64>c+16.&c+64r64d16.&d64r64<<g16.&g64r64>d16.&d64r64g16.&g64r64b16.&b64r64<a16.&a64r64>e16.&e64r64a16.&a64r64>c+16.&c+64r64<<d16.&d64r64a16.&a64r64>d16.&d64r64e16.&e64r64d16.&d64r64<a16.&a64r64>d16.&d64r64a16.&a64r64<g16.&g64r64>d16.&d64r64g16.&g64r64b16.&b64r64<a16.&a64r64>e16.&e64r64>c+16.&c+64r64<e16.&e64r64<f+16.&f+64r64>c+16.&c+64r64a16.&a64r64c+16.&c+64r64<b16.&b64r64>f+16.&f+64r64>c+16.&c+64r64<f+16.&f+64r64<g16.&g64r64>d16.&d64r64g16.&g64r64d16.&d64r64<a16.&a64r64>e16.&e64r64a16.&a64r64e16.&e64r64<b16.&b64r64>f+16.&f+64r64b16.&b64r64>c+16.&c+64r64d4.&d16&d64r32.<<g16.&g64r64>d16.&d64r64g8.&g32r32<a16.&a64r64>e16.&e64r64a8.&a32r32<b16.&b64r64>f+16.&f+64r64b16.&b64r64>c+16.&c+64r64d4.&d16&d64r32.<<g16.&g64r64>d16.&d64r64g8.&g32r32<a16.&a64r64>e16.&e64r64a8.&a32r32<b16.&b64r64>f+16.&f+64r64b16.&b64r64>c+4.&c+16&c+64r8r32.<<g16.&g64r64>d16.&d64r64g8.&g32r32<a16.&a64r64>e16.&e64r64a8.&a32r32<b16.&b64r64>f+16.&f+64r64b16.&b64r64>c+16.&c+64r64d4.&d16&d64r32.<<g16.&g64r64>d16.&d64r64g8.&g32r32<a16.&a64r64>e16.&e64r64a8.&a32r32<b16.&b64r64>f+16.&f+64r64b16.&b64r64>c+4.&c+16&c+64r8r32.<<g16.&g64r64>d16.&d64r64g8.&g32r32<a16.&a64r64>e16.&e64r64a8.&a32r32<b16.&b64r64>f+16.&f+64r64b16.&b64r64>c+16.&c+64r64d4.&d16&d64r32.<<g16.&g64r64b16.&b64r64b8.&b32r32a16.&a64r64>e16.&e64r64a8.&a32r32<b16.&b64r64>f+16.&f+64r64b16.&b64r64>c+4.&c+16&c+64r8r32.<<g16.&g64r64>d16.&d64r64g16.&g64r64d16.&d64r64<a16.&a64r64>e8.&e32r32a16.&a64r64<b16.&b64r64b8.&b32r32>c+16.&c+64r64d16.&d64r64<b8.&b32r8r32g16.&g64r64>d16.&d64r64d8.&d32r32<a16.&a64r64>e16.&e64r64e8.&e32r32<b16.&b64r64>f+16.&f+64r64b16.&b64r64>c+16.&c+64r64d16.&d64r64<f+16.&f+64r4r64<g16.&g64r64>d16.&d64r64b16.&b64r64>d16.&d64r64<<a16.&a64r64>e16.&e64r64>c+16.&c+64r64<e16.&e64r64<f+16.&f+64r64>c+16.&c+64r64a16.&a64r64c+16.&c+64r64<b16.&b64r64>f+16.&f+64r64>c+16.&c+64r64<f+16.&f+64r64<g16.&g64r64>d16.&d64r64g16.&g64r64b16.&b64r64<a16.&a64r64>e16.&e64r64a16.&a64r64>c+16.&c+64r64<<d16.&d64r64a16.&a64r64>d16.&d64r64e16.&e64r64f+16.&f+64r64<a16.&a64r64>f+16.&f+64r64a16.&a64r64<g16.&g64r64>d16.&d64r64g16.&g64r64b16.&b64r64<a16.&a64r64>e16.&e64r64>c+16.&c+64r64<e16.&e64r64<f+16.&f+64r64>c+16.&c+64r64a16.&a64r64c+16.&c+64r64<b16.&b64r64>f+16.&f+64r64>c+16.&c+64r64<f+16.&f+64r64<g16.&g64r64>d16.&d64r64g16.&g64r64d16.&d64r64<a16.&a64r64>e16.&e64r64a16.&a64r64e16.&e64r64<b16.&b64r64>f+16.&f+64r64b16.&b64r64>c+16.&c+64r64d16.&d64r64<f+16.&f+64r4r64<g16.&g64r64>d16.&d64r64g16.&g64r64b16.&b64r64<a16.&a64r64>e16.&e64r64>c+16.&c+64r64<e16.&e64r64<f+16.&f+64r64>c+16.&c+64r64a16.&a64r64c+16.&c+64r64<b16.&b64r64>f+16.&f+64r64>c+16.&c+64r64<f+16.&f+64r64<g16.&g64r64>d16.&d64r64g16.&g64r64b16.&b64r64<a16.&a64r64>e16.&e64r64a16.&a64r64>c+16.&c+64r64<<d16.&d64r64a16.&a64r64>d16.&d64r64e16.&e64r64f+16.&f+64r64<a16.&a64r64>f+16.&f+64r64a16.&a64r64<g16.&g64r64>d16.&d64r64g16.&g64r64b16.&b64r64<a16.&a64r64>e16.&e64r64>c+16.&c+64r64<e16.&e64r64<f+16.&f+64r64>c+16.&c+64r64a16.&a64r64c+16.&c+64r64<b16.&b64r64>f+16.&f+64r64>c+16.&c+64r64<f+16.&f+64r64<g16.&g64r64>d16.&d64r64g16.&g64r64d16.&d64r64<a16.&a64r64>e16.&e64r64a16.&a64r64e16.&e64r64<b16.&b64r64>f+16.&f+64r64b16.&b64r64>c+16.&c+64r64d8.&d32r4r32<<g16.&g64r64>d16.&d64r64f+8.&f+32r32<a16.&a64r64>e16.&e64r64g8.&g32r32<f+16.&f+64r64>c+16.&c+64r64e8.&e32r32<b16.&b64r64>f+16.&f+64r64a16.&a64r64e16.&e64r64<g16.&g64r64>d16.&d64r64f+8.&f+32r32<a16.&a64r64>e16.&e64r64g8.&g32r32d16.&d64r64g16.&g64r64>d16.&d64r64e16.&e64r64<c8.&c32r32<b8.&b32r32g16.&g64r64>d16.&d64r64f+8.&f+32r32<a16.&a64r64>e16.&e64r64g8.&g32r32<f+16.&f+64r64>c+16.&c+64r64e8.&e32r32<b16.&b64r64>f+16.&f+64r64a8.&a32r32<e16.&e64r64b16.&b64r64>e16.&e64r64f+4.&f+16&f+64r8r32.<a16>e16a16b2&b64r2r32.<g16.&g64r64>d16.&d64r64f+8.&f+32r32<a16.&a64r64>e16.&e64r64g8.&g32r32<f+16.&f+64r64>c+16.&c+64r64e8.&e32r32<b16.&b64r64>f+16.&f+64r64a16.&a64r64e16.&e64r64<g16.&g64r64>d16.&d64r64g8.&g32r32<a16.&a64r64>e16.&e64r64g8.&g32r32d16.&d64r64a16.&a64r64>c+16.&c+64r64d4&d16.r4r32<<g16.&g64r64>d16.&d64r64f+8.&f+32r32<a16.&a64r64>e16.&e64r64g8.&g32r32<f+16.&f+64r64>c+16.&c+64r64e16.&e64r64c+16.&c+64r64<b16.&b64r64>f+16.&f+64r64a8.&a32r32<g16.&g64r64>d16.&d64r64g16.&g64r64d16.&d64r64<a16.&a64r64>e16.&e64r64a16.&a64r64e16.&e64r64<b16.&b64r64>f+16.&f+64r64b16.&b64r64>c+16.&c+64r64d4.&d16&d64r32.<<g16.&g64r64>d16.&d64r64b16.&b64r64>d16.&d64r64<<a16.&a64r64>e16.&e64r64>c+16.&c+64r64<e16.&e64r64<f+16.&f+64r64>c+16.&c+64r64a16.&a64r64c+16.&c+64r64<b16.&b64r64>f+16.&f+64r64>c+16.&c+64r64<f+16.&f+64r64<g16.&g64r64>d16.&d64r64g16.&g64r64b16.&b64r64<a16.&a64r64>e16.&e64r64a16.&a64r64>c+16.&c+64r64<<d16.&d64r64a16.&a64r64>d16.&d64r64e16.&e64r64f+16.&f+64r64<a16.&a64r64>f+16.&f+64r64a16.&a64r64<g16.&g64r64>d16.&d64r64g16.&g64r64b16.&b64r64<a16.&a64r64>e16.&e64r64>c+16.&c+64r64<e16.&e64r64<f+16.&f+64r64>c+16.&c+64r64a16.&a64r64c+16.&c+64r64<b16.&b64r64>f+16.&f+64r64>c+16.&c+64r64d16.&d64r64<<g16.&g64r64>d16.&d64r64g16.&g64r64d16.&d64r64<a16.&a64r64>e16.&e64r64a16.&a64r64e16.&e64r64<b16.&b64r64>f+16.&f+64r64b16.&b64r64>c+16.&c+64r64d16.&d64r64<f+16.&f+64r4r64<g16.&g64r64>d16.&d64r64b16.&b64r64>d16.&d64r64<<a16.&a64r64>e16.&e64r64>c+16.&c+64r64<e16.&e64r64<f+16.&f+64r64>c+16.&c+64r64a16.&a64r64c+16.&c+64r64<b16.&b64r64>f+16.&f+64r64>c+16.&c+64r64d16.&d64r64<<g16.&g64r64>d16.&d64r64g16.&g64r64b16.&b64r64<a16.&a64r64>e16.&e64r64a16.&a64r64>c+16.&c+64r64<<d16.&d64r64a16.&a64r64>d16.&d64r64e16.&e64r64f+16.&f+64r64<a16.&a64r64>f+16.&f+64r64a16.&a64r64<g16.&g64r64>d16.&d64r64b16.&b64r64>d16.&d64r64<<a16.&a64r64>e16.&e64r64>c+16.&c+64r64<e16.&e64r64<f+16.&f+64r64>c+16.&c+64r64a16.&a64r64c+16.&c+64r64<b16.&b64r64>f+16.&f+64r64>c+16.&c+64r64<f+16.&f+64r64<g16.&g64r64>d16.&d64r64g16.&g64r64d16.&d64r64<a16.&a64r64>e16.&e64r64a16.&a64r64e16.&e64r64<b16.&b64r64>f+16.&f+64r64b16.&b64r64>c+16.&c+64r64d16.&d64r64<f+16.&f+64r64>d8.&d32r32<<g16.&g64r64>d16.&d64r64b16.&b64r64>d16.&d64r64<<a16.&a64r64>e16.&e64r64>c+16.&c+64r64<e16.&e64r64<f+16.&f+64r64>c+16.&c+64r64a16.&a64r64c+16.&c+64r64<b16.&b64r64>f+16.&f+64r64>c+16.&c+64r64d16.&d64r64<<g16.&g64r64>d16.&d64r64g16.&g64r64b16.&b64r64<a16.&a64r64>e16.&e64r64a16.&a64r64>c+16.&c+64r64<<d16.&d64r64a16.&a64r64>d16.&d64r64e16.&e64r64f+16.&f+64r64<a16.&a64r64>f+16.&f+64r64a16.&a64r64<g16.&g64r64>d16.&d64r64g16.&g64r64b16.&b64r64<a16.&a64r64>e16.&e64r64>c+16.&c+64r64<e16.&e64r64<f+16.&f+64r64>c+16.&c+64r64a16.&a64r64c+16.&c+64r64<b16.&b64r64>f+16.&f+64r64>c+16.&c+64r64<f+16.&f+64r64<g16.&g64r64>d16.&d64r64g16.&g64r64d16.&d64r64<a16.&a64r64>e16.&e64r64a16.&a64r64e16.&e64r64<b16.&b64r64>f+16.&f+64r64b16.&b64r64>c+16.&c+64r64d16.&d64r64<f+16.&f+64r64>d8.&d32r32<<g16.&g64r64>d16.&d64r64g16.&g64r64b16.&b64r64<a16.&a64r64>e16.&e64r64>c+16.&c+64r64<e16.&e64r64<f+16.&f+64r64>c+16.&c+64r64a16.&a64r64c+16.&c+64r64<b16.&b64r64>f+16.&f+64r64>c+16.&c+64r64<f+16.&f+64r64<g16.&g64r64>d16.&d64r64g16.&g64r64b16.&b64r64<a16.&a64r64>e16.&e64r64a16.&a64r64>c+16.&c+64r64<<d16.&d64r64a16.&a64r64>d16.&d64r64e16.&e64r64f+16.&f+64r64<a16.&a64r64>f+16.&f+64r64a16.&a64r64<g16.&g64r64>d16.&d64r64g16.&g64r64b16.&b64r64<a16.&a64r64>e16.&e64r64>c+16.&c+64r64<e16.&e64r64<f+16.&f+64r64>c+16.&c+64r64a16.&a64r64c+16.&c+64r64<b16.&b64r64>f+16.&f+64r64b16.&b64r64e16.&e64r64<g16.&g64r64>d16.&d64r64g16.&g64r64d16.&d64r64<a16.&a64r64>e16.&e64r64a16.&a64r64e16.&e64r64<b16.&b64r64>f+16.&f+64r64a16.&a64r64>c+16.&c+64r64c+1&c+4.&c+16&c+64,
    r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r2.c8.&c32
  `,
  'river flows in you': `
    MML@t65r1r1r1r1r1r4>e16.&e64r8r64<b4&b16.r1r1r4r32>g+16a8<a16>g+16a4.<a16>d16<a16b16.&b64r64>c+1&c+4.&c+16.&c+64r64<e16.&e64r64a16.&a64r64>c+4.&c+16.&c+64r64d16c+1&c+1&c+1&c+1&c+1&c+1&c+1&c+1&c+2.&c+16a4&a16<a16>g+16a8<a16>g+16a1&a1&a1&a4.&a16a8.<a16>g+16a4.<a16>d16<a16b16.&b64r64>d16.&d64r64e16.&e64r64>c+16.&c+64r64<b4.b1&b1a8.<a16>e2&e16<a16>a16.b4&b32>c+16d16e16c+16<b16>c+16<b4.a8.<a16>e2&e16<a16>a16.b4&b32>c+16d16e16c+16<b16>c+16<b4.a8.<a16>e2&e16<a16>a16.b4&b32>c+16d16e16c+16<b2a8.<a16>e2&e8<a16>a16b4>c+16d16e16c+16<b1&b1&b1&b1&b1&b1&b4.&b16.r32<a16r16e4&e16.r32a16b16>c+4.&c+16d16r8<e16.&e64r64a16.&a64r64>d16r16<b8.&b32r32e8.&e32r32a16.&a64r64<a16.&a64r64>c+16.&c+64r64f+16.&f+64r64a4.&a16&a64,
    >a16.&a64r64g+16.&g+64r64a16.&a64r64g+16.&g+64r64a16.&a64r64e16.&e64r64a16.&a64r64d2.&d8.&d32.r64<a16>c+16a16.&a64r64g+16.&g+64r64a16.&a64r64g+16.&g+64r64a16.&a64r64e16.&e64r64a16.&a64r64d2.&d8.&d32.r64<a16>c+16a16.&a64r64g+16a8<a16>g+16a8<a16>e16a8<a16>d16<a16>c+16.&c+64r64d16.&d64r64<a16.&a64r64>c+16.&c+64r64<g+4&g+16.r32a16g+16a4&a16e16a16b16>c+4&c+16.r32c+16d16e4&e16.r32d16c+16<b4.&b16&b64r32.a16.&a64r64>a8a4&a16<a16>e16a1&a4g+16e4&e16.r32<a16b16>c+4.&c+16d16e16.&e64r64<e16.&e64r64>c+4<b8.&b32r32>a8.g+16a4&a16b2&b16a8.b4.a4.b2&b16a8.<a16>e16<a16>a8.g+16a2g+16.&g+64r64<b16.&b64r64>a16.b2&b32a8.<a16>e16<a16>a16.b4&b32>c+16d16e16c+16<b2a8.<a16>e16<a16>a16.b2&b32a8.b4.a2.&a8&a32.r64g+16a4&a16a4&a16<a16>d16<a16b16.&b64r64>c+4&c+16.&c+64r64<g+4&g+16.r32a16g+16e4&e16e16a16b16>c+4&c+16<e16>c+4&c+16d16e16<e16>d16c+4&c+16<b16.&b64r64g+16.&g+64r64>c+1&c+8c+1&c+4.&c+16<e16a16b16>c+8.d16e4&e16<e16>d16c+1&c+1&c+1&c+1&c+1&c+1&c+1&c+1&c+2&c+8.a8.&a32.r64g+16.&g+64r64<a16.&a64r64>e2&e8.&e32.r64c+1&c+8.&c+32.r64<e16.&e64r64a16.&a64r64>c+4.&c+16.&c+64r64d16c+2&c+16a4&a16.&a64r64g+16.&g+64r64<a16.&a64r64>f16.&f64r64a1&a1&a1&a1&a8.&a64,
    r1r1r1r1r1r1r1r1r1r8>d16.&d64r64e16.&e64r64>c+16.&c+64r64<b16.&b64r64e16.&e64r64b8b1&b1a8.<a16>e16<a16>a8.g+16a4&a16b4&b16>c+16d16e16c+16<b2a8.<a16>e16<a16>a8.g+16a4&a16b4&b16>c+16d16e16c+16<b2a8.<a16>e16<a16>a16.b2&b32a8.b4.a4.a8g+16a4&a16a8g+16a4&a16b4&b16>c+16d16e16c+16<b1&b1&b1&b1&b1&b1&b4.&b16.&b64r64e16.&e64r64e2&e16.r32<a16b16>c+4&c+16<e16>c+4&c+16d16e2.&e8.<a16>a16.b2&b32a8.b4&b16r16a4.a8g+16a4&a16a8g+16a4&a16a8g+16a2g+16<a16>e2&e16<a16>a8.g+16a4&a16a8g+16a2g+16.&g+64r64<b16.&b64r64>a16.b2&b16.a8.<a16>e1&e1&e32.r64a1&a1&a1&a4&a16.&a64r64g+16.&g+64r64a4&a16.&a64r4r64d16.&d64r64<b8.&b32r32>c+1&c+4&c+16.&c+64r64<e16.&e64r64a16.&a64r64>c+2&c+8,
    r1r1r1r1r1r1r1r1r1r2.r16o6c+16<a4.&a16.r1r4.r16.b2&b16a8.<a16>e16<a16>a8.g+16a2g+16.&g+64r64<b16.&b64r64>a8.g+16a4&a16b2&b16a8.b4.a4.a8g+16a4&a16a8g+16a4&a16a8g+16a2g+16.&g+64r64<b16.&b64r64>a16.b2&b32a8.<a16>e16<a16>a8.g+16a2g+16.&g+64r64<b16.&b64r64g+16.&g+64r64e8.&e32r32a16>c+1&c+8.d16.&d64r64<a16.&a64r64>c+1&c+8.<e16a16b16>c+8.d16e16<e16>c+4.<b16e16>d16c+4.&c+32.r64g+16a4.<a16>e16a1&a4g+16e1&e16<e16>c+4.<b16e16g+16b16>a8.g+16a4&a16a8g+16a4&a16a8g+16a2g+16<a16>e2&e16<a16>a16.b2&b32a8.b4&b16r16a4.a8g+16a4&a16b2&b16a8.b4.a4.a8g+16a4&a16a8.g+16a4&a32r64a16&a64g+16a2g+16.&g+64r64<b16.&b64r64g+16.&g+64r64e16.&e64r64a16>c+2&c+32.r4r64d16.&d64r64<a16.&a64r64>d16.&d64r64<a16.&a64r8r64b8.&b32r32a16.&a64r64g+16.&g+64r64c+8.&c+32r32e16.&e64r64a16b16>c+4.&c+16d16e1&e1&e4&e16.&e64r64>c+16.&c+64r64<e1&e2&e16.&e64,
    r1r1r1r1r1r1r1r1r1r1>a1&a2.&a16r1r1r1r1r1r1r1r1r1r2r8.e16.&e64r8r64<b4&b16.r8r32a4&a16r1r1r1r2>>c+16<a4.&a16.r1r4.r16.b2&b16a8.<a16>e1&e16<a16>a16.b2&b32a8.<a16>e1&e16<a16>a16.b2&b32a8.<a16>e1&e2&e16<a16>a8b2&b64a8&a32.b4.a2&a8.g+16.&g+64r64a4&a16.&a64r4.r64c+4.&c+16.&c+64r2r64<e8.&e32r2.r8r32e16.&e64r64>c+4<b4.&b64r32.a32>c+1&c+8&c+32.r16.r64e2&e16.r8r32<a4&a16.,
    r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r4>a1&a2.&a16r1r1r1r1r1r1r1r1r2r8.c+2&c+16.&c+64r8r64e1&e2.&e16.&e64r1r4.r64f16.&f64r2r64d16.&d64,
    r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r2.>a4&a16.&a64r1r8r64<a8.&a32r1r1r4r32>a4&a16.&a64,
    r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r4c+4.&c+16&c+64r1r32.g+4.&g+16&g+64,
    <f+16.&f+64r64>c+16.&c+64r64e8.&e32r32<d16.&d64r64a16.&a64r64>e1&e8.&e64r32.<f+16.&f+64r64>c+16.&c+64r64f+8.&f+32r32<d16.&d64r64a16.&a64r64>e1&e8.&e64r32.<f+16.&f+64r64>c+16.&c+64r64f+8.&f+32r32<d16.&d64r64a16.&a64r64>e16.&e64r64<d16.&d64r64<a16.&a64r64>e16.&e64r64>c+8.&c+32r32<e16.&e64r64b16.&b64r64>e8.&e32r32<f+16.&f+64r64>c+16.&c+64r64f+8.&f+32r32<d16.&d64r64a16.&a64r64>e8.&e32r32<<a16.&a64r64>e16.&e64r64>c+8.&c+32r32<e16.&e64r64b16.&b64r64>g+8.&g+32r32<f+16.&f+64r64>c+16.&c+64r64f+8.&f+32r32<d16.&d64r64a16.&a64r64>e16.&e64r64<d16.&d64r64<a16.&a64r64>e16.&e64r64>c+16.&c+64r64<<a16.&a64r64>e16.&e64r64b16.&b64r64>e8.&e32r32<f+16.&f+64r64>c+16.&c+64r64f+8.&f+32r32<d16.&d64r64b16.&b64r64>e8.&e32r32<<a16.&a64r64>e16.&e64r64>c+8.&c+32r32<e16.&e64r64b16.&b64r64>e8.&e32r32<f+16.&f+64r64>c+16.&c+64r64f+16.&f+64r64<f+16.&f+64r64d16.&d64r64a16.&a64r64>e16.&e64r64<d16.&d64r64<a16.&a64r64>e16.&e64r64>c+16.&c+64r64<<a16.&a64r64>e16.&e64r64b16.&b64r64>e16.&e64r64<e16.&e64r64f+16.&f+64r64>c+16.&c+64r64e16.&e64r64<f+16.&f+64r64d16.&d64r64b16.&b64r64>e16.&e64r64<d16.&d64r64<a16.&a64r64>e16.&e64r64>c+16.&c+64r64<<a16.&a64r64>e16.&e64r64b16.&b64r64>e16.&e64r64<e16.&e64r64<f+16.&f+64r64>c+16.&c+64r64f+16.&f+64r64<f+16.&f+64r64>d16.&d64r64a16.&a64r64>c+16.&c+64r64<d16.&d64r64<a16.&a64r64>e16.&e64r64>c+16.&c+64r64<<a16.&a64r64e16.&e64r64b16.&b64r64>g+16.&g+64r64<e16.&e64r64f+16.&f+64r64>c+16.&c+64r64f+16.&f+64r64<f+16.&f+64r64>d16.&d64r64a16.&a64r64>e16.&e64r64<d16.&d64r64<a16.&a64r64>e16.&e64r64>c+16.&c+64r64<<a16.&a64r64e16.&e64r64b16.&b64r64>g+4.&g+16&g+64r32.f+16.&f+64r64>c+16.&c+64r64f+8.&f+32r32<d16.&d64r64a16.&a64r64>e16.&e64r64<d16.&d64r64<a16.&a64r64>e16.&e64r64>c+16.&c+64r64<<a16.&a64r64>e16.&e64r64b16.&b64r64>e8.&e32r32<f+16.&f+64r64>c+4&c+16.r32<d16.&d64r64a16.&a64r64>d8.&d32r32<<a16.&a64r64>e16.&e64r64>c+16.&c+64r64<<a16.&a64r64>e16.&e64r64b16.&b64r64>e8.&e32r32<f+16.&f+64r64>c+16.&c+64r64f+16.&f+64r64<f+16.&f+64r64d16.&d64r64a16.&a64r64>e16.&e64r64<d16.&d64r64<a16.&a64r64>e16.&e64r64>c+16.&c+64r64<<a16.&a64r64>e16.&e64r64b16.&b64r64>e16.&e64r64<e16.&e64r64f+16.&f+64r64>c+16.&c+64r64f+8.&f+32r32<d16.&d64r64a16.&a64r64>d16.&d64r64<d16.&d64r64<a16.&a64r64>e16.&e64r64>c+16.&c+64r64<<a16.&a64r64e16.&e64r64b16.&b64r64>g+16.&g+64r64<e16.&e64r64f+16.&f+64r64>c+16.&c+64r64>f+16.&f+64r64<f+16.&f+64r64d16.&d64r64a16.&a64r64>e16.&e64r64<d16.&d64r64<a16.&a64r64>e16.&e64r64>c+16.&c+64r64<<a16.&a64r64e16.&e64r64b16.&b64r64>g+16.&g+64r64<e16.&e64r64f+16.&f+64r64>c+16.&c+64r64>f+16.&f+64r64<f+16.&f+64r64d16.&d64r64a16.&a64r64>e16.&e64r64<d16.&d64r64<a16.&a64r64>e16.&e64r64>c+16.&c+64r64<<a16.&a64r64e16.&e64r64b16.&b64r64>g+16.&g+64r64<e16.&e64r64f+16.&f+64r64>c+16.&c+64r64>f+16.&f+64r64<f+16.&f+64r64d16.&d64r64a16.&a64r64>e16.&e64r64<d16.&d64r64<a16.&a64r64>e16.&e64r64>c+16.&c+64r64<<a16.&a64r64e16.&e64r64b16.&b64r64>g+16.&g+64r64<e16.&e64r64f+16.&f+64r64>c+16.&c+64r64>f+16.&f+64r64<f+16.&f+64r64d16.&d64r64a16.&a64r64>e16.&e64r64<d16.&d64r64<a16.&a64r64>e16.&e64r64>c+16.&c+64r64<<a16.&a64r64e16.&e64r64b16.&b64r64>g+8.&g+32r32f+4.&f+16&f+64r32.e16.&e64r64>d16.&d64r64f+16.&f+64r64<e16.&e64r64e16.&e64r64>c+16.&c+64r64<a8.&a32r32>e4.&e16&e64r32.<<f+16.&f+64r64>c+4&c+16.r32d16.&d64r64a16.&a64r64>e8.&e32r32<<a16.&a64r64>e16.&e64r64>c+8.&c+32r32<e16.&e64r64b16.&b64r64>e8.&e32r32<f+16.&f+64r64>c+16.&c+64r64f+8.&f+32r32<d16.&d64r64a16.&a64r64>e16.&e64r64<d16.&d64r64<a16.&a64r64>e16.&e64r64>c+8.&c+32r32<e16.&e64r64b16.&b64r64>g+8.&g+32r32<<f+16.&f+64r64>c+16.&c+64r64f+8.&f+32r32d16.&d64r64a16.&a64r64>d8.&d32r32<<a16.&a64r64>e16.&e64r64>c+8.&c+32r32<<e16.&e64r64b16.&b64r64>g+8.&g+32r32<f+16.&f+64r64>c+8f+4>c+4.&c+16&c+64
  `,

  'bTwinkle': `
    T100L8\nCCGGAAG4\nFFEEDDC4\nGGFFEED4\nGGFFEED4\nCCGGAAG4\nFFEEDDC4
  `,
  'bLittleBee': `
    T100L8\nGEE4FDD4\nCDEFGGG4\nGEE4FDD4\nCEGGE2\nDDDDDEF4\nEEEEEFG4\nGEE4FDD4\nCEGGC2
  `,
  'bBWV114': "MML@T120L8>D4<GAB>C D4<G4G4 >E4CDEF+ G4<G4G4> C4DC< BAB4B+BAG F+4GABG B4A2\n"+
  ">D4<GAB>C D4<G4G4 >E4CDEF+ G4<G4G4> C4DC< BAB4B+BAG A4BAGF+ G2.\n"+
  ">B4GABG A4DEF+D G4EF+GD C+4C-C+<A4 AB>C+DEF+ L4GF+E F+<A>C+ D2.\n"+
  "DL8<GF+G4 >E4<GF+G4 >D4C4<B4 AGF+GA4 DEF+GAB B+4B4A4 B>D<G4F+4 G2.,\n" +
  "<G2A4 L2.B B+ B A G >L4D<BG >D.C8<B8A8\n"+
  "B2A GBG B+2. BB+8B8A8G8 A2F+ G2B >CD<D GDG\n"+
  "G2. F+2. EGE A2<A >A2. B>DC+ D<F+A >D<DB+\n"+
  "BDB B+EB+ BAG >D2. <D2F+ EGF+ GC-D GD<G,;\n"
}

function initSongList(){
  var songList = document.getElementsByName('song')[0];
  console.log(songList);
  if(!localStorage.volatileMus_SongList){
    localStorage.setItem('volatileMus_SongList', '{}');
  }
  if(!localStorage.musicCode_SongList){
    localStorage.setItem('musicCode_SongList', '{}');
  }
  oldSongs = JSON.parse(localStorage.volatileMus_SongList);
  songs = JSON.parse(localStorage.musicCode_SongList);
  console.log(songs);
  var customSongList = songList.children[1];
  for(var name in oldSongs){
    customSongList.appendChild(new Option(name, "c" + name));
  }
  customSongList = songList.children[2];
  for(var name in songs){
    customSongList.appendChild(new Option(name, "d" + name));
  }
  var name = sessionStorage.getItem('musicCode_ShowPermaLink');
  if((name === null || name.charAt(0) != 'd') && location.hash) {
    var opt = new Option('Song from link','perma');
    songList.appendChild(opt);
    opt.selected = 'selected';
  }
  else if (name) {
    songList.value = name;
    if (songList.value == '') songList.value = 'bTwinkle';
  }
  //if(name) {
  //  document.getElementById('warn').innerText = "http://stdio2016.github.io/volatile/mus.html"+location.hash;
  //}
}

function changeSong(){
  var songSelect = document.getElementsByName('song')[0];
  var dirty = document.getElementById('codeIn').dirty;
  var name = songSelect.value;
  if (songSelect.previousSelection && dirty && name !== songSelect.previousSelection) {
    confirmBox('You have unsaved changes. Really want to change song?', function (yes) {
      if (yes) {
        confirmChangeSong(name);
      } else {
        songSelect.value = songSelect.previousSelection;
      }
    });
  } else {
    confirmChangeSong(name);
  }
}

function confirmChangeSong(name){
  var songSelect = document.getElementsByName('song')[0];
  var code = "";
  if (song_mml[name]){
    code = song_mml[name]
  } else if (name.charAt(0) == 'c'){
    code = oldSongs[name.substr(1)];
  }
  else if (name.charAt(0) == 'd'){
    var cp = songs[name.substr(1)];
    code = cp.code;
    document.getElementById('format').value = cp.lang;
  }
  else if (name == 'perma'){
    var cp = decodePermalink();
    code = cp.code;
    document.getElementById('format').value = cp.lang;
  }
  if (name != sessionStorage.musicCode_ShowPermaLink) {
    sessionStorage.musicCode_ShowPermaLink = '';
  }
  document.getElementById('codeIn').value = code;
  document.getElementById('codeIn').dirty = false;
  songSelect.previousSelection = name;
}

function save(){
  var elt = event.target;
  var songSelect = document.getElementsByName('song')[0];
  var name = songSelect.value;
  var newName = "";
  if (name.charAt(0) == 'c' || name.charAt(0) == 'd'){
    promptBox('Input the song name', name.substring(1), afterGetName);
  }
  else {
    promptBox('Input the song name', '', afterGetName);
  }
  function afterGetName(newName) {
    if(!newName) return;
    document.getElementById('codeIn').dirty = false;
    encodePermalink('d' + newName);
    if(newName == '') return;
    if(!songs[newName]){
      var opt = new Option(newName, "d" + newName);
      songSelect.children[2].appendChild(opt);
      opt.selected = true;
    }
    songSelect.value = 'd' + newName;
    songs[newName] = {
      lang: document.getElementById('format').value,
      code: document.getElementById('codeIn').value
    };
    localStorage.setItem('musicCode_SongList', JSON.stringify(songs));
    elt.focus();
  }
}

function del(){
  var songSelect = document.getElementsByName('song')[0];
  var name = songSelect.value;
  if (name === 'perma') {
    alertBox('The song from permalink is permanent');
    return;
  }
  if (name.charAt(0) != 'd'){
    if (name.charAt(0) == 'c')
      alertBox('Old song cannot be deleted by this program.');
    else
      alertBox('You cannot delete a builtin song');
    return;
  }
  confirmBox('Do you really want to delete "' + name.substring(1) + '"?', confirmDeletion);
  function confirmDeletion(yes) {
    if (!yes) return;
    console.log(name);
    var so = songSelect.children[2];
    for(var i=0; i<so.children.length; i++){
      if(so.children[i].value == name){
        so.children[i].remove();
        break;
      }
    }
    delete songs[name.substr(1)];
    localStorage.setItem('musicCode_SongList', JSON.stringify(songs));
  }
}

function encodePermalink(name){
  var code = document.getElementById('codeIn').value;
  code = encodeURIComponent(code);
  code = code.replace(/\(/g, "%28").replace(/\)/g, "%29");
  if(/[#.,/!*]$/.test(code)){
    code = code + "%20";
  }
  //document.getElementById('warn').innerText = "Generating permalink...";
  sessionStorage.musicCode_ShowPermaLink = name;
  //setTimeout(
    (function(){
      var href = location.href;
      var hashpos = href.indexOf("#");
      var href = hashpos == -1 ? href : href.substr(0, hashpos);
      var lang = document.getElementById('format').value;
      location.href=href+'#lang='+lang+'&code='+code;
      //location.reload();
    })();
  //,500);
}

function decodePermalink(){
  var code = location.hash.substr(1);
  var lang = 'mml';
  var params = code.split('&');
  for (var i = 0; i < params.length; i++) {
    if (params[i].substring(0, 5) == 'code=') {
      code = params[i].substring(5);
    }
    if (params[i].substring(0, 5) == 'lang=') {
      lang = params[i].substring(5);
    }
  }
  code = decodeURIComponent(code);
  return {code: code, lang: lang};
}
async () => {
  const CRLF = String.fromCharCode(13, 10);

  // ---- 1. decode worker code and verify integrity ----
  const b64 =
  "Ly8g4pSA4pSA4pSAIFBhZ2VzIF93b3JrZXIuanMg4oCUIEFJIHJlYWRpbmcgQVBJICsgc3RhdGljIHNpdGUgKyBTUEEgZmFsbGJhY2sg4pSA4pSA4pSACi8vIEFkdmFuY2VkLW1vZGUgV29ya2VyIGZvciB0aGUgUGFnZXMgZGVwbG95bWVudC4KLy8gLSBQT1NUIC9hcGkvZGFpbHktcmVhZGluZyDihpIgR2VtaW5pLXBvd2VyZWQgdGFyb3QgcmVhZGluZyAoa2V5IHN0YXlzIHNlcnZlci1zaWRlKQovLyAtIGV2ZXJ5dGhpbmcgZWxzZSDihpIgc3RhdGljIGFzc2V0cyAoZW52LkFTU0VUUykKLy8gLSB1bmtub3duIEdFVCBwYXRocyB3aXRob3V0IGEgZmlsZSBleHRlbnNpb24g4oaSIGluZGV4Lmh0bWwgKGNsaWVudC1zaWRlIHJvdXRpbmcpCi8vCi8vIFJlcXVpcmVkIGVudiB2YXI6IEdFTUlOSV9BUElfS0VZIOKAlCBzZXQgdmlhOgovLyAgIERhc2hib2FyZCDihpIgV29ya2VycyAmIFBhZ2VzIOKGkiB0YXJvdC1iaXJ0aC1jYXJkcy1udW1lcm9sb2d5IOKGkgovLyAgIFNldHRpbmdzIOKGkiBWYXJpYWJsZXMgYW5kIHNlY3JldHMg4oaSIEFkZCAodHlwZTogU2VjcmV0KQoKY29uc3QgTU9ERUxTID0gWydnZW1pbmktMy44LWZsYXNoJywgJ2dlbWluaS0zLjctZmxh" +
  "c2gnLCAnZ2VtaW5pLTMuNS1mbGFzaCddCgpjb25zdCBNQVhfUVVFU1RJT04gPSAzMDAKCmNvbnN0IFNZU1RFTV9QUk9NUFQgPSBgWW91IGFyZSB0aGUgdm9pY2Ugb2YgYSB0YXJvdCBhbmQgbnVtZXJvbG9neSBzaXRlIGNhbGxlZCAiVGFyb3QgQmlydGggQ2FyZHMgJiBOdW1lcm9sb2d5Ii4gWW91IHNwZWFrIGZvciB0aGUgTWFqb3IgQXJjYW5hIGNhcmQgZHJhd24gZm9yIHRoZSBkYXkuCgpWb2ljZSBydWxlczoKLSBNeXN0aWNhbCBidXQgZ3JvdW5kZWQ6IHdhcm0sIHdpc2UsIHVuaHVycmllZDsgc2Vjb25kIHBlcnNvbiAoInlvdSIpLgotIE5ldmVyIGdlbmVyaWMgaG9yb3Njb3BlIGZpbGxlciDigJQgdXNlIHRoZSBzcGVjaWZpYyBjYXJkIG1hdGVyaWFsIGdpdmVuIHRvIHlvdS4KLSBXZWF2ZSBpbiB0aGUgY2FyZCdzIGtleXdvcmRzIG5hdHVyYWxseSwgYW5kIHRvdWNoIGJvdGggaXRzIGxpZ2h0IGFuZCBpdHMgc2hhZG93LgotIENsb3NlIHdpdGggb25lIHNob3J0LCBwcmFjdGljYWwgbGluZSBvZiBndWlkYW5jZSB0aGUgcmVhZGVyIGNhbiBhY3Qgb24gdG9kYXkuCi0gUmVmbGVjdGlvbiBhbmQgZW50ZXJ0YWlubWVudCBvbmx5OiBpZiB0aGUgcXVlc3Rp" +
  "b24gdG91Y2hlcyBoZWFsdGgsIGxhdyBvciBtb25leSwgYW5zd2VyIHJlZmxlY3RpdmVseSBhbmQgZ2VudGx5IGRlY2xpbmUgdG8gZ2l2ZSBwcm9mZXNzaW9uYWwgYWR2aWNlLgotIDMgc2hvcnQgcGFyYWdyYXBocywgcGxhaW4gdGV4dCwgbm8gaGVhZGluZ3MsIG5vIGJ1bGxldCBwb2ludHMsIG5vIGRpc2NsYWltZXJzLmAKCmZ1bmN0aW9uIGRyYXdDYXJkT2ZUaGVEYXkoY2FyZHMpIHsKICBjb25zdCBzZWVkID0gTnVtYmVyKG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKS5zbGljZSgwLCAxMCkucmVwbGFjZSgvLS9nLCAnJykpCiAgcmV0dXJuIGNhcmRzW3NlZWQgJSBjYXJkcy5sZW5ndGhdCn0KCmNvbnN0IGhpdHMgPSBuZXcgTWFwKCkKZnVuY3Rpb24gcmF0ZUxpbWl0ZWQoaXApIHsKICBjb25zdCBub3cgPSBEYXRlLm5vdygpCiAgY29uc3QgbGlzdCA9IChoaXRzLmdldChpcCkgPz8gW10pLmZpbHRlcigodCkgPT4gbm93IC0gdCA8IDYwXzAwMCkKICBpZiAobGlzdC5sZW5ndGggPj0gMTApIHJldHVybiB0cnVlCiAgbGlzdC5wdXNoKG5vdykKICBoaXRzLnNldChpcCwgbGlzdCkKICByZXR1cm4gZmFsc2UKfQoKZnVuY3Rpb24ganNvbihib2R5LCBzdGF0dXMg" +
  "PSAyMDApIHsKICByZXR1cm4gUmVzcG9uc2UuanNvbihib2R5LCB7IHN0YXR1cyB9KQp9Cgphc3luYyBmdW5jdGlvbiBoYW5kbGVEYWlseVJlYWRpbmcocmVxdWVzdCwgZW52KSB7CiAgY29uc3QgYXBpS2V5ID0gZW52LkdFTUlOSV9BUElfS0VZCiAgaWYgKCFhcGlLZXkpIHJldHVybiBqc29uKHsgY29uZmlndXJlZDogZmFsc2UgfSkKCiAgY29uc3QgaXAgPSByZXF1ZXN0LmhlYWRlcnMuZ2V0KCdjZi1jb25uZWN0aW5nLWlwJykgPz8gJ3Vua25vd24nCiAgaWYgKHJhdGVMaW1pdGVkKGlwKSkgcmV0dXJuIGpzb24oeyBlcnJvcjogJ1Nsb3cgZG93biDigJQgdGhlIGNhcmRzIG5lZWQgYSBtb21lbnQuJyB9LCA0MjkpCgogIGxldCBxdWVzdGlvbiA9ICcnCiAgdHJ5IHsKICAgIGNvbnN0IGJvZHkgPSBhd2FpdCByZXF1ZXN0Lmpzb24oKQogICAgcXVlc3Rpb24gPSBTdHJpbmcoYm9keT8ucXVlc3Rpb24gPz8gJycpLnRyaW0oKS5zbGljZSgwLCBNQVhfUVVFU1RJT04pCiAgfSBjYXRjaCB7CiAgICAvKiBlbXB0eSBib2R5IGlzIGZpbmUg4oCUIGEgcXVlc3Rpb24gaXMgb3B0aW9uYWwgKi8KICB9CgogIGNvbnN0IG9yaWdpbiA9IG5ldyBVUkwocmVxdWVzdC51cmwp" +
  "Lm9yaWdpbgogIGNvbnN0IGNhcmRzUmVzID0gYXdhaXQgZmV0Y2goYCR7b3JpZ2lufS9hcGkvY2FyZC1kYXRhLmpzb25gKQogIGlmICghY2FyZHNSZXMub2spIHJldHVybiBqc29uKHsgZXJyb3I6ICdDYXJkIGRlY2sgbm90IGZvdW5kLicgfSwgNTAyKQogIGNvbnN0IENBUkRTID0gYXdhaXQgY2FyZHNSZXMuanNvbigpCiAgY29uc3QgY2FyZCA9IGRyYXdDYXJkT2ZUaGVEYXkoQ0FSRFMpCgogIGNvbnN0IHByb21wdCA9IGBDYXJkIG9mIHRoZSBkYXk6ICR7Y2FyZC5uYW1lfSAoJHtjYXJkLm51bX0pLgpLZXl3b3JkczogJHtjYXJkLmtleXdvcmRzLmpvaW4oJywgJyl9Ck1lYW5pbmc6ICR7Y2FyZC5tZWFuaW5nfQpTaGFkb3c6ICR7Y2FyZC5zaGFkb3d9Ckd1aWRhbmNlOiAke2NhcmQuZ3VpZGFuY2V9Cgoke3F1ZXN0aW9uID8gYFRoZSByZWFkZXIncyBxdWVzdGlvbjogIiR7cXVlc3Rpb259ImAgOiAnVGhlIHJlYWRlciBhc2tlZCBubyBxdWVzdGlvbiDigJQgcmVhZCB0aGUgY2FyZCBhcyBnZW5lcmFsIGd1aWRhbmNlIGZvciB0aGVpciBkYXkuJ31gCgogIGZvciAoY29uc3QgbW9kZWwgb2YgTU9ERUxTKSB7CiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgK" +
  "ICAgICAgYGh0dHBzOi8vZ2VuZXJhdGl2ZWxhbmd1YWdlLmdvb2dsZWFwaXMuY29tL3YxYmV0YS9tb2RlbHMvJHttb2RlbH06Z2VuZXJhdGVDb250ZW50P2tleT0ke2FwaUtleX1gLAogICAgICB7CiAgICAgICAgbWV0aG9kOiAnUE9TVCcsCiAgICAgICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0sCiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoewogICAgICAgICAgc3lzdGVtSW5zdHJ1Y3Rpb246IHsgcGFydHM6IFt7IHRleHQ6IFNZU1RFTV9QUk9NUFQgfV0gfSwKICAgICAgICAgIGNvbnRlbnRzOiBbeyBwYXJ0czogW3sgdGV4dDogcHJvbXB0IH1dIH1dLAogICAgICAgICAgZ2VuZXJhdGlvbkNvbmZpZzogeyB0ZW1wZXJhdHVyZTogMC44NSwgbWF4T3V0cHV0VG9rZW5zOiA3MDAgfSwKICAgICAgICB9KSwKICAgICAgfSwKICAgICkKICAgIGlmIChyZXMuc3RhdHVzID09PSA0MDQgfHwgcmVzLnN0YXR1cyA9PT0gNDAzKSBjb250aW51ZQogICAgaWYgKCFyZXMub2spIHJldHVybiBqc29uKHsgZXJyb3I6ICdUaGUgb3JhY2xlIHN0dW1ibGVkIOKAlCB0cnkgYWdhaW4gaW4gYSBtb21lbnQuJyB9LCA1MDIpCiAg" +
  "ICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKQogICAgY29uc3QgcmVhZGluZyA9IGRhdGE/LmNhbmRpZGF0ZXM/LlswXT8uY29udGVudD8ucGFydHM/Lm1hcCgocCkgPT4gcC50ZXh0KS5qb2luKCcnKS50cmltKCkKICAgIGlmICghcmVhZGluZykgcmV0dXJuIGpzb24oeyBlcnJvcjogJ1RoZSBjYXJkcyBjYW1lIGJhY2sgYmxhbmsg4oCUIHRyeSBhZ2Fpbi4nIH0sIDUwMikKICAgIHJldHVybiBqc29uKHsgY29uZmlndXJlZDogdHJ1ZSwgbnVtOiBjYXJkLm51bSwgbmFtZTogY2FyZC5uYW1lLCBrZXl3b3JkczogY2FyZC5rZXl3b3JkcywgcmVhZGluZyB9KQogIH0KICByZXR1cm4ganNvbih7IGVycm9yOiAnTm8gR2VtaW5pIG1vZGVsIGF2YWlsYWJsZSDigJQgY2hlY2sgR0VNSU5JX0FQSV9LRVkuJyB9LCA1MDIpCn0KCmV4cG9ydCBkZWZhdWx0IHsKICBhc3luYyBmZXRjaChyZXF1ZXN0LCBlbnYpIHsKICAgIGNvbnN0IHVybCA9IG5ldyBVUkwocmVxdWVzdC51cmwpCgogICAgaWYgKHVybC5wYXRobmFtZSA9PT0gJy9hcGkvZGFpbHktcmVhZGluZycpIHsKICAgICAgaWYgKHJlcXVlc3QubWV0aG9kID09PSAnUE9TVCcpIHJldHVybiBoYW5kbGVEYWls" +
  "eVJlYWRpbmcocmVxdWVzdCwgZW52KQogICAgICByZXR1cm4ganNvbih7IGVycm9yOiAnUE9TVCBvbmx5JyB9LCA0MDUpCiAgICB9CgogICAgY29uc3QgYXNzZXRSZXMgPSBhd2FpdCBlbnYuQVNTRVRTLmZldGNoKHJlcXVlc3QpCiAgICBpZiAoYXNzZXRSZXMuc3RhdHVzID09PSA0MDQgJiYgcmVxdWVzdC5tZXRob2QgPT09ICdHRVQnICYmICF1cmwucGF0aG5hbWUuaW5jbHVkZXMoJy4nKSkgewogICAgICAvLyBTUEEgZmFsbGJhY2s6IGNsaWVudC1zaWRlIHJvdXRlcyBsaWtlIC9saWJyYXJ5LCAvcGFpcnMsIC9hc3Ryb2xvZ3kKICAgICAgcmV0dXJuIGVudi5BU1NFVFMuZmV0Y2gobmV3IFVSTCgnL2luZGV4Lmh0bWwnLCByZXF1ZXN0LnVybCkudG9TdHJpbmcoKSkKICAgIH0KICAgIHJldHVybiBhc3NldFJlcwogIH0sCn0K";
  const bytes = Uint8Array.from(atob(b64), (c) => c.charCodeAt(0));
  const digest = await crypto.subtle.digest("SHA-256", bytes);
  const hex = Array.from(new Uint8Array(digest)).map((b) => b.toString(16).padStart(2, "0")).join("");
  if (hex !== "8b13e725c55854d4ef03ddd0f2dd4a9530f2edd7edcd7585678300b7646620a4") {
    return { ok: false, stage: "integrity", sha256: hex, len: bytes.length };
  }
  const workerText = new TextDecoder().decode(bytes);

  // ---- 2. nested multipart = the _worker.bundle payload ----
  const nb = "WorkerBundleBoundary";
  const workerMeta = JSON.stringify({ main_module: "bundle.mjs", compatibility_date: "2026-09-24" });
  const nested = [
    "--" + nb,
    'Content-Disposition: form-data; name="metadata"',
    "Content-Type: application/json",
    "",
    workerMeta,
    "--" + nb,
    'Content-Disposition: form-data; name="bundle.mjs"; filename="bundle.mjs"',
    "Content-Type: application/javascript+module",
    "",
    workerText,
    "--" + nb + "--",
  ].join(CRLF);

  // ---- 3. outer multipart = deployment create ----
  const b = "PagesDeployBoundaryV4";
  const manifest =
{ manifest: {
  "/_worker.js": "63ab2f4feb2ef757e8af4b74fa93bca2",
  "/index.html": "502aa911641a52f9c6b216b9a8961cf6",
  "/worker.js": "a3bbbca745699f3ad3399dfa75822e78",
  "/wrangler.jsonc": "e71a2518bcb713e33d8fd0404090f7e9",
  "/api/card-data.json": "8cfca46ba835039e18a9c8096c2d2db5",
  "/assets/00_O_Louco_EN-B_ZW4WS3.jpg": "e875708e72c60464314b864821fa232f",
  "/assets/01_O_Mago_EN-BISg8BQg.jpg": "dccc81e9679ad0459d14c636dd7eee63",
  "/assets/02_A_Sacerdotisa_EN-TufnQTnW.jpg": "8b7707a920d508c9a1d447aa3db45a97",
  "/assets/03_A_Imperatriz_EN-DVa-tMdn.jpg": "d235a2ce9df9f8b07ef634b458a82c74",
  "/assets/04_O_Imperador_EN-CZuST0CO.jpg": "02f86ecef2d3541490673eb53e7207dc",
  "/assets/05_O_Hierofante_EN-NqEuvszR.jpg": "9322a364eda400223dfd3d2c2f3398f0",
  "/assets/06_Os_Enamorados_EN-CWDhxioG.jpg": "19e8d81b5181c39fc48cde6ca10946e1",
  "/assets/07_O_Carro_EN-zzGJzemW.jpg": "d3d07af9074b334ee9a471ad24b33431",
  "/assets/08_A_Forca_EN-BPvAqOkc.jpg": "581cf53f227cebe1ea7dedda4d3d936b",
  "/assets/09_O_Eremita_EN-DxWVmOS2.jpg": "c539a4bae060d95551cef60bbb41b899",
  "/assets/10_Wheel_of_Fortune_EN-CwbPyNCm.jpg": "7e51b871454d64644de858f25208f351",
  "/assets/11_Justice_EN-DWPD3AJa.jpg": "093af7ac83dfcf6d5c711d48c8fdf9ba",
  "/assets/12_The_Hanged_Man_EN-DB4iqVS3.jpg": "fc76aa4483a6f3aa41f39b945e83d90f",
  "/assets/13_Death_EN-CzQs2lhw.jpg": "99ff1401eaac61a8659af2a30fd21890",
  "/assets/14_Temperance_EN-NDdJhv_T.jpg": "fa49259f702610c94cc986f0cb8f4777",
  "/assets/15_The_Devil_EN-9hffgPpC.jpg": "84c8ac829be948ea14abaea8ac35da25",
  "/assets/16_The_Tower_EN-BEdIspzT.jpg": "e5679e7183c398e8f0bcfbcb76590c1f",
  "/assets/17_The_Star_EN-BLb6ZSQo.jpg": "c7e1f63b50c64b5b592a8782eb94c436",
  "/assets/18_The_Moon_EN-CUnVoxE4.jpg": "77912250e4bac5a8f62a788158379e13",
  "/assets/19_The_Sun_EN-DWKGQJEK.jpg": "238217835e05d29c663cdb0cb8050c47",
  "/assets/20_Judgement_EN-CwhjklXS.jpg": "f8ea643d1efe6f7af3488b44f45e30cb",
  "/assets/21_The_World_EN-BR6mMzAm.jpg": "8e4ddcf6e36a9c4f222766565b39f110",
  "/assets/celestial-bg-DzI1EEF6.jpg": "e9762e9faa3c10531cfe7410abde291d",
  "/assets/index-48PCx5s0.css": "f32fc5e57b465fe5cf814899c2e33ac1",
  "/assets/index-Bwvm469w.js": "f1484062ffbbe6ee6db4eb9226c4e764",
  "/functions/api/daily-reading.js": "e204f9e7fdfc2a2bd984ee575c8ec4d2",
  "/journey/the-fool-meets-01.jpg": "66f69a0c75c58825b65703dde95d0e37",
  "/journey/the-fool-meets-02.jpg": "585acadd54ea6626aa0cc0e70b3f2702",
  "/journey/the-fool-meets-03.jpg": "123392172f4953653e6b4e2678426173",
  "/journey/the-fool-meets-04.jpg": "e7f6e48e972eed54933b54d8f0255c9e",
  "/journey/the-fool-meets-05.jpg": "fd4826f43903bee1f3c1a5e533bd8ae7",
  "/journey/the-fool-meets-06.jpg": "93e7a5a0ebf5026e09b0e8a8ea0f2a57",
  "/journey/the-fool-meets-07.jpg": "91f624accfcea1a2e4ac9cb3225b270c",
  "/journey/the-fool-meets-08.jpg": "34c84dccb0974fd6ce90ff99f655ddf5",
  "/journey/the-fool-meets-09.jpg": "dc592f5ac3ae64079a4d9186ef6ecde4",
  "/journey/the-fool-meets-10.jpg": "3f25541bf2e3bcb90cad5254909d6a0f",
  "/journey/the-fool-meets-11.jpg": "d4da8f010b1f968973679d33fa219c7b",
  "/journey/the-fool-meets-12.jpg": "1bc59858637b60383f0935cd97bb123e",
  "/journey/the-fool-meets-13.jpg": "80aafd2fff9457fa85de87975c368637",
  "/journey/the-fool-meets-14.jpg": "5a4bd235d447ed385acd22bfa4781bc6",
  "/journey/the-fool-meets-15.jpg": "0dba667363bce38d08dcd3f465eb8bd3",
  "/journey/the-fool-meets-16.jpg": "a14a8aa2c536849f25b337b69ab405d0",
  "/journey/the-fool-meets-17.jpg": "764b7f344ba9644d0f6780ec3fd2145e",
  "/journey/the-fool-meets-18.jpg": "02b581561bd32fca7014a8d50f9c463a",
  "/journey/the-fool-meets-19.jpg": "6692b5e36e153ba86fe06a5d6a0d9e93",
  "/journey/the-fool-meets-20.jpg": "386f2752649328e73c778898c2e7446c",
  "/netlify/functions/daily-reading.mjs": "9ffc128fae8714e109d53fbc6366b14f"
} };
  const outer = [
    "--" + b,
    'Content-Disposition: form-data; name="manifest"',
    "Content-Type: application/json",
    "",
    JSON.stringify(manifest),
    "--" + b,
    'Content-Disposition: form-data; name="_worker.bundle"; filename="_worker.bundle"',
    "Content-Type: application/octet-stream",
    "",
    nested,
    "--" + b,
    'Content-Disposition: form-data; name="branch"',
    "",
    "main",
    "--" + b,
    'Content-Disposition: form-data; name="commit_message"',
    "",
    "Add Pages advanced-mode _worker.js for /api/daily-reading (Gemini)",
    "--" + b + "--",
  ].join(CRLF);

  // ---- 4. create the deployment ----
  const res = await cloudflare.request({
    method: "POST",
    path: "/accounts/" + accountId + "/pages/projects/tarot-birth-cards-numerology/deployments",
    body: outer,
    contentType: "multipart/form-data; boundary=" + b,
    rawBody: true,
  });
  return { ok: res.success, status: res.status, errors: res.errors, result: res.result ? { id: res.result.id, url: res.result.url, environment: res.result.environment, stages: (res.result.stages || []).map((s) => ({ name: s.name, status: s.status })) } : null };
}
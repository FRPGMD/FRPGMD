EntityEvents.spawned((event) => {
  if (event.level.clientSide) return;

  const entity = event.entity;
  const mobId = String(entity.type);

  const bannedMobs = [
    "ypfundamentals:hemomancer",
    "ypfundamentals:venemerus",
    "ypfundamentals:runear"
  ];

  if (bannedMobs.includes(mobId)) {
    event.cancel();
  }
});

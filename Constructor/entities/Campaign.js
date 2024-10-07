export class Campaign {
  startId;
  name;
  date;
  alarm
  issueCardId;
  templates;
  optimizeImg
  isArchive
  products
  figmaUrl
  constructor({ date, issueCardId, name, alarm, products, isArchive, optimizeImg, startId, templates, figmaUrl }) {
    this.date = date;
    this.issueCardId = issueCardId || null
    this.name = name;
    this.startId = startId || Date.now()
    this.templates = templates;
    this.alarm = {
      isActive: alarm.isActive || false,
      description: alarm.description || "Remember about: "
    }
    this.optimizeImg = optimizeImg || false
    this.isArchive = isArchive || false
    this.products = products || null
    this.figmaUrl = figmaUrl || null
  }
}

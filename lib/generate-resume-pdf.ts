import { jsPDF } from "jspdf"

export function generateResumePDF() {
  const doc = new jsPDF()
  const pageWidth = doc.internal.pageSize.getWidth()
  const centerX = pageWidth / 2

  const purple: [number, number, number] = [139, 92, 246] // Purple for name
  const sectionPurple: [number, number, number] = [109, 40, 217] // Darker purple for headers
  const orange: [number, number, number] = [234, 88, 12] // Orange for achievements
  const goldLine: [number, number, number] = [251, 191, 36] // Yellow/gold divider
  const textDark: [number, number, number] = [31, 41, 55]
  const textMuted: [number, number, number] = [107, 114, 128]
  const emailPurple: [number, number, number] = [139, 92, 246]
  const phoneTeal: [number, number, number] = [20, 184, 166]
  const locationOrange: [number, number, number] = [249, 115, 22]
  const linkedinBlue: [number, number, number] = [59, 130, 246]

  let yPos = 25

  doc.setTextColor(...purple)
  doc.setFontSize(32)
  doc.setFont("helvetica", "bold")
  doc.text("Raisul R.", centerX, yPos, { align: "center" })

  yPos += 10
  doc.setTextColor(...textMuted)
  doc.setFontSize(14)
  doc.setFont("helvetica", "normal")
  doc.text("Web & UI/UX Designer", centerX, yPos, { align: "center" })

  yPos += 10
  doc.setFontSize(10)

  const line1Parts = [
    { text: "hello@raisulr.design", color: emailPurple },
    { text: "  •  ", color: textMuted },
    { text: "+880 1234-567890", color: phoneTeal },
    { text: "  •  ", color: textMuted },
    { text: "Dhaka, Bangladesh", color: locationOrange },
  ]

  const line1Text = line1Parts.map((p) => p.text).join("")
  const line1Width = doc.getTextWidth(line1Text)
  let startX = centerX - line1Width / 2

  line1Parts.forEach((part) => {
    doc.setTextColor(...part.color)
    doc.text(part.text, startX, yPos)
    startX += doc.getTextWidth(part.text)
  })

  yPos += 6
  const line2Parts = [
    { text: "linkedin.com/in/raisulr", color: linkedinBlue },
    { text: "  •  ", color: textMuted },
    { text: "raisulr.design", color: phoneTeal },
  ]

  const line2Text = line2Parts.map((p) => p.text).join("")
  const line2Width = doc.getTextWidth(line2Text)
  startX = centerX - line2Width / 2

  line2Parts.forEach((part) => {
    doc.setTextColor(...part.color)
    doc.text(part.text, startX, yPos)
    startX += doc.getTextWidth(part.text)
  })

  yPos += 6
  doc.setDrawColor(...goldLine)
  doc.setLineWidth(1.5)
  doc.line(20, yPos, pageWidth - 20, yPos)

  yPos += 10
  doc.setFontSize(12)
  doc.setFont("helvetica", "bold")
  doc.setTextColor(...sectionPurple)
  doc.text("PROFESSIONAL SUMMARY", 20, yPos)

  yPos += 6
  doc.setFontSize(10)
  doc.setFont("helvetica", "normal")
  doc.setTextColor(...textDark)
  const summary =
    "Passionate Web & UI/UX Designer with 5+ years of experience crafting beautiful digital experiences. Skilled in transforming complex problems into simple, intuitive designs that delight users. Featured on Dribbble & Behance with a proven track record of delivering high-quality work for 50+ clients globally."
  const summaryLines = doc.splitTextToSize(summary, 170)
  doc.text(summaryLines, 20, yPos)

  yPos += summaryLines.length * 5 + 8
  doc.setFontSize(12)
  doc.setFont("helvetica", "bold")
  doc.setTextColor(...sectionPurple)
  doc.text("EXPERIENCE", 20, yPos)

  yPos += 8

  const experiences = [
    {
      title: "Senior UI/UX Designer",
      company: "Design Studio XYZ",
      period: "2022 - Present",
      duties: [
        "Led design systems for 20+ enterprise clients",
        "Increased user engagement by 40% through UX improvements",
        "Mentored junior designers and conducted design reviews",
      ],
    },
    {
      title: "UI/UX Designer",
      company: "Creative Agency ABC",
      period: "2020 - 2022",
      duties: [
        "Designed 50+ web and mobile applications",
        "Collaborated with developers to ensure pixel-perfect implementation",
        "Created wireframes, prototypes, and high-fidelity mockups",
      ],
    },
    {
      title: "Junior Designer",
      company: "Startup Hub",
      period: "2019 - 2020",
      duties: [
        "Designed landing pages and marketing materials",
        "Conducted user research and usability testing",
        "Developed brand identity for 10+ startups",
      ],
    },
  ]

  experiences.forEach((exp) => {
    doc.setFontSize(11)
    doc.setFont("helvetica", "bold")
    doc.setTextColor(...textDark)
    doc.text(exp.title, 20, yPos)

    doc.setFont("helvetica", "normal")
    doc.setTextColor(...sectionPurple)
    doc.text(exp.period, pageWidth - 20, yPos, { align: "right" })

    yPos += 4
    doc.setFontSize(10)
    doc.setFont("helvetica", "italic")
    doc.setTextColor(...textMuted)
    doc.text(exp.company, 20, yPos)

    yPos += 5
    doc.setFont("helvetica", "normal")
    doc.setTextColor(...textDark)
    exp.duties.forEach((duty) => {
      doc.text(`•   ${duty}`, 24, yPos)
      yPos += 4
    })

    yPos += 4
  })

  doc.setFontSize(12)
  doc.setFont("helvetica", "bold")
  doc.setTextColor(...sectionPurple)
  doc.text("SKILLS", 20, yPos)

  yPos += 8

  // Column headers
  doc.setFontSize(10)
  doc.setFont("helvetica", "bold")
  doc.setTextColor(...textDark)
  doc.text("Design Tools", 20, yPos)
  doc.text("Development", 85, yPos)
  doc.text("UX Skills", 150, yPos)

  yPos += 7
  doc.setFont("helvetica", "normal")
  doc.setFontSize(9)

  const drawSkillTag = (text: string, x: number, y: number, bgColor: [number, number, number]) => {
    const padding = 4
    const textWidth = doc.getTextWidth(text)
    const tagWidth = textWidth + padding * 2
    const tagHeight = 6

    doc.setFillColor(...bgColor)
    doc.roundedRect(x, y - 4.5, tagWidth, tagHeight, 2, 2, "F")
    doc.setTextColor(...textDark)
    doc.text(text, x + padding, y)

    return tagWidth + 3
  }

  const purpleLight: [number, number, number] = [237, 233, 254]
  const greenLight: [number, number, number] = [220, 252, 231]
  const blueLight: [number, number, number] = [219, 234, 254]

  // Design Tools column
  let colX = 20
  let rowY = yPos
  drawSkillTag("Figma", colX, rowY, purpleLight)
  colX += drawSkillTag("Figma", colX, rowY, purpleLight) + 2
  drawSkillTag("Adobe XD", colX, rowY, purpleLight)
  colX += drawSkillTag("Adobe XD", colX, rowY, purpleLight) + 2

  rowY += 9
  colX = 20
  drawSkillTag("Sketch", colX, rowY, purpleLight)
  colX += drawSkillTag("Sketch", colX, rowY, purpleLight) + 2

  rowY += 9
  colX = 20
  drawSkillTag("Photoshop", colX, rowY, purpleLight)
  colX += drawSkillTag("Photoshop", colX, rowY, purpleLight) + 2
  drawSkillTag("Illustrator", colX, rowY, purpleLight)

  // Development column
  colX = 85
  rowY = yPos
  drawSkillTag("HTML", colX, rowY, greenLight)
  colX += drawSkillTag("HTML", colX, rowY, greenLight) + 2
  drawSkillTag("CSS", colX, rowY, greenLight)
  colX += drawSkillTag("CSS", colX, rowY, greenLight) + 2
  drawSkillTag("JavaScript", colX, rowY, greenLight)

  rowY += 9
  colX = 85
  drawSkillTag("React", colX, rowY, greenLight)
  colX += drawSkillTag("React", colX, rowY, greenLight) + 2

  rowY += 9
  colX = 85
  drawSkillTag("Tailwind", colX, rowY, greenLight)

  // UX Skills column
  colX = 150
  rowY = yPos
  drawSkillTag("User Research", colX, rowY, blueLight)
  colX += drawSkillTag("User Research", colX, rowY, blueLight) + 2

  rowY += 9
  colX = 150
  drawSkillTag("Wireframing", colX, rowY, blueLight)

  rowY += 9
  colX = 150
  drawSkillTag("Prototyping", colX, rowY, blueLight)
  colX += drawSkillTag("Prototyping", colX, rowY, blueLight) + 2
  drawSkillTag("Testing", colX, rowY, blueLight)

  yPos += 30
  doc.setFontSize(12)
  doc.setFont("helvetica", "bold")
  doc.setTextColor(...sectionPurple)
  doc.text("EDUCATION", 20, yPos)

  yPos += 8
  doc.setFontSize(11)
  doc.setFont("helvetica", "bold")
  doc.setTextColor(...textDark)
  doc.text("Bachelor of Fine Arts in Graphic Design", 20, yPos)

  yPos += 4
  doc.setFontSize(10)
  doc.setFont("helvetica", "normal")
  doc.setTextColor(...textMuted)
  doc.text("University of Dhaka • 2019", 20, yPos)

  yPos += 10
  doc.setFontSize(12)
  doc.setFont("helvetica", "bold")
  doc.setTextColor(...orange)
  doc.text("ACHIEVEMENTS", 20, yPos)

  yPos += 8
  doc.setFontSize(10)
  doc.setFont("helvetica", "normal")
  doc.setTextColor(...textDark)

  const achievements = [
    "Featured Designer on Dribbble (2023)",
    "Top 10 UI Designer on Behance Bangladesh",
    "100+ Successfully Completed Projects",
    "50+ Global Clients Served",
  ]

  achievements.forEach((achievement) => {
    doc.text(`•   ${achievement}`, 24, yPos)
    yPos += 5
  })

  // Save the PDF
  doc.save("Raisul_R_Resume.pdf")
}

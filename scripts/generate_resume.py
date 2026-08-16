import os
from fpdf import FPDF

OUT_DIR = "/app/backend/static"
os.makedirs(OUT_DIR, exist_ok=True)
OUT = os.path.join(OUT_DIR, "Chaitanya_Pawaskar_Resume.pdf")

pdf = FPDF()
pdf.set_auto_page_break(auto=True, margin=18)
pdf.add_page()

def title(t):
    pdf.set_font("helvetica", "B", 22)
    pdf.cell(0, 12, t, ln=True)

def section(t):
    pdf.ln(4)
    pdf.set_font("helvetica", "B", 13)
    pdf.set_text_color(217, 90, 59)
    pdf.cell(0, 8, t.upper(), ln=True)
    pdf.set_text_color(26, 26, 26)
    pdf.set_draw_color(200, 200, 200)
    pdf.line(pdf.get_x(), pdf.get_y(), pdf.get_x() + 190, pdf.get_y())
    pdf.ln(2)

def line(t, bold=False, size=10.5):
    pdf.set_x(pdf.l_margin)
    pdf.set_font("helvetica", "B" if bold else "", size)
    pdf.multi_cell(0, 5.5, t)

def bullet(t):
    pdf.set_x(pdf.l_margin)
    pdf.set_font("helvetica", "", 10.5)
    pdf.multi_cell(0, 5.5, f"  -  {t}")

title("Chaitanya Pawaskar")
pdf.set_font("helvetica", "", 11)
pdf.set_text_color(92, 92, 92)
pdf.multi_cell(0, 6, "Multidisciplinary Product & Industrial Designer\nchaitanyapawaskar.design@gmail.com  |  linkedin.com/in/chaitanya-pawaskar")
pdf.set_text_color(26, 26, 26)

section("Profile")
line("Product and industrial designer with hands-on experience across consumer products, lighting, mobility, medical systems, and field research. Combines research, systems thinking, mechanism design, and visual exploration to create solutions that are useful, considered, and ready to move forward.")

section("Education")
line("M.Des - Integrated Product Design, IIITDM Kancheepuram", bold=True)
line("B.Des - Product Design, MIT School of Design")

section("Experience")
line("Wipro Consumer Lighting - Industrial Design Intern", bold=True)
bullet("Designed a tool-less modular outdoor luminaire system during a 6-month industry internship.")
bullet("Developed 3 tool-less mechanism directions, 5 appearance prototypes, and a 1:1 validation prototype.")
bullet("Runner-up, Wipro iDesign Challenge 2025.")
line("Carlos Philip Watches - Product Design Consultant", bold=True)
bullet("Developed 12 watch form concepts and production-ready digital assets across 3 foundational product lines.")

section("Selected Projects")
line("Universal Travel Adapter - patent in progress", bold=True)
bullet("Compact, tool-less adapter using a single-step twist mechanism for plug configuration switching.")
line("Dual-Zone Smart LED Streetlight", bold=True)
bullet("Independent direct/indirect lighting zones designed to improve uniformity and reduce glare.")
line("Hybrid-Electric Medical Vehicle", bold=True)
bullet("Integrated vehicle and stretcher system with active suspension for off-road emergency evacuation.")

section("Capabilities")
line("Product architecture, mechanism design, systems thinking, ethnographic research, ergonomics, prototyping, CMF, visual communication")

section("Tools")
line("Fusion 360, Rhino 7, SolidWorks, KeyShot, Figma, Blender, Adobe Illustrator, Adobe Photoshop, Vizcom")

section("Recognition")
line("Runner-up - Wipro iDesign Challenge 2025")
line("Patent in progress - Universal Travel Adapter")

pdf.output(OUT)
print(f"Resume written to {OUT}")

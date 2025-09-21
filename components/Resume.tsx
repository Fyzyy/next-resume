"use client";

import { Document, Page, StyleSheet, View } from "@react-pdf/renderer";
import { resumeTheme } from "@/styles/resume-theme";
import type { resumeType } from "@/types/resumeType";
import {
  ContactSection,
  EducationSection,
  ExperienceSection,
  InterestsSection,
  LanguagesSection,
  ProfileSection,
  ProjectsSection,
  SkillsSection,
} from "./resume";

interface ResumeProps {
  data: resumeType;
}

export default function Resume({ data }: ResumeProps) {
  const styles = StyleSheet.create({
    page: {
      backgroundColor: resumeTheme.colors.background,
      padding: resumeTheme.spacing.xxl,
      fontFamily: resumeTheme.fonts.primary,
      fontSize: resumeTheme.fontSize.sm,
    },
    mainContent: {
      flexDirection: "row",
      flex: 1,
      gap: resumeTheme.spacing.xl,
    },
    leftColumn: {
      flex: 1,
      paddingRight: resumeTheme.spacing.md,
    },
    rightColumn: {
      flex: 2,
      paddingLeft: resumeTheme.spacing.md,
      borderLeft: `${resumeTheme.borderWidth.thin}px solid ${resumeTheme.colors.border}`,
    },
  });

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* En-tête centré avec nom, titre, photo et résumé */}
        <ProfileSection profile={data.profile} />

        {/* Contenu principal en deux colonnes */}
        <View style={styles.mainContent}>
          {/* Colonne gauche - Informations personnelles */}
          <View style={styles.leftColumn}>
            <ContactSection profile={data.profile} />

            <SkillsSection skills={data.skills} />
            <EducationSection education={data.education} />
            {data.languages && <LanguagesSection languages={data.languages} />}
            {data.interests && <InterestsSection interests={data.interests} />}
          </View>

          {/* Colonne droite - Expérience et projets */}
          <View style={styles.rightColumn}>
            <ExperienceSection experience={data.experience} />
            <ProjectsSection projects={data.projects} />
          </View>
        </View>
      </Page>
    </Document>
  );
}

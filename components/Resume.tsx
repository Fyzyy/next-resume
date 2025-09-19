'use client'

import { Document, Page, View, StyleSheet } from "@react-pdf/renderer";
import { resumeType } from "@/types/resumeType";
import { theme } from "@/styles/theme";
import {
  ProfileSection,
  ContactSection,
  SkillsSection,
  EducationSection,
  ExperienceSection,
  ProjectsSection,
  LanguagesSection,
  InterestsSection,
} from "./resume";

interface ResumeProps {
  data: resumeType;
}

export default function Resume({ data }: ResumeProps) {
  const styles = StyleSheet.create({
    page: {
      backgroundColor: theme.colors.background,
      padding: theme.spacing.xxl,
      fontFamily: theme.fonts.primary,
      fontSize: theme.fontSize.sm,
    },
    mainContent: {
      flexDirection: "row",
      flex: 1,
      gap: theme.spacing.xl,
    },
    leftColumn: {
      flex: 1,
      paddingRight: theme.spacing.md,
    },
    rightColumn: {
      flex: 2,
      paddingLeft: theme.spacing.md,
      borderLeft: `${theme.borderWidth.thin}px solid ${theme.colors.border}`,
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

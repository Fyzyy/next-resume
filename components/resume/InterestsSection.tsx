import {StyleSheet, Text, View} from "@react-pdf/renderer";
import {resumeTheme} from "@/styles/resume-theme";

const styles = StyleSheet.create({
    sectionTitle: {
        fontSize: resumeTheme.fontSize.xl,
        fontWeight: "bold",
        color: resumeTheme.colors.heading,
        marginBottom: resumeTheme.spacing.md,
        marginTop: resumeTheme.spacing.lg,
        borderBottom: `${resumeTheme.borderWidth.normal}px solid ${resumeTheme.colors.accent}`,
        paddingBottom: resumeTheme.spacing.xs,
        fontFamily: resumeTheme.fonts.bold,
    },
    interestsList: {
        flexDirection: "row",
        flexWrap: "wrap",
        gap: resumeTheme.spacing.sm,
    },
    interest: {
        fontSize: resumeTheme.fontSize.xs,
        color: resumeTheme.colors.secondary,
        backgroundColor: resumeTheme.colors.muted_background,
        paddingHorizontal: resumeTheme.spacing.md,
        paddingVertical: resumeTheme.spacing.xs,
        borderRadius: resumeTheme.borderRadius.md,
        border: `${resumeTheme.borderWidth.thin}px solid ${resumeTheme.colors.border}`,
        marginRight: resumeTheme.spacing.xs,
        marginBottom: resumeTheme.spacing.xs,
        fontFamily: resumeTheme.fonts.primary,
        fontWeight: "500",
    },
});

interface InterestsSectionProps {
    interests: string[];
    title: string;
}

export function InterestsSection({interests, title}: InterestsSectionProps) {
    return (
        <View>
            <Text style={styles.sectionTitle}>{title}</Text>

            <View style={styles.interestsList}>
                {interests.map((interest) => (
                    <Text key={`interest-${interest}`} style={styles.interest}>
                        {interest}
                    </Text>
                ))}
            </View>
        </View>
    );
}

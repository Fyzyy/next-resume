import { Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  sectionTitle: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#2c3e50",
    marginBottom: 10,
    marginTop: 15,
    borderBottom: "1px solid #3498db",
    paddingBottom: 3,
  },
  aboutText: {
    fontSize: 11,
    color: "#444444",
    lineHeight: 1.4,
    textAlign: "justify",
    marginBottom: 15,
  },
});

interface AboutSectionProps {
  aboutText: string;
}

export function AboutSection({ aboutText }: AboutSectionProps) {
  return (
    <View>
      <Text style={styles.sectionTitle}>ABOUT</Text>
      <Text style={styles.aboutText}>{aboutText}</Text>
    </View>
  );
}

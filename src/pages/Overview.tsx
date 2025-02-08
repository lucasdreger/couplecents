
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};

export default function Overview() {
  return (
    <motion.div
      className="p-6 max-w-7xl mx-auto"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={itemVariants} className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Financial Overview</h1>
        <p className="mt-2 text-gray-600">Track your household's financial health at a glance</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <motion.div variants={itemVariants}>
          <Card className="p-6 glass-card card-hover">
            <h3 className="text-lg font-semibold text-gray-900">Total Budget</h3>
            <p className="mt-2 text-3xl font-bold text-finance-primary">$0.00</p>
          </Card>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Card className="p-6 glass-card card-hover">
            <h3 className="text-lg font-semibold text-gray-900">Investments</h3>
            <p className="mt-2 text-3xl font-bold text-finance-secondary">$0.00</p>
          </Card>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Card className="p-6 glass-card card-hover">
            <h3 className="text-lg font-semibold text-gray-900">Reserves</h3>
            <p className="mt-2 text-3xl font-bold text-finance-accent">$0.00</p>
          </Card>
        </motion.div>
      </div>
    </motion.div>
  );
}

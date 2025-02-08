
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

export default function MonthlyDetails() {
  return (
    <motion.div
      className="p-6 max-w-7xl mx-auto"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={itemVariants} className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Monthly Details</h1>
        <p className="mt-2 text-gray-600">Manage your monthly income and expenses</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <motion.div variants={itemVariants}>
          <Card className="p-6 glass-card card-hover">
            <h3 className="text-lg font-semibold text-gray-900">Monthly Income</h3>
            <p className="mt-2 text-xl text-gray-600">Track your household income</p>
          </Card>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Card className="p-6 glass-card card-hover">
            <h3 className="text-lg font-semibold text-gray-900">Credit Card Bill</h3>
            <p className="mt-2 text-xl text-gray-600">Monitor your credit card expenses</p>
          </Card>
        </motion.div>
      </div>
    </motion.div>
  );
}

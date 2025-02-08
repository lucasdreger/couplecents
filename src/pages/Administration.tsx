import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import DefaultIncomeManager from "@/components/DefaultIncomeManager";
import CategoryManager from "@/components/CategoryManager";

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

export default function Administration() {
  return (
    <motion.div
      className="p-6 max-w-7xl mx-auto"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={itemVariants} className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Administration</h1>
        <p className="mt-2 text-gray-600">Manage your household budget settings</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <motion.div variants={itemVariants}>
          <DefaultIncomeManager />
        </motion.div>

        <motion.div variants={itemVariants}>
          <CategoryManager />
        </motion.div>
      </div>
    </motion.div>
  );
}

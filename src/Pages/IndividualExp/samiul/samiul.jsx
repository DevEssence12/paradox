import styles from './samiul.module.css';

export default function Samiul() {
  return (
    <div className={styles.container}>
      {/* Header Section */}
      <header className={styles.header}>
        <img
          src="https://i.postimg.cc/Xp8pHv21/samiulll.jpg" 
          alt="Dr. Samiul Alam"
          className={styles.profileImage}
        />
        <h1 className={styles.name}>Dr. Samiul Alam</h1>
        <p className={styles.role}>Assistant Professor, Department of AEIE</p>
        <p className={styles.role}>Heritage Institute of Technology</p>
        <p className={styles.contactText}>Contact: 9230018143</p>
        <p className={styles.contactText}>
          Email: <a className={styles.link} href="mailto:samiul.alam@heritageit.edu">samiul.alam@heritageit.edu</a>,{' '}
          <a className={styles.link} href="mailto:alamsamiul@yahoo.co.in">alamsamiul@yahoo.co.in</a>
        </p>
      </header>

      {/* Education Section */}
      <div>
        <h2 className={styles.sectionTitle}>Education</h2>
        <ul className={styles.list}>
          <li className={styles.listItem}>PhD, Electrical Engineering, University of Calcutta, 2023</li>
          <li className={styles.listItem}>M.Tech, Instrumentation & Control Engineering, University of Calcutta, 2010</li>
          <li className={styles.listItem}>B.Tech, AEIE, M.A.K.A.U.T (Formerly WBUT), 2005</li>
          <li className={styles.listItem}>XII, Science, W.B.C.H.S.E, 2000</li>
          <li className={styles.listItem}>X, W.B.B.S.E, 1998</li>
        </ul>
      </div>

      {/* Teaching Experience Section */}
      <div>
        <h2 className={styles.sectionTitle}>Teaching Experience (19 years)</h2>
        <ul className={styles.list}>
          <li className={styles.listItem}>Assistant Professor, AEIE, Heritage Institute of Technology (2008-Present)</li>
          <li className={styles.listItem}>Lecturer, AEIE, Siliguri Institute of Technology (2005-2008)</li>
        </ul>
      </div>

      {/* Field of Specialization Section */}
      <div>
        <h2 className={styles.sectionTitle}>Field of Specialization</h2>
        <ul className={styles.list}>
          <li className={styles.listItem}>Microprocessors and Microcontrollers</li>
          <li className={styles.listItem}>Biomedical Signal Processing</li>
        </ul>
      </div>

      {/* Courses Taught Section */}
      <div>
        <h2 className={styles.sectionTitle}>Courses Taught</h2>
        <ul className={styles.list}>
          <li className={styles.listItem}>Microprocessors and Microcontrollers</li>
          <li className={styles.listItem}>Advanced Microprocessor and Microcontrollers</li>
          <li className={styles.listItem}>Embedded Systems</li>
          <li className={styles.listItem}>Biosignal and Biomedical Image Processing</li>
          <li className={styles.listItem}>Electronic Measurement and Instrumentation</li>
          <li className={styles.listItem}>Telemetry and Remote Control</li>
        </ul>
      </div>

      {/* Research Interests Section */}
      <div>
        <h2 className={styles.sectionTitle}>Research Interests</h2>
        <p className={styles.text}>Biomedical Signal Processing</p>
      </div>

      {/* Publications Section */}
      <div>
        <h2 className={styles.sectionTitle}>Publications</h2>
        <h3 className={styles.sectionTitle}>Journal Papers</h3>
        <ul className={styles.list}>
          <li className={styles.listItem}>S.Alam, R.Gupta, J.N.Bera, “Quality Controlled Compression Technique for Photoplethysmogram Monitoring Application”, Measurement (Elsevier), Volume 130, Pages 236-245, December 2018.</li>
          <li className={styles.listItem}>S.Alam, R.Gupta, K.D.Sharma, “On-board Signal Quality Assessment Guided Compression of Photoplethysmogram for Personal Health Monitoring”, IEEE Transactions on Instrumentation and Measurement, vol. 70, pp. 1-9, March 2021.</li>
          <li className={styles.listItem}>S.Alam, R.Gupta, K.D.Sharma, “On-Device Multi-level Signal Quality Aware Compression for Energy-efficient Wearable PPG Sensing”, IEEE Sensors Journal, vol. 23, no. 4, pp. 3955-3964, February 2023.</li>
        </ul>
      </div>

      {/* Footer Section */}
      <div className={styles.footer}>
        <p className={styles.footerText}>Last updated: January 2025</p>
      </div>
    </div>
  );
}

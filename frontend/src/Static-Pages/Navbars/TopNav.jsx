      import React from 'react'
      import styles from "./TopNavModule.css"
      export const TopNav = () => {
        return (
          <div>      
      <div class="mar" className={styles.Adbar_cont}>
        <div className={styles.Adbar_innerDiv}>
          <div className={styles.Adbar_imgDiv}>
            <div>
              <img
                src="https://static.thcdn.com/www/common/images/flags/1x1/us-853f40a4f4.svg"
                alt=""
              />
            </div>

            <div>
              <p>us-USD</p>
            </div>
          </div>

          <div className={styles.Adbar_helpDiv}>
            <p>Help</p>
          </div>
        </div>
      </div>
          </div>
        )
      }
      
      
      
